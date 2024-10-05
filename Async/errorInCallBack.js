function asyncTask(cb) {
    setTimeout(()=> {
        // cb("Error") -> Handling error
        cb(null, "This is data from the server")
    },0);
}

asyncTask((err, data) => {
    if(err)     // error first callback
    {
        throw err;
    }
    else{
        console.log("data", data);
    }
});