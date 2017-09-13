let fs = require('fs-extra');
let path = require('path');

let getProjectData = require('./getProjectData');


let createFiles = function(files, templateDir, projectDir) {
    return Promise.all(
        files.map((file)=>{
            return fs.ensureFile(path.join(projectDir, file.fileName)).then(()=>{
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
    .then(()=>{ return createFiles(files, templateDir, projectDir) })
    
}

module.exports = createProject