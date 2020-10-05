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
Be sure to view this section on the `dev-master` branch ([here](https://github.com/1230james/maitetsu-english-tweak/tree/dev-master)) for the most up-to-date progress information!

**Currently Working On:** Common Route, Chapter 1, first pass

**Coming Up Next:** Common Route, Chapter 1, second pass

* American (US) Patch Progress:
    * Glossary: 1%
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
* MaitetsuExtractor, a custom tool for extracting dialogue information from game assets. See the README in the `extractor-js` directory.

## Contributing
Contributions are welcome! This is intended to be a community project; I'm not intending to do this entirely by myself.

Please read the [contributing information](https://github.com/1230james/maitetsu-english-tweak/blob/master/CONTRIBUTING.md) if you're interested in contributing to this project.
