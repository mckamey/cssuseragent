try{

/*
	navigator.userAgent strings

	http://en.wikipedia.org/wiki/User_agent
	http://www.useragentstring.com/pages/useragentstring.php
	http://www.user-agents.org
	http://www.zytrax.com/tech/web/mobile_ids.html
*/

module('cssua js/no-js');

test('&lt;html&gt; "no-js" class missing', function() {

	var input = document.documentElement.className || '';

	var expected = 'missing';

	var actual = input.indexOf('no-js') < 0 ? 'missing' : 'present';

	same(actual, expected, '');
});

test('&lt;html&gt; "js" class present', function() {

	var input = document.documentElement.className || '';

	var expected = 'present';

	var actual = input.indexOf('js') < 0 ? 'missing' : 'present';

	same(actual, expected, '');
});

module('cssua.parse()');

test('IE 5.0, Windows', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 98)';

	var expected =
		{
			windows: '98',
			desktop: 'windows',
			ie: '5.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 5.5, Windows', function() {

	var input = 'Mozilla/4.0 (Compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 2.0.50727; .NET CLR 1.1.4322; InfoPath.2; .NET CLR 3.0.04506.30; MS-RTC LM 8; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)';

	var expected =
		{
			windows_nt: '5.0',
			net_clr: '3.5.21022',
			'ms-rtc_lm': '8',
			desktop: 'windows',
			ie: '5.5'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 6.0, Windows', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 6.0; WOW64; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30618)';

	var expected =
		{
			windows_nt: '6.0',
			net_clr: '3.5.30729',
			desktop: 'windows',
			ie: '6.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 7.0, Windows', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.2; Win64; x64; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET4.0C; .NET4.0E)';

	var expected =
		{
			windows_nt: '5.2',
			net_clr: '3.5.30729',
			desktop: 'windows',
			ie: '7.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 8.0, Windows', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)';

	var expected =
		{
			windows_nt: '6.1',
			trident: '4.0',
			net_clr: '3.5.30729',
			desktop: 'windows',
			ie: '8.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 9.0 Beta, Windows', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)';

	var expected =
		{
			windows_nt: '6.1',
			trident: '5.0',
			net_clr: '3.5.30729',
			desktop: 'windows',
			ie: '9.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('MSPIE 2.0, Windows CE', function() {

	var input = 'Mozilla/1.1 (compatible; MSPIE 2.0; Windows CE)';

	var expected =
		{
			mspie: '2.0',
			mobile: 'windows ce'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 1.5, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.8.0.9) Gecko/20061206 Firefox/1.5.0.9';

	var expected =
		{
			windows_nt: '5.2',
			gecko: '1.8.0.9',
			firefox: '1.5.0.9',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 2.0, Ubuntu', function() {

	var input = 'Mozilla/5.0 (X11; U; Linux i686; fr; rv:1.8.1.19) Gecko/20081216 Ubuntu/7.10 (gutsy) Firefox/2.0.0.19';

	var expected =
		{
			gecko: '1.8.1.19',
			ubuntu: '7.10',
			firefox: '2.0.0.19',
			desktop: 'linux'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 3.0, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.0.19) Gecko/2010031422 Firefox/3.0.19 (.NET CLR 3.5.30729)';

	var expected =
		{
			windows_nt: '5.2',
			gecko: '1.9.0.19',
			firefox: '3.0.19',
			net_clr: '3.5.30729',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 3.5, Fedora', function() {

	var input = 'Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.1.15) Gecko/20101027 Fedora/3.5.15-1.fc12 Firefox/3.5.15';

	var expected =
		{
			gecko: '1.9.1.15',
			fedora: '3.5.15-1.fc12',
			firefox: '3.5.15',
			desktop: 'linux'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 3.6, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13 (.NET CLR 3.5.30729)';

	var expected =
		{
			windows_nt: '6.1',
			gecko: '1.9.2.13',
			firefox: '3.6.13',
			net_clr: '3.5.30729',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 4.0b7, Windows', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b7) Gecko/20100101 Firefox/4.0b7';

	var expected =
		{
			windows_nt: '6.1',
			gecko: '2.0b7',
			firefox: '4.0b7',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 0.2, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13';

	var expected =
		{
			windows_nt: '6.0',
			chrome: '0.2.149.30',
			desktop: 'windows',
			webkit: '525.13'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 1.0, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19';

	var expected =
		{
			windows_nt: '5.2',
			chrome: '1.0.154.53',
			desktop: 'windows',
			webkit: '525.19'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 2, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/530.6 (KHTML, like Gecko) Chrome/2.0.174.0 Safari/530.6';

	var expected =
		{
			windows_nt: '5.1',
			chrome: '2.0.174.0',
			desktop: 'windows',
			webkit: '530.6'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 3, Linux', function() {

	var input = 'Mozilla/5.0 (X11; U; Linux i686 (x86_64); en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/3.0.198.0 Safari/532.0';

	var expected =
		{
			chrome: '3.0.198.0',
			desktop: 'linux',
			webkit: '532.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 4, Max OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1; en-US) AppleWebKit/532.0 (KHTML, like Gecko) Chrome/4.0.207.0 Safari/532.0';

	var expected =
		{
			chrome: '4.0.207.0',
			desktop: 'macintosh',
			mac_os_x: '10.6.1',
			webkit: '532.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 5, Max OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.99 Safari/533.4';

	var expected =
		{
			chrome: '5.0.375.99',
			desktop: 'macintosh',
			mac_os_x: '10.5.6',
			webkit: '533.4'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 6, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.458.1 Safari/534.3';

	var expected =
		{
			windows_nt: '5.1',
			chrome: '6.0.458.1',
			desktop: 'windows',
			webkit: '534.3'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 7, Linux', function() {

	var input = 'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/7.0.544.0 Safari/534.10';

	var expected =
		{
			chrome: '7.0.544.0',
			desktop: 'linux',
			webkit: '534.10'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 8, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/8.0.552.224 Safari/534.10';

	var expected =
		{
			windows_nt: '6.1',
			chrome: '8.0.552.224',
			desktop: 'windows',
			webkit: '534.10'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 9 Beta, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.19 Safari/534.13';

	var expected =
		{
			windows_nt: '5.2',
			chrome: '9.0.597.19',
			desktop: 'windows',
			webkit: '534.13'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 10 Dev, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.15 (KHTML, like Gecko) Chrome/10.0.612.3 Safari/534.15';

	var expected =
		{
			windows_nt: '6.1',
			chrome: '10.0.612.3',
			desktop: 'windows',
			webkit: '534.15'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome 18, Galaxy Nexus, Android', function() {

	var input = 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19';

	var expected =
		{
			android: '4.0.4',
			chrome: '18.0.1025.133',
			mobile: 'android',
			webkit: '535.19'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 1.0, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; es) AppleWebKit/85 (KHTML, like Gecko) Safari/85';

	var expected =
		{
			safari: '1.0',
			desktop: 'macintosh',
			webkit: '85'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 2.0.4, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.8 (KHTML, like Gecko) Safari/419.3';

	var expected =
		{
			safari: '2.0.4',
			desktop: 'macintosh',
			webkit: '418.8'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 3.0, iPhone 1.x', function() {

	var input = 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3';

	var expected =
		{
			safari: '3.0',
			mobile: 'iphone',
			ios: '1',
			webkit: '420'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 3.1.1, iPhone Simulator 2.0', function() {

	var input = 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A345 Safari/525.20';

	var expected =
		{
			safari: '3.1.1',
			mobile: 'iphone',
			ios: '2.0',
			webkit: '525.18.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 3.1.1, iPhone 2.0.1', function() {

	var input = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; fr-fr) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20';

	var expected =
		{
			safari: '3.1.1',
			mobile: 'iphone',
			ios: '2.0.1',
			webkit: '525.18.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 3.1.1, iPod Touch', function() {

	var input = 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20';

	var expected =
		{
			safari: '3.1.1',
			mobile: 'ipod',
			ios: '2.2.1',
			webkit: '525.18.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 4.0.4, iPad', function() {

	var input = 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10';

	var expected =
		{
			safari: '4.0.4',
			mobile: 'ipad',
			ios: '3.2',
			webkit: '531.21.10'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 5.0.1, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-us) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8';

	var expected =
		{
			safari: '5.0.1',
			desktop: 'macintosh',
			mac_os_x: '10.6.4',
			webkit: '533.17.8'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 5.0.2, iPhone 4', function() {

	var input = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5';

	var expected =
		{
			safari: '5.0.2',
			mobile: 'iphone',
			ios: '4.2.1',
			webkit: '533.17.9'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Safari 5.0.3, Windows', function() {

	var input = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4';

	var expected =
		{
			windows_nt: '6.1',
			safari: '5.0.3',
			desktop: 'windows',
			webkit: '533.19.4'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('FluidApp 1.4, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/534.56.5 (KHTML, like Gecko) FluidApp Version/1.4 Safari/534.56.5';

	var expected =
		{
			fluidapp: '1.4',
			desktop: 'macintosh',
			mac_os_x: '10.7.4',
			webkit: '534.56.5'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 5.11', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 4.0) Opera 5.11  [de]';

	var expected =
		{
			windows_nt: '4.0',
			opera: '5.11',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 6.12, UNIX', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 5.0; UNIX) Opera 6.12  [en]';

	var expected =
		{
			opera: '6.12',
			desktop: 'unix'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 7.54', function() {

	var input = 'Opera/7.54 (Windows NT 5.1; U) [pl]';

	var expected =
		{
			opera: '7.54',
			windows_nt: '5.1',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 8.5', function() {

	var input = 'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.5';

	var expected =
		{
			opera: '8.5',
			desktop: 'macintosh'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 9.62', function() {

	var input = 'Opera/9.62 (Windows NT 5.1; U; en) Presto/2.1.1';

	var expected =
		{
			opera: '9.62',
			windows_nt: '5.1',
			presto: '2.1.1',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 10.62, Linux', function() {

	var input = 'Opera/9.80 (X11; Linux i686; U; en-GB) Presto/2.6.30 Version/10.62';

	var expected =
		{
			opera: '10.62',
			presto: '2.6.30',
			desktop: 'linux'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 11, Windows', function() {

	var input = 'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.00';

	var expected =
		{
			opera: '11.00',
			windows_nt: '6.1',
			presto: '2.7.62',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 11, Spoofing IE8', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; ja) Opera 11.00';

	var expected =
		{
			windows_nt: '6.0',
			opera: '11.00',
			desktop: 'windows'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera Mini', function() {

	var input = 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/19.916; U; en) Presto/2.5.25';

	var expected =
		{
			opera: '9.80',
			opera_mini: '5.1.21214/19.916',
			presto: '2.5.25',
			mobile: 'j2me'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nexus One, Android (WebKit)', function() {

	var input = 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

	var expected =
		{
			android: '2.2.1',
			mobile: 'android',
			webkit: '533.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nexus One, Android (WebKit)', function() {

	var input = 'Mozilla/5.0 (Linux; U; Android 2.1-update1; fr-fr; desire_A8181 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17';

	var expected =
		{
			android: '2.1-update1',
			mobile: 'android',
			webkit: '530.17'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nexus S, Android (WebKit)', function() {

	var input = 'Mozilla/5.0 (Linux; U; Android 2.3.1; en-us; Nexus S Build/GRH78) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

	var expected =
		{
			android: '2.3.1',
			mobile: 'android',
			webkit: '533.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('WinPhone 7 (IE)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6';

	var expected =
		{
			windows_phone_os: '7.0',
			trident: '3.1',
			iemobile: '7.0',
			mobile: 'windows phone os',
			ie: '7.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry 9330', function() {

	var input = 'BlackBerry9330/5.0.0.913 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104';

	var expected =
		{
			blackberry9330: '5.0.0.913',
			vendorid: '104',
			mobile: 'blackberry',
			blackberry: '5.0.0.913'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry Torch (WebKit)', function() {

	var input = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, Like Gecko) Version/6.0.0.141 Mobile Safari/534.1+';

	var expected =
		{
			blackberry: '9800',
			mobile: 'blackberry',
			webkit: '534.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Palm Pre (WebKit)', function() {

	var input = 'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0';

	var expected =
		{
			webos: '1.0',
			pre: '1.0',
			mobile: 'webos',
			webkit: '525.27.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('HTC TyTN PDA (IE)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)';

	var expected =
		{
			iemobile: '7.11',
			mobile: 'windows ce',
			ie: '6.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nokia 3650 (Symbian)', function() {

	var input = 'Nokia3650/1.0 SymbianOS/6.1 Series60/1.2 Profile/MIDP-1.0 Configuration/CLDC-1.0';

	var expected =
		{
			nokia3650: '1.0',
			symbianos: '6.1',
			series60: '1.2',
			mobile: 'symbian'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nokia 6120c (WebKit)', function() {

	var input = 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/3.83; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413';

	var expected =
		{
			symbianos: '9.2',
			series60: '3.1',
			mobile: 'symbian',
			webkit: '413'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nokia 3650 (Netfront)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 4.0; SmartPhone; Symbian OS/1.1.0) Netfront/3.1';

	var expected =
		{
			symbian_os: '1.1.0',
			netfront: '3.1',
			mobile: 'smartphone',
			ie: '4.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('AOL 9.6 (IE 8)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 8.0; AOL 9.6; AOLBuild 4340.122; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8)';

	var expected =
		{
			aol: '9.6',
			aolbuild: '4340.122',
			windows_nt: '6.1',
			trident: '4.0',
			net_clr: '3.5.30729',
			media_center_pc: '6.0',
			'ms-rtc_lm': '8',
			desktop: 'windows',
			ie: '8.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Googlebot 2.1', function() {

	var input = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

	var expected =
		{
			googlebot: '2.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Googlebot-Mobile 2.1', function() {

	var input = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)';

	var expected =
		{
			safari: '4.0.5',
			'googlebot-mobile': '2.1',
			mobile: 'iphone',
			ios: '4.1',
			webkit: '532.9'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nintendo 3DS', function() {

	var input = 'Mozilla/5.0 (Nintendo 3DS; U; ; en) Version/1.7455.EU';

	var expected =
		{
			game: 'nintendo 3ds',
			nintendo_3ds: '1.7455.eu'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Nintendo Wii', function() {

	var input = 'Opera/9.30 (Nintendo Wii; U; ; 3642; en)';

	var expected =
		{
			opera: '9.30',
			game: 'nintendo wii'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('PS3', function() {

	var input = 'Mozilla/5.0 (PLAYSTATION 3; 1.00)';

	var expected =
		{
			playstation: '3',
			game: 'playstation'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('PlayBook', function() {

	var input = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+';

	var expected =
		{
			rim_tablet_os: '1.0.0',
			mobile: 'rim tablet os',
			webkit: '534.8'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

}catch(ex){alert(ex);}