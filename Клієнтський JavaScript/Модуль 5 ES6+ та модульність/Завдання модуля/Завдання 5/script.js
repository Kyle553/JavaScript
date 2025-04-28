class Counter {
  #count = 0;

  constructor () {
    
  }

  add ( value ) {
    this.#count += value;
    return this;
  }

  subtract ( value ) {
    this.#count -= value;
    return this;
  }

  info () {
    console.log("count =", this.#count);
    return this;
  }
}

let num = new Counter();
num.info().add(5).subtract(2).info();

