try{

module("cssua.format()");

test("IE 5.5", function() {

	var input =
		{
			"ie" : "5.5"
		};

	var expected = " ua-ie ua-ie-5 ua-ie-5-5";

	var actual = cssua.format(input);

	same(actual, expected, "");
});

test("Firefox 3.6", function() {

	var input =
		{
			"gecko" : "1.9.2.13",
			"firefox" : "3.6.13"
		};

	var expected = " ua-gecko ua-gecko-1 ua-gecko-1-9 ua-gecko-1-9-2 ua-gecko-1-9-2-13 ua-firefox ua-firefox-3 ua-firefox-3-6 ua-firefox-3-6-13";

	var actual = cssua.format(input);

	same(actual, expected, "");
});

test("Chrome 0.2", function() {

	var input =
		{
			"webkit" : "525.13",
			"chrome" : "0.2.149.30"
		};

	var expected = " ua-webkit ua-webkit-525 ua-webkit-525-13 ua-chrome ua-chrome-0 ua-chrome-0-2 ua-chrome-0-2-149 ua-chrome-0-2-149-30";

	var actual = cssua.format(input);

	same(actual, expected, "");
});

test("Chrome 10", function() {

	var input =
		{
			"webkit" : "534.15",
			"chrome" : "10.0.612.3"
		};

	var expected = " ua-webkit ua-webkit-534 ua-webkit-534-15 ua-chrome ua-chrome-10 ua-chrome-10-0 ua-chrome-10-0-612 ua-chrome-10-0-612-3";

	var actual = cssua.format(input);

	same(actual, expected, "");
});

test("Safari 4.0.4, iPad", function() {

	var input =
		{
			"webkit" : "531.21.10",
			"mobile" : "ipad",
			"safari" : "4.0.4"
		};

	var expected = " ua-webkit ua-webkit-531 ua-webkit-531-21 ua-webkit-531-21-10 ua-mobile ua-mobile-ipad ua-safari ua-safari-4 ua-safari-4-0 ua-safari-4-0-4";

	var actual = cssua.format(input);

	same(actual, expected, "");
});

}catch(ex){alert(ex);}