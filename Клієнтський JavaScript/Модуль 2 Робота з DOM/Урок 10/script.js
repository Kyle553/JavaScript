
const style = document.createElement("style");
style.textContent = `
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgb(92, 91, 91);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    gap: 5px;
    user-select: none;
  }

  .inp {
    text-align: center;
  }

  .str {
    color: white;
  }
   
  .dv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100px;
    background-color: rgb(41, 41, 41);
    margin: 5px;
  }
  
  .btn2 {
    background-color: rgb(228, 229, 229);
    border: none;
    color: rgb(0, 0, 0);
  }
`;
document.body.appendChild(style);

const btn1 = document.createElement("button");
btn1.textContent = "Натисніть";
document.body.appendChild(btn1);

const input = document.createElement("input");
input.type ="text";
input.placeholder = "Введіть текст";
input.classList.add("inp");
input.style.display = "none";
document.body.appendChild(input);

const p = document.createElement("p");
p.classList.add("str");
p.style.display = "none";
document.body.appendChild(p);

const div = document.createElement("div");
div.classList.add("dv");
document.body.appendChild(div);

const btn2 = document.createElement("button");
btn2.textContent = "Натисніть";
btn2.classList.add("btn2");
div.appendChild(btn2);

btn1.addEventListener("click", () => {
  if (btn1.textContent === "НАТИСНУТО!") {
    btn1.textContent = "Натисніть";
  } else {
      btn1.textContent = "НАТИСНУТО!";
    }

  if (input.style.display === "none" && p.style.display === "none") {
    input.style.display = "block";
    p.style.display = "block";
  } else {
      input.style.display = "none";
      p.style.display = "none";
    }
});

input.addEventListener("input", (event) => {
  p.textContent = event.target.value;
});

div.addEventListener("click", () => {
  if (style.textContent.includes("background-color: rgb(41, 41, 41);") === true) {
    style.textContent = style.textContent.replace("background-color: rgb(41, 41, 41);", "background-color: rgb(229, 229, 229);");
  } else {
      style.textContent = style.textContent.replace("background-color: rgb(229, 229, 229);", "background-color: rgb(41, 41, 41);");
    }
});

btn2.addEventListener("click", (event) => {
  if (style.textContent.includes("background-color: rgb(228, 229, 229);") === true) {
    style.textContent = style.textContent.replace("rgb(0, 0, 0)", "rgb(228, 228, 229)");
    style.textContent = style.textContent.replace("background-color: rgb(228, 229, 229);", "background-color: rgb(43, 40, 40);");
  } else {
      style.textContent = style.textContent.replace("rgb(228, 228, 229)", "rgb(0, 0, 0)");
      style.textContent = style.textContent.replace("background-color: rgb(43, 40, 40);", "background-color: rgb(228, 229, 229);");
    }
  event.stopPropagation();
});



