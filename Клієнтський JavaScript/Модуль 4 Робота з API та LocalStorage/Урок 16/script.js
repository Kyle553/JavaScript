// GET =================================================================================
async function GET() { 
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    console.log("1", response);
    const data = await response.json();
    console.log("2",data);
  } catch (error) {
    console.log("1 Помилка", error);
  }
}

GET();

fetch(`https://api.thedogapi.com/v1/images/search`, {method: "GET"})
  .then(response => {
    console.log("3", response);
    return response.json();
  })
  .then(data => console.log("4", data))
  .catch(error => console.log("2 Помилка", error));

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
    console.log("5", response);
    const data = await response.json();
    console.log("6", data);
  } catch (error) {
    console.log("3 Помилка", error);
  }
}

POST();

// PUT =================================================================================
