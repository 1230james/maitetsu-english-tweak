# MaitetsuExtractor.js
Extraction and injection tool for Maitetsu scenario JSONs

## What is this?
This is a JavaScript-based tool to extract the dialogue lines from the SCN JSONs and put them into smaller JSON files that only contain the dialogue lines for easier editing, and then taking those JSONs and reinjecting the edited texts into their proper places in the SCN JSONs they originated from.

It's not necessary for this tool to exist in order to make dialogue changes, but this tool will help ease the editing process, as about half of each of the SCN JSON files are irrelevant for the purpose of making whats essentially just a translation patch.

## Why JavaScript?
Because I'm lazy. There's better things I could probably be using (Lua gang, where you at), but something running on JavaScript would take the least effort for me to get up and running.

I apologize in advance to anyone who takes offense to this design choice.

# Usage

## Dependencies

* Node.js

## Instructions

**Warning:** Do **not** use on memory-limited machines. I'm lazy, so this tool loads in entire JSON files at once, the largest of which approach 15 MB. Please do not try to run this on a free-tier cloud virtual machine or something.

*TBD*