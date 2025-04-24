// EVENT LOOP ==============================
console.log(1);

setTimeout(() => {
  console.log(2);
}, 10);

new Promise ((resolve, reject) => {
  console.log(3);
  reject(4); 
})
  .then(() => {console.log(5)})
  .catch(() => {console.log(6)})
  .then(() => {console.log(7)});

setTimeout(() => {
  console.log(8); 
}, 0);

console.log(9);

//1 3 9 6 7 8 2

// 1 - synchronous code > call stack 
// 3 - synchronous code > call stack 
// 9 - synchronous code > call stack 

// callback queue / microtask queue
// 6 - asynchronous code > callback queue > call stack 
// 7 - asynchronous code > callback queue > call stack 

// web apis / task queue / macrotask queue
// 8 - asynchronous code > web apis > callback queue > call stack 
// 2 - asynchronous code > web apis > callback queue > call stack 
