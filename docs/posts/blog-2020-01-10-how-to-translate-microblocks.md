# How to translate MicroBlocks

_**By Bernat Romagosa**_

_**2020-01-10**_

<br>

### Currently available languages
MicroBlocks has been translated to a bunch of languages by members of the
community. Please check whether your language is in the following list:

Current languages:
[translations](https://bitbucket.org/john_maloney/smallvm/src/master/translations/)

If it isn't, please head over to [Adding a new language](#newlang).

If it is but needs updating, you will need to download it. To do so, click on
the language file name. This will take you to a new page where you can see the
contents of that file. You'll then need to click on the button with the three
dots (
<svg width="24" height="24" viewBox="0 0 24 24" focusable="false"
        role="presentation">
    <g fill="currentColor" fill-rule="evenodd">
        <circle cx="5" cy="12" r="2"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="19" cy="12" r="2"></circle>
    </g>
</svg>
), at the top right of the file contents, and select "Open raw". This will show
the raw file contents in a new browser window. You can now right click anywhere
inside that page and select "Save Page As...", or a similar menu option.

This will finally download the translation file into your computer, so you can
now skip the next section and jump straight into
[Editing a language file](#translating).

<a name="newlang" style="visibility:hidden"></a>
### Adding a new language
If your language isn't in the list and the following instructions feel
complicated to you, please let us know at <interest@microblocks.fun> and we'll
prepare a new translation file for you with pleasure.

However, if you're comfortable using the command line, you can prepare that file
yourself. These instructions are for people that have access to a Bash shell and
have a basic notion of how to use it.

First of all, you will need the MicroBlocks sources. You can either get them
from [this link](https://bitbucket.org/john_maloney/smallvm/get/master.zip) and
unzip the downloaded file, or use git to clone our BitBucket repository into
your local computer:

    git clone https://bitbucket.org/john_maloney/smallvm

Now cd into the smallvm directory and run the following command:

    ./build.sh --locale=[Your Language]

Where *[Your Language]* is the name of the language you want to translate to.
Please note that this name should not be in English, but in the language you're
translating to. For instance, for French you would use "Français", and for
Arabic you would use "عربى".

This will generate a new translation file that you can find under the
*translations* folder. You can now follow the instructions in the next section.

<a name="translating" style="visibility:hidden"></a>
### Editing a language file

Please open your language file with a raw text editor. The ones installed by
default are NotePad for Windows, Gedit or Kate for GNU/Linux, and TextEdit for
MacOS.

Usually, double-clicking on the language file will do the right thing and open
the proper editor.

In your language file, you will need to replace every line that reads
*--MISSING--* with the translation of the English text right above it. For
example, in this case:

    Input
    Entrada
   
    button A
    --MISSING--

the *Input* string has already been translated, but *button A* is missing, so
you will need to replace the *--MISSING--* tag with your translation.

For blocks, the underscore represents an input slot. Your translation of a block
has to have the same number of input slots, in the same order, as the English
version. For example:

    set pin _ to _
    posa el pin _ a _

We are aware that it is sometimes hard to keep the English order of parameters
in other languages, but this limitation makes the translation mechanism much
easier to implement and also results in more readable language files and fewer
translator errors.

Lines starting with the pound symbol (#) are comments and can be ignored. Adding
or modifying any comments will not break anything, but your modifications will
be lost the next time that the translation file is updated with new strings.

<a name="submitting" style="visibility:hidden"></a>
### Submitting a language file

When you're done, you can just send us the translation file over email at
<interest@microblocks.fun> and we'll include it in the next release.

Alternatively, if you know how to use Git, you can send a pull request to our
[BitBucket Repository](https://bitbucket.org/john_maloney/smallvm).

Thank you!
