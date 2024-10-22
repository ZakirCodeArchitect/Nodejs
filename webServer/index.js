const http = require('http')
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, "data.json")
const index = path.join(__dirname, "index.html")

const page = fs.readFileSync(index, "utf-8")
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')); // parsing into json 
// because server only deals in strings 

const products = data.products // from the data.json file 

const server = http.createServer((request, response) => {
    console.log("server is running in port 3000")

    // this is how we are displaying the details of the product entered on the browser with ID
    if (request.url.startsWith('/product')) {
        const userId = request.url.split('/')[2]; // id that is being entered on the browser
        const product = products.find(p => p.userId === (+userId));
        // console.log(product)

        response.setHeader('Content-Type', 'text/html');

        // now with this replace method i had fetched the data from the .json file and displayed it in the title of the html page
        let modifiedDetails = page.replace("**title**", product.title)
            .replace("**body**", product.body)
            .replace("**price**", product.price)
        response.end(modifiedDetails);
        return; // this is very important because other wise server will go onward to search more and you'll get an error
    }


    // case '/':
    //     response.setHeader('Content-Type', 'text/html');

    //     // now with this replace method i had fetched the data from the .json file and displayed it in the title of the html page
    //     let modifiedDetails = page.replace("**title**", product.title)
    //         .replace("**body**", product.body)
    //         .replace("**price**", product.price)
    //     response.end(modifiedDetails)
    //     break;

    // routing created
    switch (request.url) {
        case '/':
            response.end("Home Page");
            break;

        case '/dashboard':
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(data));
            break;

        default:
            response.end("Status not found")
            break;
    }
})

server.listen(3000);