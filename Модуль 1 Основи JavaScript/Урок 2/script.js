// Прописуєм значення змінним
let type1_string = "Text";
let type1_number = 10;
let type1_boolean = false;
let type1_undefined = undefined;
let type1_object = [1, 2, 3, 4, 5];
let type1_null = null;
let type1_symbol = Symbol("symbol");
let type1_bigint = BigInt(1234567890123456789012345678901234567890);
let fun1 = function() {return 1 + 1};

// Виводим значення змінних в консоль
console.log("%cLET", "font-size: 25px; font-weight: bold;");
console.log("%cЗначення змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type1_string, type1_number, type1_boolean, type1_undefined, type1_object, type1_null, type1_symbol, type1_bigint, fun1(), ("\n\n"));

// Виводим тип змінних в консоль
console.log("%cТип змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(("type1_string -"), typeof type1_string);
console.log(("type1_number -"), typeof type1_number); 
console.log(("type1_boolean -"), typeof type1_boolean);
console.log(("type1_undefined -"), typeof type1_undefined);
console.log(("type1_object -"), typeof type1_object);
console.log(("type1_null -"), typeof type1_null, ("Empty object = 0 / null = 0 / no value or empty space"));
console.log(("type1_symbol -"), typeof type1_symbol);
console.log(("type1_bigint -"), typeof type1_bigint);
console.log(("fun1 -"), typeof fun1);

// Змінюєм значення змінних
type1_string = "TEXT";
type1_number = 22;
type1_boolean = true;
// type1_undefined                         - значення не змінне 
type1_object = [5, 5, 5, 5, 5];
// type1_null                              - значення не змінне 
type1_symbol = Symbol("SYMBOL");
type1_bigint = BigInt(555555555555555);
fun1 = function() {return 5 + 5};

// Виводим оновлені значення в консоль
console.log("\n %cОновлені значення змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type1_string, type1_number, type1_boolean, type1_undefined, type1_object, type1_null, type1_symbol, type1_bigint, fun1());


// Прописуєм значення змінним
const type2_string = "Text";
const type2_number = 10;
const type2_boolean = false;
const type2_undefined = undefined;2
const type2_object = [1, 2, 3, 4, 5];
const type2_null = null;
const type2_symbol = Symbol("symbol");
const type2_bigint = BigInt(1234567890123456789012345678901234567890);
const fun2 = function() {return 1 + 1};

// Виводим значення змінних в консоль
console.log("%cCONST", "font-size: 25px; font-weight: bold;");
console.log("%cЗначення змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type1_string, type1_number, type1_boolean, type1_undefined, type1_object, type1_null, type1_symbol, type1_bigint, fun1(), ("\n\n"));

// Виводим текс в консоль
console.log("%cТип змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(("type_string -"), typeof type2_string);
console.log(("type_number -"), typeof type2_number); 
console.log(("type_boolean -"), typeof type2_boolean);
console.log(("type_undefined -"), typeof type2_undefined);
console.log(("type_object -"), typeof type2_object);
console.log(("type_null -"), typeof type2_null, ("Empty object = 0 / null = 0 / no value or empty space"));
console.log(("type_symbol -"), typeof type2_symbol);
console.log(("type_bigint -"), typeof type2_bigint);
console.log(("fun2 -"), typeof fun2);

// Змінюєм значення змінних
// type2_string = "TEXT";                  - Значення самої змінної не змінюється
// type2_number = 22;                      - Значення самої змінної не змінюється
// type2_boolean = true;                   - Значення самої змінної не змінюється
// type2_undefined                         - Значення самої змінної не змінюється
type2_object[0] = 100;
// type2_null                              - Значення самої змінної не змінюється
// type2_symbol = Symbol("aaaaaaaaa");     - Значення самої змінної не змінюється
// type2_bigint = BigInt(111111111111111); - Значення самої змінної не змінюється
// fun2 = function() {return 50 + 50;};    - Значення самої змінної не змінюється

// Виводим оновлені значення в консоль
console.log("%c\n Оновлені значення змінної:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type2_object);


// Прописуєм значення змінним
var type3_string = "Text";
var type3_number = 10;
var type3_boolean = false;
var type3_undefined = undefined;
var type3_object = [1, 2, 3, 4, 5];
var type3_null = null;
var type3_symbol = Symbol("symbol");
var type3_bigint = BigInt(1234567890123456789012345678901234567890);
var fun3 = function() {return 1 + 1};

// Виводим значення змінних в консоль
console.log("%cVAR", "font-size: 25px; font-weight: bold;");
console.log("%cЗначення змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type3_string, type3_number, type3_boolean, type3_undefined, type3_object, type3_null, type3_symbol, type3_bigint, fun3(), ("\n\n"));

// Виводим текс в консоль
console.log("%cТип змінних:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(("type_string -"), typeof type3_string);
console.log(("type_number -"), typeof type3_number); 
console.log(("type_boolean -"), typeof type3_boolean);
console.log(("type_undefined -"), typeof type3_undefined);
console.log(("type_object -"), typeof type3_object);
console.log(("type_null -"), typeof type3_null, ("Empty object = 0 / null = 0 / no value or empty space"));
console.log(("type_symbol -"), typeof type3_symbol);
console.log(("type_bigint -"), typeof type3_bigint);
console.log(("fun2 -"), typeof fun3);

// Змінюєм значення змінних
type3_string = "TEXT";                  
type3_number = 22;                    
type3_boolean = true;                   
type3_undefined                         
type3_object[0] = 100;
type3_null                              
type3_symbol = Symbol("aaaaaaaaa");     
type3_bigint = BigInt(111111111111111); 
fun3 = function() {return 50 + 50;};    

// Виводим оновлені значення в консоль
console.log("%c\n Оновлені значення змінної:", "font-size: 15px; color: gray; font-weight: bold;");
console.log(type3_object);
