const core = require('@actions/core');
const github = require('@actions/github');

console.log("Versions: ");

var gnv = require('./file2.js');

gnv();
console.log(gnv.test);