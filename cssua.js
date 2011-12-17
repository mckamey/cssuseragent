/**
	cssua.js
	User-agent specific CSS support

	Created: 2006-06-10-1635
	Modified: 2011-12-17-1450

	Copyright (c)2006-2011 Stephen M. McKamey
	Distributed under The MIT License.
*/

var cssua = (function(html, userAgent) {
	'use strict';

	/*const string*/ var PREFIX = ' ua-';

	/*jslint regexp: false, browser: true */

	var R_Top = /^([^(]+)\((.+)\)(.*)$/,
		R_Platform = /\s*([\-\w ]+)[\s\/]([\d_]+\b([\-\._\/]\w+)*)/,
		R_Version = /([\w\-\.]+[\s\/][v]?[\d_]+\b([\-\._\/]\w+)*)/g,

		R_Gecko = /rv[:](\d+(\.\w+)*).*?\bgecko[\/]\w+/,
		R_iOS = /\bos[\s]+(\d+(_\w+)*) like mac os x/,
		R_BlackBerry = /\bblackberry\w*[\s\/]+(\d+(\.\w+)*)/,
		R_desktop = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
		R_mobile = /(\bandroid\b|\bipad\b|\bipod\b|\bblackberry|\brim tablet os\b|\bwebos\b|\bwindows ce\b|\bwindows phone os\b|\bwindows ce\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
		R_game = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/;

	var cssua = {

		/*Map<string,string>*/ parse : function(/*string*/ uaStr) {
			/*Map<string,string>*/ var ua = {};

			uaStr = (''+uaStr).toLowerCase();
			if (!uaStr) {
				return ua;
			}

			var i, count, raw = uaStr.split(/[()]/);
			for (var j=0, rawCount=raw.length; j<rawCount; j++) {
				if (j%2) {
					// inside parens covers platform identifiers
					var platforms = raw[j].split(';');
					for (i=0, count=platforms.length; i<count; i++) {
						if (R_Platform.exec(platforms[i]) &&
							// filter iOS variants here
							RegExp.$1 !== 'cpu iphone os' && RegExp.$1 !== 'cpu os' &&
							// if duplicate entries favor highest version
							(!ua[RegExp.$1] || parseFloat(ua[RegExp.$1]) < parseFloat(RegExp.$2))) {

							ua[RegExp.$1] = RegExp.$2;
						}
					}

				} else {
					// outside parens covers most version identifiers
					var uas = raw[j].match(R_Version);
					if (uas) {
						for (i=0, count=uas.length; i<count; i++) {
							var parts = uas[i].split(/[\/\s]+/);
							if (parts.length && parts[0] !== 'mozilla') {
								ua[parts[0]] = parts.slice(1).join('-');
							}
						}
					}
				}
			}

			if (R_mobile.exec(uaStr)) {
				// mobile device indicators
				ua.mobile = RegExp.$1;
				if (R_BlackBerry.exec(uaStr)) {
					ua.blackberry = RegExp.$1;
				}

			} else if (R_desktop.exec(uaStr)) {
				// desktop OS indicators
				ua.desktop = RegExp.$1;

			} else if (R_game.exec(uaStr)) {
				// game console indicators
				ua.game = RegExp.$1;

				if (ua.version && !ua[ua.game]) {
					ua[ua.game] = ua.version;
				}
			}

			// platform naming standardizations
			if (ua['intel mac os x']) {
				ua['mac os x'] = ua['intel mac os x'].split('_').join('.');
				delete ua['intel mac os x'];

			} else if (R_iOS.exec(uaStr)) {
				ua.ios = RegExp.$1.split('_').join('.');
			}

			// UA naming standardizations
			if (ua.opera && ua.version) {
				ua.opera = ua.version;
			}

			if (ua.applewebkit) {
				ua.webkit = ua.applewebkit;
				delete ua.applewebkit;

				if (ua.safari) {
					if (ua.chrome || (ua.mobile && !ua.ios)) {
						delete ua.safari;
	
					} else if (ua.version && !ua['rim tablet os']) {
						ua.safari = ua.version;
	
					} else {
						ua.safari = ({
							'419': '2.0.4',
							'417': '2.0.3',
							'416': '2.0.2',
							'412': '2.0',
							'312': '1.3',
							'125': '1.2',
							'85': '1.0'
						})[parseInt(ua.safari, 10)] || ua.safari;
					}
				}

			} else if (ua.msie) {
				if (!ua.opera) {
					ua.ie = ua.msie;
				}
				delete ua.msie;

			} else if (R_Gecko.exec(uaStr)) {
				ua.gecko = RegExp.$1;
			}

			if (ua.version) {
				delete ua.version;
			}

			return ua;
		},

		/*string*/ format : function (/*Map<string,string>*/ ua) {
			/*string*/ function format(/*string*/ b, /*string*/ v) {
				b = b.split(' ').join('_').split('.').join('-');
				/*string*/ var css = PREFIX+b;
				if (v) {
					v = v.split(' ').join('_').split('.').join('-');
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

			var	uaCss = '';
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
			var query = '';
			for (var b in ua) {
				if (b && ua.hasOwnProperty(b)) {
					if (query) {
						query += '&';
					}
					query += encodeURIComponent(b)+'='+encodeURIComponent(ua[b]);
				}
			}
			return query;
		}
	};

	// calculate userAgent
	cssua.userAgent = cssua.ua = cssua.parse(userAgent);

	// append CSS classes to HTML node
	var ua = cssua.format(cssua.ua)+' js';
	if (html.className) {
		html.className = html.className.replace(/\bno-js\b/g, '') + ua;
		
	} else {
		html.className = ua.substr(1);
	}

	return cssua;
})(document.documentElement, navigator.userAgent);
