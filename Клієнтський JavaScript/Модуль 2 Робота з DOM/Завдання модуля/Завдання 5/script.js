document.body.style.cssText = "background-color: rgb(145, 143, 143);";

const btn = document.createElement("button");
btn.textContent = "Натисни"
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  function color() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }

  const olddiv = document.querySelector("div");

  olddiv ? olddiv.remove() : null

  const div = document.createElement("div");
  div.style.cssText = `background-color: ${color()}; width: 100px; height: 100px; position: absolute;`;
  document.body.appendChild(div);
});