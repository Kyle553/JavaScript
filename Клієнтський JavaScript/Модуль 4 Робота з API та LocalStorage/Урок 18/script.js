// LocalStorage =========================================================
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const p1 = document.querySelector(".p1");

let count1 = Number(localStorage.getItem("local_num")) || 0;
p1.textContent = `${count1}`;

div1.addEventListener("click", () => {
  count1--;
  p1.textContent = `${count1}`;
  localStorage.setItem("local_num", `${count1}`);
});

div2.addEventListener("click", () => {
  count1++;
  p1.textContent = `${count1}`;
  localStorage.setItem("local_num", `${count1}`);
});

// SessionStorage =========================================================
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const p2 = document.querySelector(".p2");

let count2 = Number(sessionStorage.getItem("session_num")) || 0;
p2.textContent = `${count2}`;

div3.addEventListener("click", () => {
  count2--;
  p2.textContent = `${count2}`;
  sessionStorage.setItem("session_num", `${count2}`);
});

div4.addEventListener("click", () => {
  count2++;
  p2.textContent = `${count2}`;
  sessionStorage.setItem("session_num", `${count2}`);
});