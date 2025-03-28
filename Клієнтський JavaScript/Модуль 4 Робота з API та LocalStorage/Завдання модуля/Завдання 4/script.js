async function data1 () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})

    if (!response.ok) {
      throw new Error(`CODE ERROR: ${response.status}`);
    } 
  
    let data = await response.json();
    
    return data.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    }));
  } catch (error) {
      console.error(`CATCH ERROR: ${error.message}`);
  }
}

const inp1 = document.querySelector(".inp");

let inpText = "";
inp1.addEventListener("input", (e) => {
  inpText = e.target.value;
});

const div1 = document.querySelector(".div1");
const username_info = document.querySelector(".username_info"); 

async function enter() {
  const data = await data1();
  
  function search (un) {
    for (let i = 0; i < data.length; i++) {
      if (un.toLowerCase() === data[i].username.toLowerCase()) {
        return data[i];
      }
    }
    return "Користувача не знайдено";
  };
  
  div1.addEventListener("click", async () => {
  username_info.textContent = `${JSON.stringify(search(inpText))}`;
  });
}

enter();