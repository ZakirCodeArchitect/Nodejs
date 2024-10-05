console.log("Start operation");

function sleep(milliseconds){
    console.log("operation is running");
    setTimeout(() => {
        console.log("operation is done");
    },milliseconds);
}

sleep(1000)

console.log("do something else...");


// here this is done asynchronously becuase it'll not wait for the setTimout to complete its execution it'll go the next and comeback when the execution of the setTimout is completed.
