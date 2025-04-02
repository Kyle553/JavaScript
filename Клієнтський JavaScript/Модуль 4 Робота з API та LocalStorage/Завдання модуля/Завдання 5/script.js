const area = document.querySelectorAll(".area");

area.forEach((textarea) => {
  let local_save_text = localStorage.getItem(`${textarea.id}`) || ``;
  textarea.value = local_save_text;
  
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.addEventListener("input", (event) => {
    textarea.style.height = "min-content";
    textarea.style.height = textarea.scrollHeight + "px";

    let save_text = "";
    save_text = textarea.value;
    localStorage.setItem(`${event.target.id}`, `${save_text}`);
  });
});

const check = document.querySelectorAll(".check");

check.forEach((check) => {
  let local_save_checkbox = JSON.parse(localStorage.getItem(`${check.id}`) || false);
  check.checked = local_save_checkbox;
  
  check.addEventListener("change", (event) => {
    let save_checkbox = "";
    save_checkbox = event.target.checked
    localStorage.setItem(`${event.target.id}`, `${save_checkbox}`);
  });
});