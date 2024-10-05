const makeAPICall = (time) => {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API executed in : " + time)
        }, time)
    })
}

let allAPIreq = [makeAPICall(1000), makeAPICall(2000), makeAPICall(500)];

// All the API requests executes at the same time
// Promise.all(allAPIreq).then((val) => {console.log(val)});

// now here execution happens one after the another, wait for one another 
(async function () {
    for(let request of allAPIreq){
        console.log(await request());
    }
})();