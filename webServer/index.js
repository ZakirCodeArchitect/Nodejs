const http = require('http')
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, "data.json")
const index = path.join(__dirname, "index.html")

const page = fs.readFileSync(index, "utf-8")
const data = fs.readFileSync(filePath, 'utf-8')

const server = http.createServer((request, response) => {
    console.log("server is running in port 3000")

    // routing created
    switch (request.url) {
        case '/':
            response.setHeader('Content-Type', 'text/html');
            // response.setHeader('Content-Type', 'application/json');
            response.end(page)
            break;

        case '/dashboard':
            response.setHeader('Content-Type', 'application/json');
            response.end(data)
            break;

        default:
            response.end(404, "Status not found")
            break;
    }
})

server.listen(3000);