let input1 = document.querySelector(".input1");

input1.value = `${localStorage.getItem("input_text_1") || ""}`;

input1.addEventListener("input", (e) => {
localStorage.setItem("input_text_1", `${e.target.value}`);
});
