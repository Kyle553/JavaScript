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



async function data2 () {
  let username = await data1();
  username = username.sort((a, b) => a.length - b.length);

  console.log(username);

  // const search = window.prompt("");

  // while (search.length <= username.at(-1).length) {
  //   const high = username.at(-1).length;
  //   const low = username[0].length;
  //   const mid = username.at(-1).length / 2
  // }




}

data2()

// Як передати дані за межі async
