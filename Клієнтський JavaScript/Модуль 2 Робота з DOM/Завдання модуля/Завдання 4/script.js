document.body.style.backgroundColor = "rgb(145, 143, 143)"

const form = document.createElement("form");
document.body.appendChild(form);

const input = document.createElement("input");
input.setAttribute("type", "text");
form.appendChild(input);

const btn = document.createElement("button");
btn.textContent = "Натисни"
document.body.appendChild(btn);

const p = document.createElement("p");
document.body.appendChild(p);

btn.addEventListener("click", () => {
 p.textContent = input.value;
});