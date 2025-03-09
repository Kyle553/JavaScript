new Promise((resolve, reject) => {
  setTimeout(() => resolve(true), 3000);
})

.then(() => console.log("Пройшло 3 секунди."))
.finally(() => console.log("Проміс виконаний."));