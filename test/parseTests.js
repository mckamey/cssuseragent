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

test('IE 10.0 Platform Preview 1, Windows', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';

	var expected =
		{
			windows_nt: '6.1',
			trident: '6.0',
			desktop: 'windows',
			ie: '10.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 10.0, Windows 8 (Touch)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)';

	var expected =
		{
			windows_nt: '6.2',
			trident: '6.0',
			desktop: 'windows',
			ie: '10.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 10.0, Windows 2008 R2', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)';

	var expected =
		{
			windows_nt: "6.1",
			trident: "6.0",
			net_clr: "3.5.30729",
			desktop: "windows",
			ie: "10.0"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 11.0, Windows 7', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko';

	var expected =
		{
			windows_nt: "6.1",
			trident: "7.0",
			desktop: "windows",
			ie: "11.0"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 11.0, Windows 8.1 (Blue preview)', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv 11.0) like Gecko';

	var expected =
		{
			windows_nt: "6.3",
			trident: "7.0",
			desktop: "windows",
			ie: "11.0"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 11.0, Windows 8.1 (Blue preview w/ .NET)', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; rv:11.0) like Gecko';

	var expected =
		{
			windows_nt: "6.3",
			trident: "7.0",
			desktop: "windows",
			ie: "11.0"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('IE 11.0, Windows 8.1 x64', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.3; Win64, x64; Trident/7.0; Touch; rv:11.0) like Gecko';

	var expected =
		{
			windows_nt: "6.3",
			trident: "7.0",
			desktop: "windows",
			ie: "11.0"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Microsoft Edge 12.0, Windows 10', function() {

	var input = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	var expected =
		{
			windows_nt: "10.0",
			edge: "12.0",
			desktop: "windows"
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

test('Firefox 4.0.1, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:2.0.1) Gecko/20100101 Firefox/4.0.1';

	var expected =
		{
			gecko: "2.0.1",
			firefox: "4.0.1",
			desktop: "macintosh",
			mac_os_x: "10.8"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 7.0.1, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:7.0.1) Gecko/20100101 Firefox/7.0.1';

	var expected =
		{
			gecko: "7.0.1",
			firefox: "7.0.1",
			desktop: "macintosh",
			mac_os_x: "10.8"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 15.0.1, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:15.0) Gecko/20100101 Firefox/15.0.1';

	var expected =
		{
			gecko: "15.0",
			firefox: "15.0.1",
			desktop: "macintosh",
			mac_os_x: "10.8"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 21, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0';

	var expected =
		{
			gecko: "21.0",
			firefox: "21.0",
			desktop: "macintosh",
			mac_os_x: "10.8"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Firefox 38, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:38.0) Gecko/20100101 Firefox/38.0';

	var expected =
		{
			gecko: '38.0',
			firefox: '38.0',
			desktop: 'macintosh',
			mac_os_x: '10.9'
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

test('Chrome 45, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2424.0 Safari/537.36';

	var expected =
		{
			chrome: '45.0.2424.0',
			desktop: 'macintosh',
			mac_os_x: '10.9.5',
			webkit: '537.36'
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

test('Chrome for iOS, iPhone 4', function() {

	var input = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en-us) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3 (B165A9AB-E4D5-45AF-BF13-87074C507BFC)';

	var expected =
		{
			crios: '19.0.1084.60',
			mobile: 'iphone',
			ios: '5.1.1',
			webkit: '534.46.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Chrome for iOS, iPad 2', function() {

	var input = 'Mozilla/5.0 (iPad; U; CPU OS 5_1_1 like Mac OS X; en-us) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3 (094F454F-D547-476C-901F-BE273B0F2641)';

	var expected =
		{
			crios: '19.0.1084.60',
			mobile: 'ipad',
			ios: '5.1.1',
			webkit: '534.46.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('UIWebView, iOS 5.1.1', function() {

	var input = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206';

	var expected =
		{
			mobile: 'iphone',
			ios: '5.1.1',
			webkit: '534.46'
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

test('Safari 7, Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/600.6.3 (KHTML, like Gecko) Version/7.1.6 Safari/537.85.15';

	var expected =
		{
			safari: "7.1.6",
			desktop: "macintosh",
			mac_os_x: "10.9.5",
			webkit: "600.6.3"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Silk 1.1.0, Kindle Fire 1 (desktop, accelerated)', function() {

	var input = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true';

	var expected =
		{
			silk: '1.1.0-80',
			desktop: 'macintosh',
			mac_os_x: '10.6.3',
			silk_accelerated: true,
			webkit: '533.16'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Silk 1.1.0, Kindle Fire 1 (mobile, not accelerated)', function() {

	var input = 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.1.0-80) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 Silk-Accelerated=false';

	var expected =
		{
			android: '2.3.4',
			silk: '1.1.0-80',
			mobile: 'android',
			webkit: '533.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Silk 2.1, Kindle Fire 2 (mobile, accelerated)', function() {

	var input = 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFOT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true';

	var expected =
		{
			android: '4.0.3',
			silk: '2.1',
			mobile: 'android',
			silk_accelerated: true,
			webkit: '535.19'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Silk 2.1, Kindle Fire 2 (desktop, not accelerated)', function() {

	var input = 'Mozilla/5.0 (Linux; U; en-us; KFOT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Safari/535.19 Silk-Accelerated=false';

	var expected =
		{
			silk: '2.1',
			desktop: 'linux',
			webkit: '535.19'
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

test('Opera 14 (Webkit), Android', function() {

	var input = 'Mozilla/5.0 (Linux; Android 4.1.2; GT-N7000 Build/JZO54K) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.123 Mobile Safari/537.22 OPR/14.0.1025.52315';

	var expected =
		{
			android: '4.1.2',
			mobile: 'android',
			webkit: '537.22',
			opera: '14.0.1025.52315'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 14 (Webkit), Windows', function() {

	var input = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17 OPR/14.0.1025.52315';

	var expected =
		{
			windows_nt: '6.1',
			desktop: 'windows',
			webkit: '537.17',
			opera: '14.0.1025.52315'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Opera 27 (Webkit), Mac OS X', function() {

	var input = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36 OPR/27.0.1689.66';

	var expected =
		{
			desktop: 'macintosh',
			mac_os_x: '10.9.5',
			webkit: '537.36',
			opera: '27.0.1689.66'
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

test('Windows Phone 7.0 (IE)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6';

	var expected =
		{
			trident: '3.1',
			iemobile: '7.0',
			mobile: 'windows phone',
			ie: '7.0',
			windows_phone: '7.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 7.0 (Desktop mode, IE)', function() {

	var input = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; XBLWP7; ZuneWP7)';

	var expected =
		{
			mobile: 'windows desktop',
			ie: '7.0',
			windows_phone: '7.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 7.5 (Samsung, IE)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)';

	var expected =
		{
			trident: '5.0',
			iemobile: '9.0',
			mobile: 'windows phone',
			ie: '9.0',
			windows_phone: '7.5'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 7.5 (IE Desktop mode)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7)';

	var expected =
		{
			trident: '5.0',
			mobile: 'windows desktop',
			ie: '9.0',
			windows_phone: '7.5'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 8.0 (Lumia 920, IE)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';

	var expected =
		{
			windows_phone: '8.0',
			trident: '6.0',
			iemobile: '10.0',
			lumia: '920',
			mobile: 'windows phone',
			ie: '10.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 8.0 (HTC 8X, IE)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; PM23300)';

	var expected =
		{
			windows_phone: '8.0',
			trident: '6.0',
			iemobile: '10.0',
			mobile: 'windows phone',
			ie: '10.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 8.0 (Mobile mode, IE 11)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko';

	var expected =
		{
			windows_phone: '8.0',
			trident: '6.0',
			iemobile: '10.0',
			lumia: '920',
			mobile: 'windows phone',
			ie: '10.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 8.0 (Desktop mode, IE)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)';

	var expected =
		{
			trident: '6.0',
			mobile: 'windows desktop',
			ie: '10.0',
			windows_phone: '8.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 8.1 (IE 11)', function() {

	var input = 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520)';

	var expected =
		{
			windows_phone: '8.1',
			trident: '7.0',
			iemobile: '11.0',
			lumia: '520',
			mobile: 'mobile',
			ie: '11.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Windows Phone 10.0 (Microsoft Edge 12)', function() {

	var input = 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0';

	var expected =
		{
			windows_phone: '10.0',
			edge: '12.0',
			mobile: 'windows phone'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Xbox 360 (IE 9)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)';

	var expected =
		{
			windows_nt: '6.1',
			trident: '5.0',
			game: 'xbox',
			ie: '9.0'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Xbox One (IE 10)', function() {

	var input = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)';

	var expected =
		{
			windows_nt: '6.2',
			trident: '6.0',
			game: 'xbox',
			ie: '10.0'
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

test('Blackberry (Opera Mini)', function() {

	var input = 'Opera/9.80 (BlackBerry; Opera Mini/6.24209/26.1098; U; en) Presto/2.8.119 Version/10.54';

	var expected =
		{
			opera: "10.54",
			opera_mini: "6.24209/26.1098",
			presto: "2.8.119",
			mobile: "blackberry"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

// http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-to-detect-the-BlackBerry-Browser/ta-p/559862

test('BlackBerry Pearl Flip 8220', function() {

	var input = 'BlackBerry8220/4.6.0.106 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179';

	var expected =
		{
			vendorid: "179",
			mobile: "blackberry",
			blackberry: "4.6.0.106"
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry Curve 9330', function() {

	var input = 'BlackBerry9330/5.0.0.913 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/104';

	var expected =
		{
			vendorid: '104',
			mobile: 'blackberry',
			blackberry: '5.0.0.913'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('BlackBerry Bold 9900 (WebKit)', function() {

	var input = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+';

	var expected =
		{
			blackberry: '7.0.0.187',
			mobile: 'blackberry',
			webkit: '534.11'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry Torch 9800 (WebKit)', function() {

	var input = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, Like Gecko) Version/6.0.0.141 Mobile Safari/534.1+';

	var expected =
		{
			blackberry: '6.0.0.141',
			mobile: 'blackberry',
			webkit: '534.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry 10 Torch (WebKit)', function() {

	var input = 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+';

	var expected =
		{
			blackberry: '10.0.0.1337',
			mobile: 'blackberry',
			webkit: '537.1'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry PlayBook 1.0.0 (WebKit)', function() {

	var input = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11+';

	var expected =
		{
			blackberry: '7.1.0.7',
			rim_tablet_os: '1.0.0',
			mobile: 'rim tablet os',
			webkit: '534.11'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry PlayBook OS 1.0.1.1690 (WebKit)', function() {

	var input = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+.';

	var expected =
		{
			blackberry: '7.1.0.0',
			rim_tablet_os: '1.0.0',
			mobile: 'rim tablet os',
			webkit: '534.8'
		};

	var actual = cssua.parse(input);

	same(actual, expected, input);
});

test('Blackberry PlayBook 2.1.0 (WebKit)', function() {

	var input = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+';

	var expected =
		{
			blackberry: '7.2.1.0',
			mobile: 'rim tablet os',
			rim_tablet_os: '2.1.0',
			webkit: '536.2'
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

test('iPhone (standalone)', function() {

	var inputUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a (392600352)',
		inputSA = true;

	var expected =
		{
			standalone: true,
			mobile: 'iphone',
			ios: '7.0.4',
			webkit: '537.51.1'
		};

	var actual = cssua.parse(inputUA, inputSA);

	same(actual, expected, inputUA+' | navigator.standalone=true');
});

}catch(ex){alert(ex);}