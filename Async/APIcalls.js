const makeAPICall = (time) => {
    return () => new Promise((resolve,reject) => {
    // return new Promise((resolve, reject) => { // returning promise
        setTimeout(() => {
            resolve("This API executed in : " + time)
        }, time)
    })
}

let multiAPICalls = [makeAPICall(1000), makeAPICall(2000), makeAPICall(500)];

// Promise.all(multiAPICalls).then((val) => { console.log(val)} ) //so it is going to return me array of API Calls

// These above all API Calls were simultaneosly 

// This is going to return me the API Call which got executed first
// Promise.race(multiAPICalls).then((val) => {console.log(val)});


// -> now with this approach function will execute one by one instead of get executed at once.
// Wait for the execution of each API
(async function(){
    for(let request of multiAPICalls){
        console.log(await request())
    }
})();