const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');

// import * as data from './package.json';

console.log("Versions: ");

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
    // console.log(element)
    // element = element.replace("+--", "");
    // element = element.replace(/[0-9]/g,"");
    // element = element.replace(/\./g,"");
    //element = element.replace('@',":");
    if (element != ''){
        packages.push(element.trim());
    }
    console.log(element);
});
const package = "Das ist ein STring, warum kann ich keine Arrays ausgeben";
console.log(package);

//const blaa = data;
// console.log(blaa); // output 'testing'
console.log("ENDE");


fs.readFile('package.json', (err, data) => {
    if (err)
      console.log(err);
    else {
      var json = JSON.parse(data);
      console.log(json);

    //your code using json object
    }
})