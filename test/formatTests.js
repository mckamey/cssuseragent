try{

module('cssua.format()');

test('IE 5.5', function() {

	var input =
		{
			'windows nt': '5.0',
			'os': 'windows',
			'ie': '5.5'
		};

	var expected = ' ua-windows_nt ua-windows_nt-5 ua-windows_nt-5-0 ua-os ua-os-windows ua-ie ua-ie-5 ua-ie-5-5';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

test('Firefox 3.6', function() {

	var input =
		{
			'gecko': '1.9.2.13',
			'firefox': '3.6.13'
		};

	var expected = ' ua-gecko ua-gecko-1 ua-gecko-1-9 ua-gecko-1-9-2 ua-gecko-1-9-2-13 ua-firefox ua-firefox-3 ua-firefox-3-6 ua-firefox-3-6-13';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

test('Chrome 0.2', function() {

	var input =
		{
			'webkit': '525.13',
			'chrome': '0.2.149.30'
		};

	var expected = ' ua-webkit ua-webkit-525 ua-webkit-525-13 ua-chrome ua-chrome-0 ua-chrome-0-2 ua-chrome-0-2-149 ua-chrome-0-2-149-30';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

test('Chrome 10', function() {

	var input =
		{
			'webkit': '534.15',
			'chrome': '10.0.612.3'
		};

	var expected = ' ua-webkit ua-webkit-534 ua-webkit-534-15 ua-chrome ua-chrome-10 ua-chrome-10-0 ua-chrome-10-0-612 ua-chrome-10-0-612-3';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

test('Safari 4.0.4, iPad', function() {

	var input =
		{
			'mobile': 'ipad',
			'safari': '4.0.4',
			'ios': '3.2',
			'webkit': '531.21.10'
		};

	var expected = ' ua-mobile ua-mobile-ipad ua-safari ua-safari-4 ua-safari-4-0 ua-safari-4-0-4 ua-ios ua-ios-3 ua-ios-3-2 ua-webkit ua-webkit-531 ua-webkit-531-21 ua-webkit-531-21-10';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

test('IE 7, WinPhone', function() {

	var input =
		{
			'trident': '3.1',
			'iemobile': '7.0',
			'ie': '7.0',
			'mobile': 'windows phone os'
		};

	var expected = ' ua-trident ua-trident-3 ua-trident-3-1 ua-iemobile ua-iemobile-7 ua-iemobile-7-0 ua-ie ua-ie-7 ua-ie-7-0 ua-mobile ua-mobile-windows_phone_os';

	var actual = cssua.format(input);

	same(actual, expected, '');
});

}catch(ex){alert(ex);}