const {CustomError} = require("./customError")

function dosomething() {
    const data = fetch("localhost:3000/api")
    console.log("async await with Error")

    return data;
}


const someFunction = async () => {
    try {
        await dosomething();
    } catch (err) {
        throw new CustomError(err.message);  
    } 
}

someFunction()