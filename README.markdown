# [CssUserAgent][1] (cssua.js)
Distributed under the terms of an [MIT-style license][2]

## Special CSS Classes...

Adding cssua.js to the page preps the document with special CSS classes which enable targeting of browsers with varying degrees of precision.

	<!-- example CSS classes applied to the page -->
	<html class="ua-webkit ua-webkit-534 ua-webkit-534-10 ua-chrome ua-chrome-8 ua-chrome-8-0
		ua-chrome-8-0-552 ua-chrome-8-0-552-224">
		...
	</html>

This makes applying slight layout differences a snap:

	/* CssUserAgent lets you target specific browsers without resorting CSS hacks */
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
	   chrome: "8.0.552.224"
	};

Testing for older Internet Explorer has never been easier than

	if (cssua.ua.ie < 8) { /* proof of Pareto principle here */ }

## No Browser Hacks...

This technique also avoids *all* CSS hacks. It allows you to target the browser rendering engine
(e.g. "ua-gecko"), or a specific browser (e.g. "ua-firefox"). The version can be targeted at the major version
number (e.g. "ua-ie-5" includes 5.0, 5.5) or minor (e.g. "ua-ie-5-0" includes only 5.0) all the way down
to a very specific case (e.g. "ua-chrome-8-0-552-224").

## Future UserAgents...

This script understands the common structures of user agent strings enabling future user agent strings to simply
work without changes. For example, when the early beta builds of Google Chrome were first released,
it just worked.

----

Copyright (c) 2006-2010 Stephen M. McKamey

  [1]: http://cssuseragent.org
  [2]: https://bitbucket.org/mckamey/cssuseragent/src/tip/LICENSE.txt
