#!/usr/bin/env node
const chalk = require('chalk'); 
const figlet = require('figlet');
const commander = require('commander');
const treeify = require('treeify');
const path = require("path");

const packageJSONFile = require(path.join(__dirname, 'package.json'));
var getProjectDetails = require('./src/getProjectDetails');
var createProject = require('./src/createProject');


commander
    .version(packageJSONFile.version)
    .option('-c, --createcomponent', 'use to create component')
    .option('-u, --updateversion', 'use to bump up version number')
    .parse(process.argv);

    getProjectDetails()
        .then((arguments) => { return createProject(arguments)})
        .then(() => { console.log(chalk.yellow(figlet.textSync("done", { horizontalLayout: 'full' })))})
        .catch((err) => {
            console.log(chalk.red(err))
        });

