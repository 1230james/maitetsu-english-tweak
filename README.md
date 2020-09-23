# Maitetsu English Tweak
Fan-made tweaks to Sekai's English localization of Maitetsu.

*More will be added to this README as the project progresses.*

## Goals

* Improve use of English railroading jargon.
* Fix grammatical typos and other incorrect English conventions.
* Improve writing in sections with awkward wording or flow.
* Correct any and all other errors and inconsistencies throughout the visual novel.
* Offer separate American English and British English varieties.
* Compatibility with Steam and non-Steam desktop editions of Maitetsu.
* Will *not* include H-scene dialogue.

## Tools Used

* [KrkrExtract 4.0.1.5](https://github.com/xmoeproject/KrkrExtract) to extract the scripts from XP3 archives in JSON format en masse.
* KrkrExtract 1.0.3.1 for packing a patch archive.
* [GARbro](https://github.com/morkt/GARbro) for browsing and extracting files from XP3 archives when KrkrExtract isn't used.
* [PsBuild from FreeMote](https://github.com/UlyssesWu/FreeMote) for converting JSON back into a KiriKiri-compatible format (SCN).

## Contributing
Contributions are welcome! This is intended to be a community project; I'm not intending to do this entirely by myself.

Feel free to fork this repository and submit changes. If you have any questions or comments, come join the [Maitetsu Fan Discord Server](https://discord.gg/ZqGRGGx) to discuss.

Non-programmers or anyone unfamiliar with Git, your contributions are still wanted! Consider looking up simple tutorials on using Git and GitHub, or forward your changes to the Maitetsu Fan Discord Server instead.

### Directory Guide

`en`: Files that are a part of both patches; i.e. they don't differ between the American and British English versions.

`us`: Files with American English-specific tweaks.

`gb`: Files with British English-specific tweaks.

Each of the three directories above contain subdirectories identical to the contents of the actual `data.xp3` file from which the scripts are extracted from for organizational purposes.

### Workflow
Ideal overall workflow for the entire project; may change without notice:

1. Edit English text in relevant file.

2. Commit changes.

The steps beyond this point in the workflow are for compiling the patch itself and installing it. Users only working on the translation tweaks themselves need not be concerned. 

3. Use `PsBuild` to convert the JSON into PSB format.

4. Use `PsBuild` again to convert the PSB file to SCN format.

5. Add the SCN file to the patch directory (where "patch directory" is some directory with other SCN files to be added in the patch archive; doesn't refer to a specific directory in this repository).

6. Run the patch directory through `KrkrExtract` to package it into an XP3 archive.

7. If it isn't already there, put the XP3 archive in the root of the Maitetsu directory. Rename using `patchX.xp3` scheme (where `X` is an integer >= 2) if necessary to avoid name collisions with other patch archives already present.

### Notes Regarding Dialogue Scripts
The following are some notes you should know when working with the script files.

#### Indentation Policy
For consistency, please use **four spaces** for indents instead of fewer or more spaces and instead of tab characters **if you need to change the identation of any line**, but **try to avoid changing indentation where possible**.

Lines that don't need their indentation adjusted should be left alone, since these scripts are hundreds of thousands of lines long, and it would take a significant amount of time to replace each tab character with four spaces.

#### Noteworthy Use of Conventions
Note that quotations marks are used in the text when a character is actually speaking. Please do not neglect them.

Also note that text where there is no speaker has a trailing space at the end of the string. I'm guessing this is for formatting reasons to make the text appear properly in-game without potentially conflicting with other UI elements. Regardless, for the sake of consistency, do not omit trailing spaces in non-speaking lines.

#### Dialogue Array Structure
You'll find that all the dialogue text can be found inside arrays with at least two but up to four elements inside. For example:
```JSON
[
    null,
    "Hachiroku has doubts of her own, just in different ways. "
]
```
or
```JSON
[
    "Sotetsu",
    "\"Hachiroku, let's head back to the brewery. We need to talk it over with Makura-nee first.\""
]
```

These arrays follow the following format:
```JSON
[
    "String that equals the speaker's name, or null for no speaker",
    "Dialogue text displayed during normal play",
    "Unsure, but possibly dialogue text used as the default hint text for the users' bookmarks",
    "Dialogue text displayed from scene selection menu"
]
```

Every array with dialogue text is inside one larger array that can be found under the key `texts` in each chapter's file in the `scn` directories.

#### Glossary Links & Text Color
Some text has in-line references to glossary terms, which are done like so:
```JSON
[
    "Raillord",
    "\"The %l\u7c98\u7740\u529b;#00ffc040;adhesion%l;#;'s been significantly reduced. I would strongly advise scattering the sand.\"",
    "\"The adhesion's been significantly reduced. I would strongly advise scattering the sand.\"",
    "\"The adhesion's been significantly reduced. I would strongly advise scattering the sand.\""
]
```
The format of the glossary term hyperlinks is:

`%l<JP Glossary Term>;<Text Color Hex>;<Text Displayed>%l;#;`

* `JP Glossary Term` is the glossary term in Japanese. Probably used by the engine to know which article to link to, so don't touch it.
* `Text Color Hex` is the text color of the displayed text in hexidecimal format. Only applies to the `Text Displayed`. Pretty much always `#00ffc040`. I'm unsure whether the preceding two zeroes are important or not, but please not touch it for the sake of consistency.
* `Text Displayed` is the actual text displayed in the dialogue that shows up.

Hyperlinks (and text colors) are only used for text displayed during normal play. I don't know if using them in the other lines will cause issues or not, but clearly that was not an intended use of the hyperlinks, so please restrict hyperlink use to in-game text. Not that you'd need to worry about it much since all the hyperlinks are already in the places where they're needed.
