// GET =================================================================================
async function GET() { 
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=4", {method: "GET"})
    console.log("GET 1", response);
    const data = await response.json();
    console.log("GET 2",data);
  } catch (error) {
    console.log("GET 1 Помилка", error);
  }
}

GET();

fetch(`https://api.thedogapi.com/v1/images/search`, {method: "GET"})
  .then(response => {
    console.log("GET 3", response);
    return response.json();
  })
  .then(data => console.log("GET 4", data))
  .catch(error => console.log("GET 2 Помилка", error));

// POST =================================================================================
async function POST() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "TEXT1",
        body: "TEXT2",
        userId: 12
      })
    });
    console.log("POST 5", response);
    const data = await response.json();
    console.log("POST 6", data);
  } catch (error) {
    console.log("POST 3 Помилка", error);
  }
}

POST();

// DELETE =================================================================================
fetch("https://jsonplaceholder.typicode.com/posts/55", {method: "DELETE"})
.then((response) => {
  if (!response.ok) {
    console.log(response.status);
  } else {
    console.log("DELETE 7", response);
    return response;
  }
})
.catch(error => console.error("DELETE 4 Помилка", error));

// PUT =================================================================================
fetch("https://jsonplaceholder.typicode.com/posts/20", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "TEXT1",
    body: "TEXT2",
    userId: 12
  })
})
  .then(response => {return response.json()})
  .then(data => console.log("PUT 8", data))
  .catch(error => console.error("PUT 5 Помилка", error));