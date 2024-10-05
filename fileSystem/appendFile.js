// Append Data ( writing in File using promises)

const filePath = "/University Data/Semester 7/WAF/Nodejs/fileSystem/sample.txt"

const fsPromise = require("fs").promises;

txtFile = filePath;

content = "This is Nodejs "
const AppendFile = async () => {
    try {
        // await fsPromise.writeFile(txtFile, content);
        // await fsPromise.appendFile(txtFile, "\n This files has been appended")
        await fsPromise.writeFile(txtFile, "\nAdding at the end", {
            flag: "a+", // this will get the cursor to the end of the file to write
        });
        const data = await fsPromise.readFile(txtFile);
        console.log(data.toString())
    } catch (err) {
        console.log(err)
    } 
}

AppendFile()