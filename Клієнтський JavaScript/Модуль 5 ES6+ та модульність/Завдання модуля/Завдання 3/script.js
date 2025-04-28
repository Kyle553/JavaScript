function closure () {
  let num = 2;

  return function (value) {
    value = num * value;
    num++;
    return value;
  }
}

const multiplication = closure();

for (let i = 0; i < 10; i++) {
  console.log(multiplication(4));
}

