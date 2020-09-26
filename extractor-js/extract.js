// MaitetsuExtractor.js by 1230james
// Extraction Module
"use strict";

// =====================================================================================================================

const fs = require("fs");

// =====================================================================================================================

function getArrays(data) {
    let texts = data.scenes[1].texts;
    let arr   = [];
    
    texts.forEach(function(val, index) {
        arr[index] = val[2];
    });
    return arr;
}

function readFile(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) { // haha memory inefficienies go wheeeeeeeee
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

// =====================================================================================================================

module.exports = function(inPath, outPath) {
    return new Promise(function(resolve, reject) {
        readFile(inPath).then(function(data) {
            let arr = getArrays(data);
            writeFile(arr, outPath).then(function() {
                resolve();
            }).catch(function(err) {
                reject(err);
            });
        }).catch(function(err) {
            reject(err);
        });
    });
}