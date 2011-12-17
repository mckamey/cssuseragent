try{

module('cssua.encode()');

test('IE 5.5', function() {

	var input =
		{
			'ie': '5.5'
		};

	var expected = 'ie=5.5';

	var actual = cssua.encode(input);

	same(actual, expected, '');
});

test('Firefox 3.6', function() {

	var input =
		{
			'gecko': '1.9.2.13',
			'firefox': '3.6.13'
		};

	var expected = 'gecko=1.9.2.13&firefox=3.6.13';

	var actual = cssua.encode(input);

	same(actual, expected, '');
});

test('Chrome 0.2', function() {

	var input =
		{
			'webkit': '525.13',
			'chrome': '0.2.149.30'
		};

	var expected = 'webkit=525.13&chrome=0.2.149.30';

	var actual = cssua.encode(input);

	same(actual, expected, '');
});

test('Chrome 10', function() {

	var input =
		{
			'webkit': '534.15',
			'chrome': '10.0.612.3'
		};

	var expected = 'webkit=534.15&chrome=10.0.612.3';

	var actual = cssua.encode(input);

	same(actual, expected, '');
});

test('Safari 4.0.4, iPad', function() {

	var input =
		{
			'webkit': '531.21.10',
			'mobile': 'ipad',
			'safari': '4.0.4'
		};

	var expected = 'webkit=531.21.10&mobile=ipad&safari=4.0.4';

	var actual = cssua.encode(input);

	same(actual, expected, '');
});

}catch(ex){alert(ex);}