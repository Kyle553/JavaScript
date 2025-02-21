const div = document.createElement("div");
div.classList.add("card")
div.textContent = ("Привіт, DOM!")
document.body.appendChild(div);

// ====================================================

const body = document.body;
body.style.backgroundColor = "rgb(145, 143, 143)"

// ====================================================

const btn = document.createElement("button");
btn.textContent = "Натисни"
document.body.appendChild(btn);

const p = document.createElement("p");
p.textContent = "ТЕКСТ"
document.body.appendChild(p);

btn.addEventListener("click", () => {
p.textContent = "Текст змінено!"
});

// ====================================================

const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
li1.textContent = "Один"
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.textContent = "Два"
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.textContent = "Три"
ul.appendChild(li3);

const btn2 = document.createElement("button");
btn2.textContent = `Видалити "Три"`
document.body.appendChild(btn2);

btn2.addEventListener("click", () => {
  ul.removeChild(li3);
  btn2.textContent = "Видалено";
});

// ====================================================

const ul2 = document.createElement("ul");
document.body.appendChild(ul2);

const li4 = document.createElement("li");
ul2.appendChild(li4);
const li5 = document.createElement("li");
ul2.appendChild(li5);
const li6 = document.createElement("li");
ul2.appendChild(li6);

const btn3 = document.createElement("button");
btn3.textContent = "Додати li";
document.body.appendChild(btn3);

btn3.addEventListener("click", () => {
  const newLi = document.createElement("li");
  ul2.appendChild(newLi);
});