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

const carInfo = new Car("Toyota", "Camry", 2023)
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