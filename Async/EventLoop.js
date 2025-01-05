Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(1), 0);

queueMicrotask(() => {
    console.log(4);
    queueMicrotask(() => console.log(9))
});

console.log(1);


// console.log('Start');

// // async - macro task queue
// setTimeout(() => {
//   console.log('Task 1 - setTimeout');
// }, 0);

// // micro task queue -> have higher priority than macro task queue
// Promise.resolve().then(() => {
//   console.log('Task 2 - Promise');
// });

// // micro task queue
// console.log('End');
