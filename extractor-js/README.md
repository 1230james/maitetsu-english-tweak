# MaitetsuExtractor.js
Extraction and injection tool for Maitetsu scenario JSONs

## What is this?
This is a JavaScript-based tool to extract the dialogue lines from the SCN JSONs and put them into smaller JSON files that only contain the dialogue lines for easier editing, and then taking those JSONs and reinjecting the edited texts into their proper places in the SCN JSONs they originated from.

It's not necessary for this tool to exist in order to make dialogue changes, but this tool will help ease the editing process, as about half of each of the SCN JSON files are irrelevant for the purpose of making whats essentially just a translation patch.

## Why JavaScript?
Because I'm lazy. There's better things I could probably be using (Lua gang, where you at), but something running on JavaScript would take the least effort for me to get up and running.

I apologize in advance to anyone who takes offense to this design choice.

# Guide

### Things You Should Know

* "SCN JSON" refers to a JSON file that represents the contents of an SCN file. SCN JSONs are the ones found in the "scn" subdirectories in the repository with filenames such as "共通01_右田双鉄の帰還.txt.json".

* "Dialogue JSON" refers to a JSON file that contains an excerpt of an SCN JSON. The excerpt is the part of the SCN JSON file that contains all the dialogue lines.

## Ideal Use
This tool is meant to create JSON files that contain only the dialogue lines from a given chapter. This way, you can work within a much smaller file, which may help you in case your text editor of choice struggles with handling files with hundreds of thousands of lines.

Use this tool when you need to create a dialogue JSON that doesn't already exist.

You can also use this tool if you've made an edit to a dialogue JSON that wasn't worked on for an extended period of time. You can go ahead and reinject the changes into the corresponding SCN JSON for me (although this isn't required).

## Dependencies

* [Node.js](https://nodejs.org) - LTS release should be fine

## Instructions

**Warning:** Do **not** use on memory-limited machines. I'm lazy, so this tool loads in entire JSON files at once, the largest of which approach 15 MB. Please do not try to run this on a free-tier cloud virtual machine or something.

### Extracting a dialogue JSON from an SCN JSON

1. Run `MaitetsuExtractor.js` using node (e.g. `$ node MaitetsuExtractor.js`).

2. Enter `1` for your mode.

3. Type in the path to the SCN JSON file you want to extract the dialogue lines from.

4. Type in the path to where you want to save the dialogue JSON to. Saving in JSON format is not necessary (i.e. the tool will not check for this), but since the format of the data is in JSON, you should probably save it as a .json file.

### Injecting a dialogue JSON into an SCN JSON

1. Run `MaitetsuExtractor.js` using node (e.g. `$ node MaitetsuExtractor.js`).

2. Enter `2` for your mode.

3. Type in the path to the dialogue JSON file you want to take the dialogue information from.

4. Type in the path to the SCN JSON file you want to insert the dialogue information into. **MAKE SURE YOU ARE ENTERING THE CORRECT ONE** - this tool *overwrites* the destination file; make sure you aren't accidentally replacing a whole chapter's set of dialogue with another chapter's!

## Help, there was an error!

Open an issue or contact me at the [Maitetsu Fan Discord Server](https://discord.gg/ZqGRGGx).