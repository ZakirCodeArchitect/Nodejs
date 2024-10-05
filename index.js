
// // 1. -> Get the Path and extensions.
// const path = require("path");

// const filePath = "/University Data/Semester 7/WAF/Nodejs/fileSystem/sample.txt"

// //dirname
// // console.log(path.dirname(filePath));

// //basename
// // console.log(path.basename(filePath));

// //extension
// // console.log(path.extname(filePath));

// // 2. -> To get all the methods of file.s
// // const fs = require('fs')
// // console.log(fs);


// // 3. -> Reading from a file

// // asynchronous - One way to Read the File
// // const fs = require("fs")
// // fs.readFile(filePath, (err, data) => {
// //     if(err) 
// //     {
// //         throw new Error("Something went wrong")
// //     }
// //     else{
// //         console.log("Async Way : ", data.toString());   // Reading what was in the file
// //     }
// // })

// // synchronosly working thats why this one will run first then the above one.
// // second way to read the file.
// // try {
// //     const data = fs.readFileSync(path.join(__dirname, "fileSystem", "sample.txt"), 
// //     "utf-8"); // character encoding in this line
// //     console.log("Sync Way : ",data)
// // } catch (err) {
// //     console.log(err)
// // }

// // Third way to read the file.

// // const fsPromise = require("fs").promises;
// // const fileReading = async () => {
// //     try {
// //         const data = await fsPromise.readFile(filePath, {encoding: "utf-8"})
// //         console.log("Fs Promises Method : ",data)
// //     } catch (err) {
// //         console.log(err)
// //     } 

// // }
// // fileReading();

// // -> Writing into a File

// const fs = require('fs')
// const txtFile = path.join(__dirname, "fileSystem", "text.txt")
// content = "Nodejs - WAF"
// fs.writeFile(txtFile, content, (err) => {
//     if(err) 
//     {
//         throw new Error("Something went wrong")
//     }
//     else{
//         console.log("Data written into the file successfully");   // Reading what was in the file
//     }

//     // also reading the content from the same file
//     fs.readFile(txtFile, "utf-8", (err, data) => {
//         if(err)
//         {
//             throw new Error(err);
//         }
//         else{
//             console.log(data)
//         }
//     });
// })

