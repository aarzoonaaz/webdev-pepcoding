let path = require("path")
let fs = require("fs")
// for (let i=1; i<=10; i++){
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake, "readme.md"), ` # readme for ${dirPathToMake}`)
    
// }

// for (let i = 1; i <= 10; i++) {
//     let dirPathToDelete = `Lecture-${i}`;
  
//     // Delete the file inside the directory
//     let filePathToDelete = path.join(dirPathToDelete, "readme.md");
//     fs.unlinkSync(filePathToDelete);  
  
//     // Delete the directory
//     fs.rmdirSync(dirPathToDelete);
//   }
let extName = path.extname(path.join(__dirname, "abc.js"));
console.log("extension is:",extName);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);


