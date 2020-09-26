// MaitetsuExtractor.js by 1230james
// Extracts and injects arrays that include only the dialogue lines from and into SCN JSONs from Maitetsu

// Requires Node.js.
// DO NOT RUN ON MACHINES WITH EXTREMELY LIMITED MEMORY AVAILABLE

// =====================================================================================================================

const extract   = require("./extract.js");
const inject    = require("./inject.js");
const readline  = require("readline");

var   state     = 0;
var   values    = {};
const rl        = readline.createInterface({
    input:      process.stdin,
    output:     process.stdout,
    terminal:   false
});

/*

    Valid values for state:
    -1: Terminate script execution
     0: Menu
     1: Extract; prompting for inPath
     2: Extract; prompting for outPath
     3: Inject; p.f. inPath
     4: Inject; p.f. outPath

*/

// =====================================================================================================================

function promptLoop(line) {
    switch(state) {
    case -1:
        rl.close();
        break;
    case 0:
        state0(line);
        break;
    case 1:
        state1(line);
        break;
    case 2:
        state2(line);
        break;
    case 3:
        state3(line);
        break;
    case 4:
        state4(line);
    }
}

function state0(line) {
    switch(line) {
    case "1":
        state = 1;
        console.log("[Extract] Enter path to SCN JSON:");
        break;
    case "2":
        state = 3;
        console.log("[Inject] Enter path to dialogue JSON:");
        break;
    case "3":
        state = -1;
        console.log("Goodbye!\nPress Enter to exit.");
        break;
    default:
        console.log("Invalid mode.");
    }
}

// Extract functions
function state1(line) {
    if (line.length < 1) { // keep waiting if the line is empty
        return;
    }
    values.inPath = line;
    console.log("[Extract] Enter path to dialogue JSON to output to:");
    state = 2;
}
function state2(line) {
    if (line.length < 1) {
        return;
    }
    console.log("[Extract] Extracting...");
    extract(values.inPath, line).then(function() {
        console.log("[Extract] Successfully extracted to " + line);
        console.log("Press Enter to exit.");
        state = -1;
    }).catch(function(err) {
        console.log("[Extract] An error occurred:\n" + err);
        console.log("Press Enter to exit.");
        state = -1;
    });
}

// Inject functions
function state3(line) {
    if (line.length < 1) { // keep waiting if the line is empty
        return;
    }
    values.inPath = line;
    console.log("[Inject] Enter path to SCN JSON to output to:");
    state = 4;
}
function state4(line) {
    if (line.length < 1) {
        return;
    }
    console.log("[Inject] Injecting...");
    inject(values.inPath, line).then(function() {
        console.log("[Inject] Successfully injected and exported to " + line);
        console.log("Press Enter to exit.");
        state = -1;
    }).catch(function(err) {
        console.log("[Inject] An error occurred:\n" + err);
        console.log("Press Enter to exit.");
        state = -1;
    });
}

// =====================================================================================================================

console.log("Maitetsu SCN JSON Extractor by 1230james");
console.log("\nAvailable modes:\n[1] Extract from SCN JSON\n[2] Inject to SCN JSON\n[3] Exit\nSelect mode:");
rl.on("line", promptLoop);