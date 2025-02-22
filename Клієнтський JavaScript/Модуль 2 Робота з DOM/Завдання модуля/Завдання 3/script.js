document.body.style.backgroundColor = "rgb(145, 143, 143)"

const li = document.querySelectorAll("li");

const btn = document.createElement("button");
btn.textContent = "Натисни"
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  li.forEach((node) => {
    node.textContent = "Новий текст"
  });
});