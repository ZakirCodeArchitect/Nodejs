const http = require('http')

// http.createServer((req,res) => {
//     res.write("Nodejs Server")
//     res.end();
// }).listen(3000)

function dataControl(req,res)
{
    res.write("Nodejs Server Running")
    res.end();
}

http.createServer(dataControl).listen(3000);


