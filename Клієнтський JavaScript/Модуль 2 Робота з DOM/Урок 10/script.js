// SCROLL =======================================================
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");

div1.addEventListener("scroll", () => {
  const scrl = div1.scrollTop;

  if (scrl === 0) {
    div2.style.backgroundColor = "rgb(189, 153, 153)";
  } else if (scrl > 0 && scrl < 477) {
      div2.style.backgroundColor = "rgb(165, 179, 90)";
    } else if (scrl >= 577) {
        div3.style.backgroundColor = "rgb(172, 164, 164)";
      } else if (scrl > 477 && scrl < 577) {
          div3.style.backgroundColor = "rgb(70, 31, 31)";
        }

  console.clear();
  console.log(div1.scrollTop);
});

// BLUR =======================================================
const text1 = document.querySelector(".text1");

text1.addEventListener("blur", () => {
  text1.style.backgroundColor = "rgb(0, 0, 0)";
});

// FOCUS =======================================================
const text2 = document.querySelector(".text2");

text2.addEventListener("focus", () => {
  text2.style.backgroundColor = "rgb(141, 136, 136)";
});

// FOCUSIN =======================================================
const focusin1 = document.querySelector(".focusin1");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

focusin1.addEventListener("focusin", (e) => {
  if (e.target === input1) {
    input1.style.backgroundColor = "rgb(0, 0, 0)";
  } else if (e.target === input2) {
      input2.style.backgroundColor = "rgb(0, 0, 0)";
    } else {
        input3.style.backgroundColor = "rgb(0, 0, 0)";
      }
});

// FOCUSOUT =======================================================
const focusin2 = document.querySelector(".focusin2");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const input6 = document.querySelector(".input6");

focusin2.addEventListener("focusout", (e) => {
  if (e.target === input4) {
    input4.style.backgroundColor = "rgb(0, 0, 0)";
  } else if (e.target === input5) {
      input5.style.backgroundColor = "rgb(0, 0, 0)";
    } else {
        input6.style.backgroundColor = "rgb(0, 0, 0)";
      }
});

// CHANGE =======================================================
const ch1 = document.querySelector(".ch1");

ch1.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    ch1.style.width = "100px"
  } else {
      ch1.style.width = "20px"
    }
});

// CONTEXTMENU =======================================================
const conm = document.querySelector(".div4");

conm.addEventListener("contextmenu", (e) => {
  conm.style.backgroundColor = "rgb(238, 233, 233)";
  conm.style.color = "black";
  e.preventDefault();
});

// DRAG AND DROP =======================================================
const div6 = document.querySelector(".div6");
const div7 = document.querySelector(".div7");
 
div6.addEventListener("dragenter", () => {
  div6.style.backgroundColor = "rgb(0, 0, 0)";
});

div6.addEventListener("dragleave", () => {
  div6.style.backgroundColor = "rgb(51, 51, 51)";
});

div6.addEventListener("dragover", (e) => {
  e.preventDefault();
  div6.textContent = "Дозволяє перемістити";  
});




// .textContent = "Перетягни сюди"; .pageX
// СКРОЛ 574
























































// const style = document.createElement("style");
// style.textContent = `
//   * {
//     margin: 0;
//     padding: 0;
//   }

//   body {
//     background-color: rgb(92, 91, 91);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 5px;
//     gap: 5px;
//     user-select: none;
//   }

//   .inp {
//     text-align: center;
//   }

//   .str {
//     color: white;
//   }
   
//   .dv {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 150px;
//     height: 100px;
//     background-color: rgb(41, 41, 41);
//     margin: 5px;
//   }
  
//   .btn2 {
//     background-color: rgb(228, 229, 229);
//     border: none;
//     color: rgb(0, 0, 0);
//   }
// `;
// document.body.appendChild(style);

// const btn1 = document.createElement("button");
// btn1.textContent = "Натисніть";
// document.body.appendChild(btn1);

// const input = document.createElement("input");
// input.type ="text";
// input.placeholder = "Введіть текст";
// input.classList.add("inp");
// input.style.display = "none";
// document.body.appendChild(input);

// const p = document.createElement("p");
// p.classList.add("str");
// p.style.display = "none";
// document.body.appendChild(p);

// const div = document.createElement("div");
// div.classList.add("dv");
// document.body.appendChild(div);

// const btn2 = document.createElement("button");
// btn2.textContent = "Натисніть";
// btn2.classList.add("btn2");
// div.appendChild(btn2);

// btn1.addEventListener("click", () => {
//   if (btn1.textContent === "НАТИСНУТО!") {
//     btn1.textContent = "Натисніть";
//   } else {
//       btn1.textContent = "НАТИСНУТО!";
//     }

//   if (input.style.display === "none" && p.style.display === "none") {
//     input.style.display = "block";
//     p.style.display = "block";
//   } else {
//       input.style.display = "none";
//       p.style.display = "none";
//     }
// });

// input.addEventListener("input", (event) => {
//   p.textContent = event.target.value;
// });

// div.addEventListener("click", () => {
//   if (style.textContent.includes("background-color: rgb(41, 41, 41);") === true) {
//     style.textContent = style.textContent.replace("background-color: rgb(41, 41, 41);", "background-color: rgb(229, 229, 229);");
//   } else {
//       style.textContent = style.textContent.replace("background-color: rgb(229, 229, 229);", "background-color: rgb(41, 41, 41);");
//     }
// });

// btn2.addEventListener("click", (event) => {
//   if (style.textContent.includes("background-color: rgb(228, 229, 229);") === true) {
//     style.textContent = style.textContent.replace("rgb(0, 0, 0)", "rgb(228, 228, 229)");
//     style.textContent = style.textContent.replace("background-color: rgb(228, 229, 229);", "background-color: rgb(43, 40, 40);");
//   } else {
//       style.textContent = style.textContent.replace("rgb(228, 228, 229)", "rgb(0, 0, 0)");
//       style.textContent = style.textContent.replace("background-color: rgb(43, 40, 40);", "background-color: rgb(228, 229, 229);");
//     }
//   event.stopPropagation();
// });




