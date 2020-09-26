// MaitetsuExtractor.js by 1230james
// Injection Module
"use strict";

// =====================================================================================================================

const fs = require("fs");

// =====================================================================================================================

function setArrays(texts, fullData) {
    fullData.scenes[1].texts.forEach(function(val, index) {
        fullData.scenes[1].texts[index][2] = texts[index];
    });
    return fullData;
}

function readFile(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function writeFile(data, path) {
    return new Promise(function(resolve, reject) {
        let data2 = JSON.stringify(data, null, "\t");
        fs.writeFile(path, data2, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function promiseBody(inPath, outPath, resolve, reject) {
    readFile(outPath).then(function(fullData) { // read the full scn json
        readFile(inPath).then(function(texts) { // then read the dialogue-only json
            setArrays(texts, fullData);         // inject/insert dialogue arrays into appropriate places in scn json
            writeFile(fullData, outPath).then(function() { // self-explanatory
    // ===================================================
                resolve();
            }).catch(err => { reject(err) }); // sorry lads, no more consistency
        }).catch(err => { reject(err) });
    }).catch(err => { reject(err) });
}

// =====================================================================================================================

module.exports = function(inPath, outPath) {
    return new Promise(function(resolve, reject) {
        promiseBody(inPath, outPath, resolve, reject);
    });
}