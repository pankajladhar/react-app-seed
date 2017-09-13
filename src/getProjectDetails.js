let inquirer    = require('inquirer');

let getProjectDetails = function (callback) {
    let questions = [
        {
            name: 'appName',
            type: 'input',
            message: 'Enter your Application Name:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter component name';
                }
            }
        },
        {
            name: 'srcFolderName',
            type: 'input',
            message: 'Enter Source Code Folder Name:',
            default:'src',
        },
        {
            name: 'buildFolderName',
            type: 'input',
            message: 'Enter Build Folder Name:',
            default:'build',
        },
        {
            name: 'styleExt',
            type: 'list',
            message: 'Style Preference ?',
            choices: ["CSS", "SCSS", "LESS",]
        }
        
    ];

    return inquirer.prompt(questions)
}

module.exports = getProjectDetails;