# MicroBlocks, Snap!, and the web

_**By Bernat Romagosa**_

_**2020-01-15**_

<br>

## The Mozilla WebThings Server

Mozilla is working on a standard and open protocol to connect things to the web
called WebThings. You can read all about it at <https://iot.mozilla.org/>.

If your board is WiFi-enabled, you can turn it into a WebThing by loading the
*Web Thing* library into MicroBlocks (more on this in a future article), but in
case your board does _not_ have WiFi access, MicroBlocks has you covered.

The basic idea is that the MicroBlocks environment itself, the IDE, can be
accessed from the internet as if it was a Mozilla Web Thing. To do that, you
first need to enable our Mozilla WebThings server by following these steps:

1) Click on the settings menu (gear icon)
2) Select "show advanced blocks"
3) Click on the settings menu again
4) Select "start Mozilla WebThing server"

You've now got a Mozilla WebThing server running on port 6473. If you connect a
board to the IDE, any variables you create are going to be accessible as
WebThing properties via the http://localhost:6473/ URL.

You can now use HTTP to communicate with the IDE and, thus, with the board
that's connected to it.

To test it out, build this simple program in MicroBlocks:

![example scripts to test the MicroBlocks WebThing server](webthings-IDE-example.png)

**NOTE:** *This example is meant for the micro:bit or other boards with a
display and a tilt sensor. You can tweak it to work with any other board,
though. The idea is to have at least one variable that reflects the value of a
sensor, like the tilt sensor, a light sensor or a button, and another variable
that the program is watching and will trigger an actuator, like an LED or a
buzzer.*

## Interacting with MicroBlocks from the Web

You can now ask for all available properties by visiting
<http://localhost:6473/properties>, or check the value of a particular property
by visiting its URL, like <http://localhost:6473/properties/x tilt>.

Setting the value of a property is a little bit more cumbersome, as you need to
know how to send PUT requests to a server. If you know how to do that, then send
a JSON string containing the name of the property as a key and its new value as
a value to the property URL.

Here's an example of how to do that using cURL:

    curl -X PUT "http://localhost:6473/properties/letter" -d '{"letter":"M"}'

And here's how to do the same thing using Javascript:

    req = new XMLHttpRequest();
    req.open('PUT', 'http://localhost:6473/properties/letter', true);
    req.send('{"letter":"B"}');

Note that this example will only work over HTTP, not HTTPS.

## Interfacing Snap<em>!</em> and MicroBlocks

However, there's a much easier and more fun way to interact with MicroBlocks
from the web, and that's to use Snap<em>!</em>.

To do that, you just need to import [this blocks library](WebThing.xml) into
Snap<em>!</em>). It's very important that you access Snap<em>!</em> from its
[extensions domain](http://extensions.snap.berkeley.edu) at
<http://extensions.snap.berkeley.edu>, otherwise you won't be able to
communicate with the IDE.

Once you've loaded the library into Snap<em>!</em> you'll find a few new blocks
under the *Sensing* category.

The first thing we can do is ask the MicroBlocks IDE for all the properties
(variables) defined in the currently plugged in board:

![receiving WebThing properties from Snap!](webthings-snap-get-props.png)

We could then ask for the value of one of these properties:

![receiving a WebThing property value from Snap!](webthings-snap-get-prop-value.png)

And, for example, control a Sprite's position in the Stage using these
properties:

![setting a sprite position using WebThing properties](webthings-snap-set-position.png)

![video of sprite being positioned](webthings-snap-stage.gif)

You can also go the other way and set the value of a property from
Snap<em>!</em>:

![setting a MicroBlocks property from Snap!](webthings-snap-set-property.png)

![board displaying a letter sent from Snap!](webthings-board-set-property.png)

You're now all set to create your interactive Snap<em>!</em> projects and
websites!
