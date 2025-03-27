// createUserName =================================================================================================================
async function createUserName () {
  try {
    const response = await fetch("http://127.0.0.1:5173/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: `${inpText}`
      })
    })
    const data = await response.json();
    localStorage.setItem("FD_ID", `${data.id}`);
    console.log(data);
    
  } catch (error) {
      console.error(`CATCH ERROR: `, error.message)
  }
}

// POST_MSG =================================================================================================================
async function POST_MSG () {
  try {
    const response = await fetch("http://127.0.0.1:5173/msg", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: `${FD_ID}`,
        msg: `${inpText}`
      })
    })
    const data = await response.json();
    localStorage.setItem("LAST_MSG", `${data.msg}`);
    localStorage.setItem("LAST_ID_MSG", `${data.id}`);
    localStorage.setItem("LAST_DATE_MSG", `${data.date}`);

    console.log(data);
    
  } catch (error) {
      console.error(`CATCH ERROR: `, error.message)
  }
}

// GET_LAST_MSG =================================================================================================================
async function GET_LAST_MSG () {
  try {
    const response = await fetch("http://127.0.0.1:5173/msg", {
      method: "GET"})
    if (!response.ok) {
      throw new Error(`CODE ERROR: ${response.status}`);
    } 

    const data = await response.json();
    console.log(data);

    const all_msg = data.map((data) => ({
      username: data.user.username,
      msg_id: data.id,
      msg: data.msg,
      date: data.date
    }));

    return all_msg;

  } catch (error) {
      console.error(`CATCH ERROR: `, error.message)
  }
};
// setInterval(() => {
//   GET_LAST_MSG();
  
// }, 5000);

// GET_USER =================================================================================================================

async function GET_USER () {
  try {
    const response = await fetch(`http://127.0.0.1:5173/user/${localStorage.getItem("FD_ID")}`, {
      method: "GET"})
    if (!response.ok) {
      throw new Error(`CODE ERROR: ${response.status}`);
    } 

    const data = await response.json();
    console.log("USER: ", data);

    inp1.placeholder = "Введіть текст";
    inp1.value = "";
    if (data.code) {
      return await createUserName();
    }
  } catch (error) {
      console.error(`CATCH ERROR: `, error.message)
  }
};


// input ===================================================================================== 
const inp1 = document.querySelector(".inp");

let inpText = "";
inp1.addEventListener("input", (e) => {
  inpText = e.target.value;
});

let div1 = document.querySelector(".div1");

div1.addEventListener("click", async () => {
  await GET_USER();
  await POST_MSG();
  await GET_LAST_MSG();
  

});

let FD_ID = localStorage.getItem("FD_ID");

// // HISTORY_MSG ===================================================================================== 
// async function HISTORY_MSG () {
//   let all_msg = await GET_LAST_MSG();
//   let temp_all_msg = all_msg;





// };

// HISTORY_MSG();