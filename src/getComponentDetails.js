var inquirer    = require('inquirer');

var getComponentDetails = function (callback) {
    var questions = [
        {
            name: 'componentname',
            type: 'input',
            message: 'Enter your Component Name:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter component name';
                }
            }
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

module.exports = getComponentDetails;