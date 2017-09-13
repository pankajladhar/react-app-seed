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
    let srcDir = path.join(projectDir, args.srcFolderName);
    let buildDir = path.join(projectDir, args.buildFolderName);
    let templateDir = path.join(__dirname, 'Templates');

    console.log(srcDir, "sdds")
    
    let files = getProjectData(args.srcFolderName);
    

    fs.ensureDir(projectDir)
    .then(()=>{
        return createFiles(files, templateDir, projectDir)
    }).then((data)=>{
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })
    
}

module.exports = createProject