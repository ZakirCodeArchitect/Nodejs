const readline = require('readline');

// Create an interface for input and output
const interface = readline.createInterface({
    input: process.stdin, //for input
    output: process.stdout // for output
});

const userLogin = () => {
    return new Promise((resolve, reject) => {
        console.log("Enter User Name and Password : ");
        interface.question("Enter UserName: ", (username) => {
            interface.question("Enter Password: ", (password) => {
                console.log("Performing Authentication");
                setTimeout(() => {
                    if (username === "zakir" && password === "zakir123") {
                        resolve("User Authenticated");
                    } else {
                        reject("Access Denied");
                    }
                }, 1000);
            });
        });
    });
};

function goToHomePage(userAuthStatus) {
    return Promise.resolve(`Go to HomePage as: ${userAuthStatus}`);
}

// Execute userLogin and handle the promises --> Synchronous
// userLogin()
//     .then((response) => {
//         console.log("User Validated");
//         return goToHomePage(response);
//     })
//     .then((userAuthStatus) => {
//         console.log(userAuthStatus);
//         interface.close(); // Close the readline interface
//     })
//     .catch((error) => {
//         console.error(error);
//         interface.close(); // Close the readline interface on error
//     });


// -> Asynchronous.

 // await means we have to wait for this function to get executed.
 // using await where promise will get returned.

async function performTask(){
    try {
        const response = await userLogin();
        console.log("User Validated")

        const userAuthStatus = await goToHomePage(response);
        console.log(userAuthStatus);
        interface.close(); // to close the interface
    } catch (err) {
        console.log(err)
        interface.close(); // to close the interface
    } 
}

performTask();