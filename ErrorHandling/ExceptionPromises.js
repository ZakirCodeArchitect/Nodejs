function dosomething() {
    // const data = fetch("localhost:3000/api") // in case of false
    // console.log("Exception with Promises") 
    const data = "Exception with Promises"
    return data;
}

const promise = new Promise((resolve, reject) => {
    if(true)
    {
        resolve(dosomething());
    }
    else{
        reject(dosomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("Error Occurred");
    console.log(err);
})