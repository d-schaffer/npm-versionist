const core = require('@actions/core');
const github = require('@actions/github');

console.log("Versions: ");
console.log("runs here?");
/*var gnv = require('./file2.js');

gnv();*/ 

const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync('npm list --depth=0', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);

let stringi = output.split("\n");
let packages = [];
// console.log(length(stringi));
stringi.forEach(function(element) { 
    console.log(element)
    element = element.replace("+--", "");
    // element = element.replace(/[0-9]/g,"");
    // element = element.replace(/\./g,"");
    element = element.replace('@',":");
    if (element != ''){
        packages.push(element.trim());
    }
});

console.log(packages[1]);

console.log("test");
core.setOutput("packages", packages);

const payload = JSON.stringify(github.context.payload, undefined, 2)
console.log(`The event payload: ${payload}`);