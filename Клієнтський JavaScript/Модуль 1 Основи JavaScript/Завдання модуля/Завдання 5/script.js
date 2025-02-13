const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("", function (value) {
    value = value.trim().split(/\s+/).map(Number).sort((a, b) => a - b);
    console.log("Всі числа: \n", value);

    quantity = value.length;
    console.log("Кількість чисел:" ,quantity);

    const sum = value.reduce((sum, nArr) => sum + nArr, 0);
    console.log("Сума чисел:" ,sum);

    result = sum / quantity;
    console.log("Середнє арифметичне:", result);

    rl.close();
  });
};

console.log("Введіть числа через пробіл щоб дізнатися середнє арифметичне:");
askQuestion();