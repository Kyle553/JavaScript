async function url() {
  try {
    let int = Math.floor(Math.random() * 100) + 1;

    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${int}`, {method: "GET"});
    let data = await response.json();
    console.log(data);

    return data.body;
  } catch (error) {
      console.error(error);
  }
}

const div1 = document.querySelector(".div1");

div1.addEventListener("click", async () => {
  for(let i = 1; i <= 3; i++) {
    document.querySelector(`.li${i}`).textContent = `ДОПИС: ${await url()}`;
  }
})



