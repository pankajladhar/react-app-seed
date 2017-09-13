let path = require('path');
let getProjectData = (srcDir, styleExt) => {
    return [
        {
            fileName: srcDir + "/static/index.html",
            template: "",
        },
        {
            fileName: srcDir + "/static/index."+styleExt,
            template: "",
        },
        {
            fileName: srcDir + "/index.js",
            template: "",
        },
        {
            fileName: "./README.md",
            template: "",
        },
        {
            fileName: "./.gitignore",
            template: "",
        },
        {
            fileName: "./package.json",
            template: "",
        },
        {
            fileName: "./jest.json",
            template: "",
        },
        {
            fileName: "./LICENSE",
            template: "",
        },
        {
            fileName: "./.eslintrc",
            template: "",
        },
        {
            fileName: "./.eslintignore",
            template: "",
        },
        {
            fileName: "./.babelrc",
            template: "",
        },
        {
            fileName: "./.editorconfig",
            template: "",
        },
        {
            fileName: "./.stylelintrc.json",
            template: "",
        },
        {
            fileName: "./webpack.config.js",
            template: "",
        },
        {
            fileName: srcDir + "/Components/App/index.js",
            template: "",
        },
        {
            fileName: srcDir + "/Components/App/__tests__/AppSpec.js",
            template: "",
        },
        {
            fileName: srcDir + "/Components/App/Styles/App."+styleExt,
            template: "",
        },
    ]
} 

module.exports = getProjectData;
