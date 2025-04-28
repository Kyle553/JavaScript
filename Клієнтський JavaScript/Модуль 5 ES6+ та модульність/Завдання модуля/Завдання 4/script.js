// CLASS ==============================================================================
class NewMap {
  constructor ( array ) {
    this.array = array;
  }

  newMap ( callback ) {
    const resulst = [];
    for (let i = 0; i < this.array.length; i++) {
      resulst.push(callback( this.array[i], i, this.array ))
    }
    return resulst;
  }
}

const arr1 = new NewMap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Class:\n", arr1.array);

const arr2 = arr1.newMap(( element, index ) => element * index);
console.log(arr2);

// PROTOTYPE ==========================================================================
Array.prototype.myMap = function ( callback ) {
  const resulst = [];
  for (let i = 0; i < this.length; i++) {
    resulst.push(callback( this[i], i, this ))
  }
  return resulst;
};

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr4 = arr3.myMap(( element ) => element * 2)
console.log("Prototype:\n", arr4);