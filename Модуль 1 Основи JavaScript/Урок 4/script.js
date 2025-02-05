let arr = [];
let size = Math.floor(Math.random() * 101)

for (let i = 0; i < size; i++) {
arr.push(Math.floor(Math.random() * 101));
}

console.log(("Розмір Контейнера:"), size);

function sort() {
  arr.sort((a, b) => a - b);
  console.log(arr);
  console.log(("Мінімальне число:"), arr[0]);
}

sort();

// function sort() {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   console.log(arr[0], ("найменше"));
// }