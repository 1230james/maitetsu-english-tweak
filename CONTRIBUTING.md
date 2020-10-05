If you're reading this, then you're probably thinking about contributing to this project. 

Feel free to fork this repository and submit changes. If you have any questions or comments, come join the [Maitetsu Fan Discord Server](https://discord.gg/ZqGRGGx) to discuss.

Non-programmers or anyone unfamiliar with Git, your contributions are still wanted! Consider looking up simple tutorials on using Git and GitHub, or forward your changes to the Maitetsu Fan Discord Server instead.

Make sure you're reading this on the `dev-master` branch for the most up-to-date contribution instructions and information!

# General Information

## Requested Contributions
While I would love community assistance, I would still like to leave most of the work in the hands of only a few trusted individuals. In this section, you can find in which areas I'm looking for community contributions for.

Any of the lists below may change without notice.

### Abstract
In general, I **want** contributions for:

* Fixing typos in sections that already received their first pass.
* Suggesting better wording in sections that already received their first pass.
* Adding and/or replacing American terminology with British equivalents for the UK version of the patch.

And I **do not want**:

* Contributions working significantly ahead of the progress I've made.
* Changes made directly to SCN JSON files (see readme in `extractor-js` for definition) in sections being actively worked on.

### Concrete
Specifically, contributions in these areas are wanted:

* TBA

## Branch Guide

`master`: For releases, major changes, and changes to the repo's README only.

`dev-master`: Master branch for all development work. Submit pull requests to this branch, please.

`extractor-js`: *Stale*; separate work branch for developing `MaitetsuExtractor`. Will not be used unless I'm making major changes to `MaitetsuExtractor`.

## Directory Guide

`en`: Files that are a part of both patches; i.e. they don't differ between the American and British English versions.

`us`: Files with American English-specific tweaks.

`gb`: Files with British English-specific tweaks.

Each of the three directories above contain subdirectories identical to the contents of the actual `data.xp3` file from which the scripts are extracted from for organizational purposes.

## Work Plan
Work plan for the entire project. May change without notice.

1. Complete US translation of a chapter.

2. Do a second pass on that chapter to tweak changes and catch typos.

3. Begin UK translation of that chapter; begin to accept community contributions for the chapter.

4. Once UK translation is near completion or is completed and the US translation has most or all of its issues fixed, start US translation of next chapter.

5. Repeat until all chapters are finished.

6. At some point (doesn't matter exactly when), do the US translation of the entire glossary.

7. Second pass of glossary, then begin UK translation of it.

Remember to see the progress section above to know where exactly I am in the project!

## Workflow
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

## Tools
To contribute, all you need is Git and something to edit JSON files with.

For Git, you may use whichever solution you'd like, whether it be Git for Windows, GitHub Desktop, Git that comes with Linux distributions, etc.

For editing JSON files, any text editor will suffice. If you need a recommendation, I personally like [Notepad++](https://notepad-plus-plus.org/).

Optionally, you may also want to set up your machine to be able to use `MaitetsuExtractor`, which you can read about by checking the readme file in the `extractor-js` directory.

# Policies
Policies to follow when making commits that will eventually be merged back into this repository. If your commits do not adhere to these policies, any pull requests may be denied.

## Committing SCN JSON Changes
Please **do not** commit changes made to SCN JSONs unless if your commit meets the following criteria:

1. You are making only minor edits (e.g. fixing typos, punctuation, minor grammar tweaks, etc.).
2. The dialogue JSON(s) for the chapter(s) you edited do not have changes that aren't in the corresponding SCN JSON(s) yet (i.e. SCN JSON(s) must be up to date).
3. The SCN JSON(s) you edited have not had any changes made to them on `dev-master` in at least 30 days.

**NEVER** directly make changes to SCN JSONs unless it is to fix an issue that causes problems with `MaitetsuExtractor`. *Always* use `MaitetsuExtractor` to make changes to SCN JSONs unless otherwise authorized.

Making changes to the SCN JSONs yourself is **not required**. I can handle them myself just fine; if you want to not worry about this, then simply only submit your changes on dialogue JSONs, and I can take care of the rest by myself.

## Commit Messages
All first lines in commit messages must be brief (1 sentence max) and be indicative of what the commit entails.

**Good Commits**
* Created dialogue JSON for Common Route ch. 1
* Finished first pass of the intro
* Tweak wording in Lap article

**Bad Commits**
* \<anything irrelevant or nondescriptive\>
* Made changes
* Finished edits for Common Route ch. 1; fixed missing speaker names, fixed glossary hyperlinks. Began edits for ch. 2; finished up to first fade transition.

If a lot of changes are made in the commit or something in the commit needs a longer explanation, please put the extra text in the second line of the commit (i.e. `$ git commit -m "Brief message here" -m "Extended explanation of commit here"`). Please try to keep these brief as well, but feel free to use proper English and use multiple sentences if necessary.

## Pull Requests
When submitting pull requests, please ensure:

1. The base branch is set to `dev-master`. Always send pull requests to `dev-master`, **never** send them to `master`.
2. All commits and changes you made adhere to other policies and guidelines listed in this document.
3. List all the changes you made in your pull request message. You do not need to be too specific, but give me an outline. For example, you can say "Fixed punctuation typos in Common Route chapter 1" instead of a dozen instances of "Added comma on line X in Common Route chapter 1".

## Indentation Policy
For consistency, please use **four spaces** for indents instead of fewer or more spaces and instead of tab characters **if you need to change the identation of any line**, but **try to avoid changing indentation where possible**.

Lines that don't need their indentation adjusted should be left alone, since these scripts are hundreds of thousands of lines long, and it would take a significant amount of time to replace each tab character with four spaces.

# Notes
The following are some notes you should know when working with the script files.

## Noteworthy Use of Conventions
Note that quotations marks are used in the text when a character is actually speaking. Please do not neglect them.

Also note that text where there is no speaker has a trailing space at the end of the string. I'm guessing this is for formatting reasons to make the text appear properly in-game without potentially conflicting with other UI elements. Regardless, for the sake of consistency, do not omit trailing spaces in non-speaking lines.

## Dialogue Array Structure
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

## Glossary Links & Text Color
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