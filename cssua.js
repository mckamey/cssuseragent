/**
	cssua.js
	User-agent specific CSS support

	Created: 2006-06-10-1635
	Modified: 2011-01-06-1227

	Copyright (c)2006-2011 Stephen M. McKamey
	Distributed under The MIT License.
*/

var cssua = (function(html, userAgent) {

	/*const string*/ var PREFIX = " ua-";

	/*jslint regexp: false, browser: true */

	var R_All = /[\w\-\.]+[\/][v]?\d+(\.\d+)*/g,
		R_AOL = /\b(aol|america online browser)[\s\/]*(\d+(\.\d+)*)/,
		R_MSIE = /\b(msie|microsoft internet explorer)[\s\/]*(\d+(\.\d+)*)/,
		R_Gecko = /rv[:](\d+(\.\d+)*).*?\bgecko[\/]\d+/,
		R_Opera = /\bopera[\s\/]*(\d+(\.\d+)*)/,
		R_Android = /\bandroid[\s]+(\d+(\.\d+)*)/,
		R_iOS = /\bos[\s]+(\d+(\_\d+)*) like mac os x/,
		R_MSPIE = /\b(mspie|microsoft pocket internet explorer)[\s\/]*(\d+(\.\d+)*)/,
		R_iCab = /\bicab[\s\/]*(\d+(\.\d+)*)/,
		R_BlackBerry = /\bblackberry\w*[\s\/]+(\d+(\.\d+)*)/,
		R_mobile = /(\w*mobile[\/]\w*|\bandroid\b|\bipad\b|\bipod\b|blackberry\w*|\bwebos\b|windows ce\b|palm\w*\b|symbian\w*\b|\w*phone\w*|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b)/;

	var cssua = {

		/*Map<string,string>*/ parse : function(/*string*/ uaStr) {
			/*Map<string,string>*/ var ua = {};

			uaStr = (""+uaStr).toLowerCase();
			if (!uaStr) {
				return ua;
			}

			// do this first for all (covers generic user-agents)
			var raw = uaStr.match(R_All);
			if (raw) {
				for (var i=0; i<raw.length; i++) {
					var s = raw[i].indexOf('/'),
						b = raw[i].substring(0, s);
					if (b && b !== "mozilla") {
						// shorten this common engine
						if (b === "applewebkit") {
							b = "webkit";
						}
						ua[b] = raw[i].substr(s+1);
					}
				}
			}

			// aol uses multiple engines so continue checking
			if (R_AOL.exec(uaStr)) {
				ua.aol = RegExp.$2;
			}

			// order is important as user-agents spoof each other	
			if (R_Opera.exec(uaStr)) {
				ua.opera = RegExp.$1;
			} else if (R_iCab.exec(uaStr)) {
				ua.icab = RegExp.$1;
			} else if (R_MSIE.exec(uaStr)) {
				ua.ie = RegExp.$2;
			} else if (R_MSPIE.exec(uaStr)) {
				ua.mspie = RegExp.$2;
			} else if (R_Gecko.exec(uaStr)) {
				ua.gecko = RegExp.$1;
			} else if (R_Android.exec(uaStr)) {
				ua.android = RegExp.$1;
			} else if (R_iOS.exec(uaStr)) {
				ua.ios = RegExp.$1.split('_').join('.');
			}

			// ensure that mobile devices have indication
			if (!ua.blackberry && R_BlackBerry.exec(uaStr)) {
				ua.blackberry = RegExp.$1;
			}
			if (R_mobile.exec(uaStr)) {
				ua.mobile = RegExp.$1;
			}

			// version standardization
			if (ua.safari) {
				if (ua.chrome || (ua.mobile && !ua.ios)) {
					delete ua.safari;

				} else if (ua.version) {
					ua.safari = ua.version;

				} else {
					ua.safari = ({
						"419": "2.0.4",
						"417": "2.0.3",
						"416": "2.0.2",
						"412": "2.0",
						"312": "1.3",
						"125": "1.2",
						"85": "1.0"
					})[parseInt(ua.safari, 10)] || ua.safari;
				}

			} else if (ua.opera && ua.version) {
				ua.opera = ua.version;
			}

			if (ua.version) {
				delete ua.version;
			}

			return ua;
		},

		/*string*/ format : function (/*Map<string,string>*/ ua) {
			/*string*/ function format(/*string*/ b, /*string*/ v) {
				b = b.split('.').join('-');
				/*string*/ var css = PREFIX+b;
				if (v) {
					v = v.split('.').join('-');
					var i = v.indexOf('-');
					while (i > 0) {
						// loop through chopping last '-' to end off
						// concat result onto return string
						css += PREFIX+b+'-'+v.substring(0, i);
						i = v.indexOf('-', i+1);
					}
					css += PREFIX+b+'-'+v;
				}
				return css;
			}

			var	uaCss = "";
			for (var b in ua) {
				if (b && ua.hasOwnProperty(b)) {
					uaCss += format(b, ua[b]);
				}
			}

			// user-agent classNames
			return uaCss;
		},

		/* Encodes parsed userAgent object as a compact URI-Encoded key-value collection */
		/*string*/ encode : function(/*Map<string,string>*/ ua) {
			var query = "";
			for (var b in ua) {
				if (b && ua.hasOwnProperty(b)) {
					if (query) {
						query += "&";
					}
					query += encodeURIComponent(b)+"="+encodeURIComponent(ua[b]);
				}
			}
			return query;
		}
	};

	// calculate userAgent
	cssua.userAgent = cssua.ua = cssua.parse(userAgent);

	// append CSS classes to HTML node
	var ua = cssua.format(cssua.ua);
	if (html.className) {
		html.className += ua;
	} else {
		html.className = ua.substr(1);
	}

	return cssua;
})(document.documentElement, navigator.userAgent);
