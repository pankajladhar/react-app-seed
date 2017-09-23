#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const commander = require('commander');
const treeify = require('treeify');
const path = require("path");
const execGitCmd = require('run-git');

const packageJSONFile = require(path.join(__dirname, 'package.json'));
let getProjectDetails = require('./src/getProjectDetails');
let createProject = require('./src/createProject');

let getComponentDetails = require('./src/getComponentDetails');


execGitCmd(['pull', '--rebase', 'origin','master']).then((data)=>{
  console.log(data)  
}).catch((err)=>{
    console.log(chalk.red(err))
})
commander
    .version(packageJSONFile.version)
    .option('-c, --createcomponent', 'use to create component')
    .option('-u, --updateversion', 'use to bump up version number')
    .parse(process.argv);
if (commander.createcomponent) {
    getComponentDetails()
        .then((arguments)=>{
            console.log(arguments)
        })
}

else {
    getProjectDetails()
        .then((arguments) => { return createProject(arguments) })
        .then(() => { console.log(chalk.yellow(figlet.textSync("done", { horizontalLayout: 'full' }))) })
        .catch((err) => {
            console.log(chalk.red(err))
        });
}

