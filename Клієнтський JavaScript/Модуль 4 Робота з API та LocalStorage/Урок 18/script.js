// LocalStorage =========================================================
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const p1 = document.querySelector(".p1");

let count = parseInt(localStorage.getItem("num")) || 0;
p1.textContent = `${count}`;

div1.addEventListener("click", () => {
  count--
  p1.textContent = `${count}`;
  localStorage.setItem("num", `${count}`);
});

div2.addEventListener("click", () => {
  count++
  p1.textContent = `${count}`;
  localStorage.setItem("num", `${count}`);
});

console.log(localStorage.getItem("num"));

// SessionStorage =========================================================
