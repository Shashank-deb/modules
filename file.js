 // create ,read ,update and delete from a particular fileURLToPath
let fs=require("fs");
let buffer=fs.readFileSync("abc.js");

//FILE
//1.open -w
//2. writefileSync
//3.readfileSync
//4.appendFile
//5.unlinkSync



//FOLDER
//1.mkdirSync
//2.readdirSync
//3.rmdirSync



// console.log("bin data"+ buffer);
//open
// fs.openSync("abc.txt","w");


//if file exist then content replace otherwise create
//create/write
// fs.writeFileSync("abc.txt","hum bhaut khush he ");



//update
// fs.appendFileSync("abc.txt","bhai khush kyu nhi he");





//folder concept
// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/meriFile.txt","Mera Content",);
// let content=fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i=0;i<content.length;i++)
// {
// console.log("file",content[i],"is been remove");
//removal of file having unlink sync
// fs.unlinkSync("meriDirectory/"+content[i]);
// }







// fs.existsSync-->if a file exist a path -->true/false
// let doesPathExist=fs.existsSync("abcd.txt");
// console.log(doesPathExist);
// doesPathExist=fs.existsSync("abc.txt");
// console.log(doesPathExist);








//fs.lstatSync-->if this path is for path or folder checking
// let detail=fs.lstatSync(__dirname+"\\file.js");
// let ans=detail.isFile();
// console.log(ans);
// ans=details.isDirectory();
// console.log(ans);



//folder removal 
// fs.rmdirSync("meriDirectory");





