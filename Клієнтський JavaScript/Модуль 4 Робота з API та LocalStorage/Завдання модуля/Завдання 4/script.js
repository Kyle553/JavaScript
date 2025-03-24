async function data1 () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})

    if (!response.ok) {
      throw new Error(`CODE ERROR: ${response.status}`);
    } 
  
    let data = await response.json();
    
    return data.map(data => data.username);
  } catch (error) {
      console.error(`CATCH ERROR: ${error.message}`);
  }
}



// async function data2 () {
//   let username = await data1();
//   username = username.sort((a, b) => a.length - b.length);

//   console.log(username);

//   const search = window.prompt("");

//   const high = username.at(-1).length;
//   const low = username[0].length;
//   const mid = low + (high - low) / 2

//   while (low <= high) {

//     if (mid === search.length) {
//       if () {

//       }
//     } else if ((search.length > mid) && (search.length <= high)) {
//         low = mid++
//         mid = low + (high - low) / 2
//     } else if ((search.length < mid) && (search.length >= low)) {
//         high = mid--
//         mid = low + (high - low) / 2
//     }

    
//   }
//   // 1 2 3 4 5 6 7 8 9 10



// }

// data2()

// Як передати дані за межі async
