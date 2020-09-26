# Maitetsu English Tweak
Fan-made tweaks to Sekai's English localization of Maitetsu.

*This README may change at any time without notice as the project progresses.*

## Downloads & Installation Instructions
Downloads will be located on the [releases page](https://github.com/1230james/maitetsu-english-tweak/releases).

Installation instructions will be bundled with or otherwise included alongside the downloads.

## Goals

* Improve use of English railroading jargon.
* Fix grammatical typos and other incorrect English conventions.
* Improve writing in sections with awkward wording or flow.
* Correct any and all other errors and inconsistencies throughout the visual novel.
* Offer separate American English and British English varieties.
* Compatibility with Steam and non-Steam desktop editions of Maitetsu.
* Will *not* include H-scene dialogue.

## Progress
If you're viewing this on the `master` branch, you are seeing the progress that the latest release covers.

If you're viewing this on the `dev-master` branch, you are more-or-less seeing the progress that the latest commit cover.

Be sure to view this section on the `dev-master` branch ([here](https://github.com/1230james/maitetsu-english-tweak/tree/dev-master)) for the most up-to-date progress information!

**Currently Working On:** Common Route, Chapter 1, first pass

**Coming Up Next:** Common Route, Chapter 1, second pass

* American (US) Patch Progress:
    * Glossary: 0%
    * Common Route: 0%
    * Hachiroku Route: 0%
    * Paulette Route: 0%
    * Hibiki Route: 0%
    * Makura Route: 0%
    * Kisaki Route: 0%
    * Nagi/Fukami Route: 0%
    * Reina Route: 0%
    * Grand Route: 0%
    
* British (UK) Patch Progress:
    * Glossary: 0%
    * Common Route: 0%
    * Hachiroku Route: 0%
    * Paulette Route: 0%
    * Hibiki Route: 0%
    * Makura Route: 0%
    * Kisaki Route: 0%
    * Nagi/Fukami Route: 0%
    * Reina Route: 0%
    * Grand Route: 0%

### Progress Calculation
Mainly a note to myself, but also available for curious minds:

`Glossary = (# Articles finished) / 183`

`Route = 0.75 * ((# Chapters w/ first pass finished) / (Total # of chapters)) + 0.25 * ((# Chapters w/ 2+ passes finished) / (Total # of chapters))`

Both values are floored (rounded down) to an integer after computation.

## Tools Used

* [KrkrExtract 4.0.1.5](https://github.com/xmoeproject/KrkrExtract) to extract the scripts from XP3 archives in JSON format en masse.
* KrkrExtract 1.0.3.1 for packing a patch archive.
* [GARbro](https://github.com/morkt/GARbro) for browsing and extracting files from XP3 archives when KrkrExtract isn't used.
* [PsBuild from FreeMote](https://github.com/UlyssesWu/FreeMote) for converting JSON back into a KiriKiri-compatible format (SCN).

## Contributing
Contributions are welcome! This is intended to be a community project; I'm not intending to do this entirely by myself.

Feel free to fork this repository and submit changes. If you have any questions or comments, come join the [Maitetsu Fan Discord Server](https://discord.gg/ZqGRGGx) to discuss.

Non-programmers or anyone unfamiliar with Git, your contributions are still wanted! Consider looking up simple tutorials on using Git and GitHub, or forward your changes to the Maitetsu Fan Discord Server instead.

Make sure you're reading this on the `dev-master` branch for the most up-to-date contribution instructions and information!

### Branch Guide

`master`: For releases, major changes, and changes to the repo's README only.

`dev-master`: Master branch for all development work. Submit merge requests to this branch, please.

`extractor-js`: *Stale*; separate work branch for developing `MaitetsuExtractor`. Will not be used unless I'm making major changes to `MaitetsuExtractor`.

### Directory Guide

`en`: Files that are a part of both patches; i.e. they don't differ between the American and British English versions.

`us`: Files with American English-specific tweaks.

`gb`: Files with British English-specific tweaks.

Each of the three directories above contain subdirectories identical to the contents of the actual `data.xp3` file from which the scripts are extracted from for organizational purposes.

### Work Plan
Work plan for the entire project. May change without notice.

1. Complete US translation of a chapter.

2. Do a second pass on that chapter to tweak changes and catch typos.

3. Begin UK translation of that chapter; begin to accept community contributions for the chapter.

4. Once UK translation is near completion or is completed and the US translation has most or all of its issues fixed, start US translation of next chapter.

5. Repeat until all chapters are finished.

6. At some point (doesn't matter exactly when), do the US translation of the entire glossary.

7. Second pass of glossary, then begin UK translation of it.

Remember to see the progress section above to know where exactly I am in the project!

### Workflow
Ideal overall workflow for a given chapter; may change without notice:

1. If it doesn't exist yet, use `MaitetsuExtractor` to create a dialogue JSON of the chapter. See the README in the `extractor-js` directory for a definition of "dialogue JSON" and instructions on how to use `MaitetsuExtractor`.

2. Edit English text in the chapter's dialogue JSON.

3. Commit changes.

4. Use `MaitetsuExtractor` to insert changes into the main SCN JSON file of the chapter and commit again.

The steps beyond this point in the workflow are for compiling the patch itself and installing it. Users only working on the translation tweaks themselves need not be concerned.

5. Use `PsBuild` to convert the SCN JSON into PSB format.

6. Use `PsBuild` again to convert the PSB file to SCN format.

7. Add the SCN file to the patch directory (where "patch directory" is some directory with other SCN files to be added in the patch archive; doesn't refer to a specific directory in this repository).

8. Run the patch directory through `KrkrExtract` to package it into an XP3 archive.

9. If it isn't already there, put the XP3 archive in the root of the Maitetsu directory. Rename using `patchX.xp3` scheme (where `X` is an integer >= 2) if necessary to avoid name collisions with other patch archives already present.

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
    "\"The %l粘着力;#00ffc040;adhesion%l;#;'s been significantly reduced. I would strongly advise scattering the sand.\"",
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
