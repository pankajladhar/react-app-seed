let path = require('path');
let getProjectData = (srcDir, styleExt) => {
    return [
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
            fileName: srcDir + "/Components/App/index.js",
            template: "Components/index.template",
        },
        {
            fileName: srcDir + "/Components/App/__tests__/AppSpec.js",
            template: "Components/Spec.template",
        },
        {
            fileName: srcDir + "/Components/App/Styles/App."+styleExt,
            template: "Components/Style.template",
        },
        {
            fileName: "./README.md",
            template: "Base/README.template",
        },
        {
            fileName: "./.gitignore",
            template: "Base/.gitignore.template",
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
            fileName: "./.eslintrc",
            template: "Base/.Eslintrc.template",
        },
        {
            fileName: "./.eslintignore",
            template: "Base/.Eslintignore.template",
        },
        {
            fileName: "./.babelrc",
            template: "Base/.Babelrc.template",
        },
        {
            fileName: "./.editorconfig",
            template: "Base/.Editorconfig.template",
        },
        {
            fileName: "./.stylelintrc.json",
            template: "Base/.Stylelintrc.template",
        },
        {
            fileName: "./webpack.config.js",
            template: "Base/Webpack.template",
        },
    ]
} 

module.exports = getProjectData;
