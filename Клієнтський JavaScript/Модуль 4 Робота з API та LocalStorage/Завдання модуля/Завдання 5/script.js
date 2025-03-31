const area = document.querySelectorAll(".area");

let save_text = "";

area.forEach((textarea) => {
  textarea.addEventListener("input", (event) => {
    textarea.style.height = textarea.scrollHeight + "px";

    save_text = textarea.value;
    localStorage.setItem(`${event.target.id}`, `${save_text}`);
  });
});

const check = document.querySelectorAll(".check");

// let save_checkbox = ""; ???

check.forEach((check) => {
  check.addEventListener("change", (event) => {
    save_checkbox = event.target.checked
    localStorage.setItem(`${event.target.id}`, `${save_checkbox}`);
  });
});

// Самовикликаюча функція для завантаження з localStorage