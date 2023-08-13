//Filesystem
//files -> create,              read,             update,                   delete
//        openSync "w"        readFileSync        appendFileSync            unlinkSync
let fs = require("fs");

//**read**
//let buffer = fs.readFileSync("abc.js");
//console.log("bin data " + buffer );
//**************************************************************************************** */
//**create**
//fs.openSync("abc.txt" , "w");
//no file -> create and file exist  -> content replace
//fs.writeFileSync("abc.txt", "Hello ! ")
//****************************************************************************************** */
//**update**           ->append me last me elements add ho jate h
//fs.appendFileSync("abc.txt" , "how are you?")

//********************************************************************************************* */
// Folder
//      create            read               delete
//      mkdirSync        readdirSync         rmdirSync
//********************************************************************************************* */
//fs.mkdirSync("myDirectory");
//fs.writeFileSync("myDirectory/myFile.txt", " my content ")
// let content = fs.readdirSync("myDirectory");
// console.log(content);
// for(let i=0; i<content.length; i++){
//     console.log("file ", content[i] , "is removed");
//     //remove file  **DELETE**
//     fs.unlinkSync("myDirectory/" + content[i])
// }
//*************************************************************************************************** */
//remove folder
//fs.rmdirSync("myDirectory")
//************************************************************************************************** */
//fs.existsSync -> if a file exist at a path -> true/false
let doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("abcd.txt");
console.log(doesPathExist);
//**************************************************************************************************** */
//fs.lstatSync isse pta chlta h ki ye file h ya folder 
let detailsObj = fs.lstatSync(__dirname + "\\filesystem.js");
let ans = detailsObj.isFile();
console.log(ans);
ans = detailsObj.isDirectory();
console.log(ans); 
//**************************************************************************************************** */
for (let i=1; i<=10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake +"\\" + "readme.md", `# readme for ${dirPathToMake}`)
    
}
//***************************************************************************************************** */
//first file delete  -> folder delete
// for (let i = 1; i <= 10; i++) {
//     let dirPathToDelete = `Lecture-${i}`;
  
//     // Delete the file inside the directory              
//     let filePathToDelete = dirPathToDelete + "\\" + "readme.md";
//     fs.unlinkSync(filePathToDelete);
  
//     // Delete the directory
//     fs.rmdirSync(dirPathToDelete);
//   }

 