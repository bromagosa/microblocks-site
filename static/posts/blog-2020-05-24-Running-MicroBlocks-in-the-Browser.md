# Running MicroBlocks in the Browser

_**By John Maloney**_

_**2020-05-24**_

<br>

As of MicroBlocks 0.5, MicroBlocks runs in Chromium-based
web browsers, either Google's Chrome browser or recent versions of
MicroSoft's Edge. This can be helpful in school, library, and other
settings where it is difficult to install application programs.
As long as the computer has one of the supported browsers and a USB port,
you can run MicroBlocks!

### Setup

MicroBlocks uses a new, experimental
Chromium feature known as "WebSerial API" to communicate with the
microcontroller. For now, that feature must be enabled using a browser
setting or *flag*. Start by entering "chrome://flags" in the nav bar
of the browser:

<img src="chromeFlagsPage.png" width="150px"/>

There are many flags. The quickest way to find the one you need to
set is to type "experimental web platform" into the flags search bar,
then enable the "Experimental Web Platform features" flag:

<img src="setExperimentWebPlatformFlag.png" width="500px"/>

### Installing the MicroBlocks Firmware on your Microcontroller

The browser version of MicroBlocks cannot yet install the MicroBlocks firmware
on your microcontroller. For now, it is easiest to use the stand-alone MicroBlocks app
to install the firmware. If you have a micro:bit, Calliope mini, or AdaFruit
microcontroller, you can also install the firmware by downloading the
appropriate precompiled virtual machine from:

<a href="https://microblocks.fun/additional_downloads">Additional Downloads</a>

then dragging and dropping it onto the USB drive for your microcontroller.

### Running MicroBlocks

To run MicroBlocks in the browser visit:

[https://microblocks.fun/run/microblocks.html](https://microblocks.fun/run/microblocks.html)

Note: Be sure to use HTTPS, not HTTP, otherwise MicroBlocks won't be able
to connect to the microcontroller.

### Connecting

Connect your microcontroller to the computer with a USB cable, then click on
the USB icon and select "connect" from the menu:

<img src="browserConnectMenu.png" width="140px"/>

That will bring up a dialog box listing the available serial ports.
On some platforms you will see your microcontroller listed with two
different variations (as shown below); either one will work.

<img src="browserConnectDialog.png" width="400px"/>

If the browser connects successfully, a green circle will appear behind the USB icon:

<img src="browserConnected.png" width="60px"/>

### Saving and Opening Projects

Use the file menu to save and open files:

<img src="browserFileMenu.png" width="50px"/>

In the File Open dialog, the computer button will allow you to navigate
to the file you saved. You can also open a MicroBlocks file by dropping it
onto the MicroBlocks browser window:

<img src="browserFileDialog.png" width="400px"/>


