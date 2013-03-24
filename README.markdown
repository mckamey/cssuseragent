# [.css{user:agent;}][1]
Distributed under the terms of [The MIT license][2].

## Special CSS Classes...

Adding cssua.js to the page preps the document with special CSS classes which enable targeting of browsers with varying degrees of precision.

	<!-- example CSS classes applied to the page -->
	<html class="ua-chrome ua-chrome-25 ua-chrome-25-0 ua-chrome-25-0-1364 ua-chrome-25-0-1364-172
		ua-desktop ua-desktop-macintosh
		ua-mac_os_x ua-mac_os_x-10 ua-mac_os_x-10-8 ua-mac_os_x-10-8-3
		ua-webkit ua-webkit-537 ua-webkit-537-22">
		...
	</html>

## UserAgent map...

UserAgent-sniffing is regarded as something to be used sparingly, but pragmatic developers know it is
sometimes the simplest approach to fixing a particular browser's quirk. When it is, cssua.js produces
a helper object as a side-effect which makes user-agent-siffing easier and more consistent.

An object map is also built which allows you to test the user agent from your script in a simplified
manner that doesn't require string parsing. For example, this object is effectively produced:

	cssua.userAgent = cssua.ua = {
		chrome: "25.0.1364.172",
		desktop: "macintosh",
		mac_os_x: "10.8.3",
		webkit: "537.22"
	};

## Examples

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

Testing for older Internet Explorer has never been easier than

	if (cssua.userAgent.ie < 8) { /* proof of Pareto principle here */ }

Or testing if is a mobile browser:

	if (cssua.userAgent.mobile) { /* consider your audience */ }

Remember to convert a version `String` to a `Number` with `parseFloat` if the value isn't a simple number,
e.g., it has multiple decimal points or trailing letters. Otherwise, JavaScript may interpret
the value as `NaN` (not-a-number):

	if (parseFloat(cssua.ua.chrome) > 101) { /* enter the Matrix */ }

## Mobile browser detection

CssUserAgent helps detect the increasingly ambiguous category of mobile browsers.
cssua.js adds specific classes when it detects mobile browsers:

	<html class="... ua-mobile ua-mobile-iphone ...">...<html>

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

Copyright (c) 2006-2013 Stephen M. McKamey

  [1]: http://cssuseragent.org
  [2]: https://bitbucket.org/mckamey/cssuseragent/raw/tip/LICENSE.txt
