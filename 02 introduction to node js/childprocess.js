let childProcess = require("child_process");
console.log("trying to open calculator");
//childProcess.execSync("calc")
console.log("opened calculator");
//childProcess.execSync("start chrome https:\\www.youtube.com")
let output = childProcess.execSync(" node abc.js")
console.log("output " + output);