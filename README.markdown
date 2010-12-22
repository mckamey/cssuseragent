# [CssUserAgent][1] - cssua.js
Distributed under the terms of an [MIT-style license][2]

## Special CSS Classes...

Adding the script preps the page with special CSS classes which enable targeting of browsers with varying degrees of precision.

	<!-- Example classes applied to the page -->
	<html class="ua-webkit ua-webkit-534 ua-webkit-534-10 ua-chrome ua-chrome-8 ua-chrome-8-0
		ua-chrome-8-0-552 ua-chrome-8-0-552-224 ua-safari ua-safari-534 ua-safari-534-10">
	...
	</html>

This makes applying slight layout differences a snap:

	/* CssUserAgent lets you target specific browsers without CSS hacks */
	.foo
	{
		background-image: url(foo.png);
		background-repeat: no-repeat;
		background-position: left top;
	}

	.ua-ie-5 .foo,
	.ua-ie-6 .foo
	{
		/* IE versions < 7.0 don't fully support transparent 24-bit PNGs */
		background-image: url(foo.gif);
	}

## UserAgent map...

UserAgent-sniffing is something to be used sparingly, but any pragmatic developer knows it is
sometimes needed. When it is, cssua.js produces as a side-effect a helper object which makes
user-agent-siffing a snap.

An object map is also built which allows you to test the user agent from your script in a simplified
manner that doesn't require string parsing. For example, this object is effectively produced:

	cssua.ua = {
	   webkit: "534.10",
	   chrome: "8.0.552.224",
	   safari: "534.10"
	};

Testing for old Internet Explorer has never been easier than

	if (cssua.ua.ie < 7) { /* a whole bunch of extra code here */ }

## No Browser Hacks...

This technique also avoids *all* CSS hacks. It allows you to target the browser rendering engine
(e.g. "webkit"), or a specific browser (e.g. "safari"). The version can be targeted at the major version
number (e.g. "ie-5" includes 5.0, 5.5) or minor (e.g. "ie-5-0" includes only 5.0) all the way down
(e.g. "ua-chrome-8-0-552-224") for a very specific case.

## Future UserAgents...

This script understands the common patterns of UserAgents enabling future user agent strings to simply
work without changes. For example, when the early beta builds of Google Chrome were first released,
it just worked.

  [1]: http://cssuseragent.org
  [2]: https://bitbucket.org/mckamey/cssuseragent/src/tip/LICENSE.txt
