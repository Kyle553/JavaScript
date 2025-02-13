const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("", function (value) {
    value = value.trim().split(/\s+/);
    console.log("Ваші числа: \n", value.map(Number).sort((a, b) => a - b));
    const maxNum = Math.max(...value);
    console.log("Найбільше число:", maxNum);

    rl.close();
  });
};

console.log("Введіть числа через пробіл:");
askQuestion();