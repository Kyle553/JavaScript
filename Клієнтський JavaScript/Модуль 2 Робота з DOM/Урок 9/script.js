const style = document.createElement("style");
document.body.appendChild(style);
const btn = document.querySelector(".btn1");
btn.classList.add(`btn2`);
const Tshirt = document.querySelector(".t-shirt");
const img = document.querySelector("img"); 

style.textContent = `
  body {
    background-color: rgb(120, 122, 120);
  }

  .btn1 {
    width: 110px;
    height: 30px;
    border-radius: 50px;
    border-width: 0px;
  }

  .btn2 {
  width: 110px;
  height: 30px;
  border-radius: 50px;
  border-width: 0px;
  background-color: rgb(69, 223, 69);
  font-weight: 700;
  }

  img {
  width: 300px;
  height: 300px;
  }
`;

btn.addEventListener("click", () => {
  btn.classList.toggle(`btn2`);
});

Tshirt.addEventListener("click", () => {
  if (img.style.display === "none" ) {
    img.style.display = "block"
  } else
      img.style.display = "none"
});