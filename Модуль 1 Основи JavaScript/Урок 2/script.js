// Прописуєм значення змінним
let type = {
  string: "Text",
  number: 10,
  boolean: false,
  undefined: undefined,
  object: [1, 2, 3, 4, 5],
  null: null,
  symbol: Symbol("symbol"),
  bigint: BigInt(1234567890123456789012345678901234567890)
};
let fun = {  
  ["function"]: function() {return 1 + 1;}
};

// Виводим текс в консоль
console.log(("type.string -"), typeof type.string);
console.log(("type.number -"), typeof type.number); 
console.log(("type.boolean -"), typeof type.boolean);
console.log(("type.undefined -"), typeof type.undefined);
console.log(("type.object -"), typeof type.object);
console.log(("type.null -"), typeof type.null, ("Empty object = 0 / null = 0 / no value or empty space"));
console.log(("type.symbol -"), typeof type.symbol);
console.log(("type.bigint -"), typeof type.bigint);
console.log(("fun[`function`] -"), typeof fun["function"]);

// Змінюєм значення змінних
type.string = "TEXT";
type.number = 22;
type.boolean = true;
// type.undefined - значення не змінне 
type.object = [5, 5, 5, 5, 5];
// type.null - значення не змінне 
type.symbol = Symbol("SYMBOL");
type.bigint = BigInt(555555555555555);
fun["function"] = function() {return 5 + 5;};

// Виводим оновлені значення в консоль
console.log(type, ("function:"), fun["function"]());