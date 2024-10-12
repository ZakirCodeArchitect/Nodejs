// Callback: Is a function which is passed as an argument into an another function and another function will execute it later on.
// Callbacks are synchronous in nature, we make them asynchronous.

console.log("Task started");

function asyncTask(cb){
    console.log("Task running");
    // cb() // for simple synchronous working
    setTimeout(cb,0); //because of using here setTimeout we made our function callback function to make it work asynchronously, 
}

asyncTask(() => console.log(name))
console.log("Task Ended")
const name = "zakir";

