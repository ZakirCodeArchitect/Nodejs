
// 1. -> Get the Path and extensions.
// const path = require("path");
const path = require('path')

const filePath = "/University Data/Semester 7/WAF/Nodejs/fileSystem/text.txt"

const fs = require('fs')
// const txtFile = path.join(__dirname, "fileSystem", "text.txt")

const txtFile = filePath;
content = "Nodejs - WAF"
// Asyncronous code --> non-blocking
// For SYnchronous code , add Sync with writeFile and remove (err) arrow function.
fs.writeFile(txtFile, content, (err) => {
    if(err) 
    {
        throw new Error("Something went wrong")
    }
    else{
        console.log("Data written into the file successfully");   
    }
    // also reading the content from the same file
    fs.readFile(txtFile, "utf-8", (err, data) => {
        if(err)
        {
            throw new Error(err);
        }
        else{
            console.log("Data Written in the File",data)
        }
    });
})

// $(new Date().getHours().toString()) --> used with in the write file if i want to write the time in the file

