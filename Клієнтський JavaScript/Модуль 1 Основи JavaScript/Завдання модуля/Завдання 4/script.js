// Напишіть програму, яка запитує у користувача три числа і визначає найбільше.
// щоб функція могла приймати скільки завгодно чисел і визначити з них найбільше 
const readline = require("readline"); // require("readline") — підключає вбудований в Node.js модуль readline для роботи з введенням та виведенням у терміналі

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

function askQuestion() {
  rl.question("Введіть число: ", function (value) {
    // let regex = /^[\d]+$/
    // зробити щоб пропуськало тільки цифри 
    // і щоб записувались цифри
    if (value.toLowerCase() === "stop") {
      if (arr.length === 0) {
        console.log("Ви не ввели жодного числа");
        rl.close();
      } else {
        console.log("Ваші числа:", arr);
        rl.close();
      }
    } else if (value.trim() === "") {
        askQuestion();
      } else {
        arr.push(value.trim());
        askQuestion();
      }
  });
};

console.log("Щоб закрити інтерфейс вводу напишіть stop")
askQuestion();

