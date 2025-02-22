document.body.style.backgroundColor = "rgb(145, 143, 143)"

const btn = document.createElement("button");
btn.textContent = "Натисни"
document.body.appendChild(btn);

btn.addEventListener("click", () => {
btn.textContent = "ЗМІНЕНО ТЕКСТ"
});