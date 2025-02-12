const readline = require("readline"); // require("readline") — підключає вбудований в Node.js модуль readline для роботи з введенням та виведенням у терміналі

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let savedpassword = "";

// Відкриваємо інтерфейс
// Метод — це функція, яка прив'язана до об'єкта readline.Interface
rl.question("Придумайте пароль: ", function(saved) {
  savedpassword = saved;  
  console.log("Ваш пароль збережено");
  
  rl.question("Введіть пароль: ", function(password) {
    if (savedpassword === password) {
      console.log("Ви ввели правильний пароль");
    } else {
      console.log("Ви ввели неправильний пароль");
    }
    rl.close();  // Закриваємо інтерфейс після перевірки
  });
});
