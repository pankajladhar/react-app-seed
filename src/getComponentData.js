let path = require('path');
let getComponentData = (srcDir, componentNane, styleExt) => {
    return [
        {
            fileName: srcDir + "/Components/"+componentNane+"/index.js",
            template: "Components/index.template",
        },
        {
            fileName: srcDir + "/Components/"+componentNane+"/Readme.md",
            template: "Components/Readme.template",
        },
        {
            fileName: srcDir + "/Components/"+componentNane+"/__tests__/"+componentNane+"Spec.js",
            template: "Components/Spec.template",
        },
        {
            fileName: srcDir + "/Components/"+componentNane+"/Styles/"+componentNane+"."+styleExt,
            template: "Components/Style.template",
        },
    ]
}

module.exports = getComponentData;