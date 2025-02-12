Array.prototype.srt = function() {
  this.sort((a, b) => parseInt(a) - parseInt(b));
};

let proto1 = {
  str1: "3 6 33 856",
  str2: "21 0 67 22"
};

let proto2 = {
  str3: "123 34 658",
  str4: "10 99 864 58 120"
};

let obj1 = Object.create(proto1);
let obj2 = Object.create(proto2);

// console.log(obj1.__proto__, "\n", obj2.__proto__);

let arr1 = obj1.str1.concat(" ", obj1.str2).split(" ");
let arr2 = obj2.str3.concat(" ", obj2.str4).split(" ");

// console.log(arr2);
// console.log(arr1);

let arr3 = new Array(...arr1, ...arr2);
arr3.srt();

console.log(arr3.join(" "));