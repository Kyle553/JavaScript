// КЛАСИ ========================================================================================================
//===============================================================================================================
class Car {
  constructor ( make, model, year ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info () {
    console.log(`Про автомобіль: \n Марка: ${this.make} \n Модель: ${this.model} \n Рік: ${this.year}`);
  }
}

const carInfo = new Car("Toyota", "Camry", 2023);
carInfo.info();

// наслідування ====================================================
class ElectricCar extends Car {
  constructor ( make, model, year, batteryLife ) {
    super( make, model, year );
    this.batteryLife = batteryLife;
  }

  charge () {
    super.info();
    console.log(` Заряд: ${this.batteryLife}%`);
  }
}

const electricCar = new ElectricCar("Nissan", "Leaf", 2023, 98);
electricCar.charge();

// наслідуваний клас без конструктора ====================================================
class SecondElectricCar extends ElectricCar {
  // JS автоматично створить метод constructor() з властивостями і методами батьківського конструктора
}

const secondElectricCar = new SecondElectricCar("Nissan", "Leaf", 2023, 73);
secondElectricCar.charge();

// ІНКАПСУЛЯЦІЯ =================================================================================================
//===============================================================================================================
class Wallet {
  #money = 0; // приватне поле

  constructor ( startingMoney ) {
    this.#money = startingMoney;
  }

  add ( amount ) {
    if (amount > 0) {
      this.#money += amount;
    }
  }

  getMoney () {
    return this.#money;
  }
}

const myWallet = new Wallet(200);
console.log(`${myWallet.getMoney()} грн`);

myWallet.add(300);
console.log(`${myWallet.getMoney()} грн`);

// ПОЛІМОРФІЗМ ==================================================================================================
//===============================================================================================================
// додавання ====================================================
class Addition {
  constructor ( number ) {
    this.number = number;
  }

  result () {
    return this.number + this.number;
  }
 }

 const five = new Addition(5);
 console.log(`Результат додавання = ${five.result()}`);

// множення ====================================================
class Multiplication extends Addition {
  constructor ( number ) {
    super( number );
  }

  result () {
    return this.number * this.number;
  }
}

const ten = new Multiplication(10);
console.log(`Результат множення = ${ten.result()}`);

// ділення ====================================================
class Division extends Addition {
  constructor ( number ) {
    super( number );
  }

  result () {
    return this.number / this.number;
  }
}

const twenty = new Division(20);
console.log(`Результат ділення = ${twenty.result()}`);

// АБСТРАКЦІЯ ===================================================================================================
//===============================================================================================================
class User {
  #password = null;

  constructor () {

  }

  setPassword ( newPassword ) {
    if (newPassword.toString().length > 6) {
      this.#password = newPassword.toString();
      console.log(`Новий пароль: ${this.#password}`);
    } else {
      console.log(`Пароль повинен бути довше 6 символів.`);
    }
  }

  login ( password ) {
    if (this.#password === password) {
      console.log(`Пароль вірний`);
      return true;
    } else {
      console.log(`Пароль не вірний`);
      return false;
    }
  }
}

const user = new User();
user.setPassword(`PASSWORD`);
user.login(`password`);
