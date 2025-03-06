const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let loading = Math.random() > 0.5;
    if (loading) {
      resolve(true);
    } else {
      reject(false);
    }
  }, 3000);
});

pr1
  .then(result => console.log(true))
  .catch(error => console.log(false))
  .finally(() => console.log("Finally1"));

new Promise((resolve) => {
  setTimeout(() => resolve(5), 1000);
})

.then(num1 => num1 * 2)
.then(num2 => num2 * 2)
.then(num3 => num3 * 2)
.then(num4 => console.log(num4))
.finally(() => console.log("Finally2"));