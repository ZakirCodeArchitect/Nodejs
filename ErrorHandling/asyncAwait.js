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

someFunction();

// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });