const promise = new Promise((resolve, reject) => {
    console.log("Async Task Execution")
    if (true) {
        const name = { name: "Zakir" }
        resolve(name)
    } else {
        const error = { err: "Error 101" }
        reject(error)
    }
})

// so promise basically takes 2 arguments as resolve and reject
promise.then(
    (val) => { console.log(val) },
    (err) => { console.log(err) }
)


// Direct Method

// const p = Promise.resolve("Execution is Done");
// p.then((val) => {console.log(val)}) // not possible by call back functions.

// promises are asynchronous by nature



/* Converting call-back functions to promise 
// Proving promises are asynchronous in nature.
function asyncTask()
{
    return Promise.resolve();
}

asyncTask().then(() => console.log(name))

const name = "Zakir";

*/

// const p = Promise.resolve("Done")

// p.then((val) => { 
//     console.log(val)
//     return "Done2"
// }).then((val) => console.log(val))
//     .catch((val) => console.log(val)) // inorder to catch an error

// so in a nested then function , the prevous .then function has to return some value in order for the next one to get accepted.