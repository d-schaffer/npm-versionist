const core = require('@actions/core');
const github = require('@actions/github');

const core = require('@actions/core');
// const github = require('@actions/github');

function run() {
    // console.log("your NPM Verstion: ");
    // exec('npm -v');
    //console.log("alle modules: ");
    //list = console.log(exec('npm list --depth=0'));
    let test = "blaa";
    //exec('npm list --depth=0', function(err, stdout){test=stdout});
    // console.log(test);
}

const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync('npm list --depth=0', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);

let stringi = output.split("\n");
let packages = [];
// console.log(length(stringi));
stringi.forEach(function(element) { 
    console.log(element)
    core.setOutput(element)
    element = element.replace("+--", "");
    // element = element.replace(/[0-9]/g,"");
    // element = element.replace(/\./g,"");
    element = element.replace('@',":");
    if (element != ''){
        packages.push(element.trim());
    }
});

//console.log(packages[1]);
//const pack = execSync('npm show ' + packages[1] + ' version', { encoding: 'utf-8'});
//console.log(pack);

//let remov = stringi[1].replace("+-- ","");

// console.log(packages);

module.exports = run;
//core.setOutput(run)
/*try{
    core.setOutput("OUTPUT Funktioniert");
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch(erro) {
    core.setFailed(error.message);
}
core.setOutput(run);
core.setOutput("OUTPUT Funktioniert")*/