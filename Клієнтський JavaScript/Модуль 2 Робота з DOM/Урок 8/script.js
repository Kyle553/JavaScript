const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const li = {
  a: document.querySelector("ul li[data-id='1']"),
  b: document.querySelector("ul li[data-id='2']"),
  c: document.querySelector("ul li[data-id='3']")
};

const body = document.body;

const originalTitle = {
  a: title.textContent,
  b: btn.textContent,
  c1: li.a.textContent,
  c2: li.b.textContent,
  c3: li.c.textContent
};

title.addEventListener("mouseover", function () {
  title.textContent = "НОВИЙ ЗАГОЛОВОК";
});

title.addEventListener("mouseout", function () {
  title.textContent = originalTitle.a;
});

btn.addEventListener("click", function () {
  btn.textContent = "НОВИЙ ТЕКСТ";
  btn.style.color = "rgb(89, 228, 100)";
  btn.style.backgroundColor = "rgb(21, 151, 32)";

  setTimeout(function () {
    btn.textContent = originalTitle.b;
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
  }, 1000);
});

li.a.addEventListener("mouseover", function () {
  li.a.textContent = "Нове значення для елемента A";

  setTimeout(function () {
    li.a.textContent = originalTitle.c1;
  }, 3000); 
});

body.style.display = "flex"
body.style.flexDirection = "column"
body.style.backgroundColor = "rgb(172, 166, 166)"
btn.style.width = "100px"
btn.style.height = "40px"
btn.style.borderRadius = "4px"
btn.style.borderWidth = "0px"