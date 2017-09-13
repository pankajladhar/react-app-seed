let fs = require('fs-extra');
let path = require('path');

let getProjectData = require('./getProjectData');


let writeInFiles = function (file, templateDir, projectDir, ciArgs){
    let templateFileContent = fs.readFileSync(
        path.join(templateDir, file.template), { encoding: "UTF-8" }
    );

    let template = templateFileContent
            .replace(/COMPONENT_NAME/g,'App')
            .replace('PROJECT_NAME',ciArgs.appName)
            .replace('STYLE_EXT',ciArgs.styleExt.toLowerCase())
    
    fs.writeFileSync(path.join(projectDir, file.fileName), template, { encoding: "UTF-8" });
}

let createFiles = function(files, templateDir, projectDir, ciArgs) {
    return Promise.all(
        files.map((file)=>{
            return fs.ensureFile(path.join(projectDir, file.fileName)).then(()=>{
                writeInFiles(file, templateDir, projectDir, ciArgs);
                return file;
            })
        })
    )
}

let createProject = (args)=>{

    let currentDir = process.cwd();
    let projectDir = path.join(currentDir, args.appName);
    let srcDir = args.srcFolderName;
    let styleExt = args.styleExt.toLowerCase();
    let buildDir = path.join(projectDir, args.buildFolderName);
    let templateDir = path.join(__dirname, 'Templates');

    let files = getProjectData(args.srcFolderName, styleExt);
    

    fs.ensureDir(projectDir)
    fs.ensureDir(buildDir)
    .then(()=>{ return createFiles(files, templateDir, projectDir, args) })
    
}

module.exports = createProject