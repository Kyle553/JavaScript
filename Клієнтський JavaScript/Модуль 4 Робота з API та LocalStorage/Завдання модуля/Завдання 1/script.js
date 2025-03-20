fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})
  .then(response => {
    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));