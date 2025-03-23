async function data () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"});
    if (!response.ok) {
      throw new Error(`CODE ERROR: ${response.status}`);
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`CATCH ERROR: ${error.message}`);
  }
}

async function posts() {
  const posts = await data();

  posts.forEach(data => {
    const div1 = document.createElement("div");
    div1.classList.add("div_style");

    const span1 = document.createElement("span");
    span1.classList.add("span_style");
    span1.textContent = `userID: ${data.userId} | postID: ${data.id}`

    const p1 = document.createElement("p");
    const span2 = document.createElement("span");
    span2.classList.add("span_style");
    span2.textContent = `TITLE:`;
    p1.append(span2, ` ${data.title}`);
  
    const p2 = document.createElement("p");
    const span3 = document.createElement("span");
    span3.classList.add("span_style");
    span3.textContent = `BODY:`;
    p2.append(span3, ` ${data.body}`);

    div1.append(span1, p1, p2);
    document.body.append(div1);
  });
}

posts();