let path = require('path');
let getComponentData = require('./getComponentData');
let getProjectData = (srcDir, styleExt) => {
    let baseProjectData =  [
        {
            fileName: srcDir + "/static/index.html",
            template: "Base/Html.template",
        },
        {
            fileName: srcDir + "/static/index."+styleExt,
            template: "Base/Style.template",
        },
        {
            fileName: srcDir + "/index.js",
            template: "Base/index.template",
        },
        {
            fileName: "./README.md",
            template: "Base/README.template",
        },
        {
            fileName: "./package.json",
            template: "Base/package.template",
        },
        {
            fileName: "./jest.json",
            template: "Base/jest.template",
        },
        {
            fileName: "./LICENSE",
            template: "Base/License.template",
        },
        {
            fileName: "./webpack.config.js",
            template: "Base/Webpack.template",
        },
        {
            fileName: "./.gitignore",
            template: "dotfiles/.gitignore.template",
        },
        {
            fileName: "./.eslintrc",
            template: "dotfiles/.Eslintrc.template",
        },
        {
            fileName: "./.eslintignore",
            template: "dotfiles/.Eslintignore.template",
        },
        {
            fileName: "./.babelrc",
            template: "dotfiles/.Babelrc.template",
        },
        {
            fileName: "./.editorconfig",
            template: "dotfiles/.Editorconfig.template",
        },
        {
            fileName: "./.stylelintrc.json",
            template: "dotfiles/.Stylelintrc.template",
        },
    ];
    return baseProjectData.concat(getComponentData(srcDir, "App", styleExt))
} 

module.exports = getProjectData;
