function color() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

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
    ch1.style.width = "100px";
  } else {
      ch1.style.width = "20px";
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
const ptext1 = document.querySelector(".ptext1");
const ptext2 = document.querySelector(".ptext2");
const ptext3 = document.querySelector(".ptext3");
const ptext4 = document.querySelector(".ptext4");

// dragenter
div6.addEventListener("dragenter", (e) => {
  ptext1.textContent = `"${e.type}" Елемент зайшов в drop zone`;
});

// dragleave
div6.addEventListener("dragleave", (e) => {
  div6.style.backgroundColor = "rgb(51, 51, 51)";
  ptext1.textContent = `"${e.type}" Елемент ВИЙШОВ з drop zone`;
  ptext2.textContent = `"dragover" НЕ Працює`;
  div6.textContent = "Перетягни сюди";
});

// dragover
div6.addEventListener("dragover", (e) => {
  e.preventDefault();
  div6.textContent = "Дозволяє перемістити";  
  ptext2.textContent = `"${e.type}" Працює`;

  div6.style.cssText = `background-color: ${color()};`;
});

// drop
div6.addEventListener("drop", (e) => {
  ptext3.textContent = `"${e.type}" Елементи "скинуто"`;
  setTimeout(() => {
    ptext3.textContent = ""
  }, 4000);

  ptext2.textContent = `"dragover" НЕ Працює`;
});

// dragstart
div7.addEventListener("dragstart", (e) => {
  ptext4.textContent = `"${e.type}" Почав перетягувати елемент`;
});

// dragend
div7.addEventListener("dragend", (e) => {
  ptext4.textContent = `"${e.type}" ЗАКІНЧИВ перетягувати елемент`;
});

// FULLSCREENCHANGE =======================================================
const full = document.fullscreenElement;
const div8 = document.querySelector(".div8");

div8.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
      document.documentElement.requestFullscreen();
    }
});

// KEY =======================================================
const div9 = document.querySelector(".div9");
const ptext5 = document.querySelector(".ptext5");
const ptext6 = document.querySelector(".ptext6");
const ptext7 = document.querySelector(".ptext7");

// keydown
document.documentElement.addEventListener("keydown", (e) => {
  ptext5.textContent = `Натиснуто на: ${e.code} - "${e.key}"`;
});

// keyup
document.documentElement.addEventListener("keyup", (e) => {
  ptext6.textContent =`Віджато клавішу: ${e.code} - "${e.key}"`;
});

// keypress
document.documentElement.addEventListener("keypress", (e) => {
  ptext7.textContent =`Застарілий трігер натискання на клавішу: ${e.code} - "${e.key}"`;
});

// LOAD =======================================================
const ptext8 = document.querySelector(".ptext8");

window.addEventListener("load", () => {
  ptext8.textContent = "Вкладка завантажилась повністю";
});

// MOUS =======================================================
const div10 = document.querySelector(".div10");
const div11 = document.querySelector(".div11");
const div12 = document.querySelector(".div12");
const div13 = document.querySelector(".div13");

// mousedown
div11.addEventListener("mousedown", () => {
  div11.style.cssText = `background-color: ${color()};`;
  div11.textContent = "Мишка затиснута";
});

// mouseup
div11.addEventListener("mouseup", () => {
  div11.style.cssText = `background-color: ${color()};`;
  div11.textContent = "Мишка відтиснута";
});

// click
// div11.addEventListener("click", () => {
//   div11.style.cssText = `background-color: ${color()};`;
//   div11.textContent = "Натиснуто";
// });

// mousemove
div11.addEventListener("mousemove", () => {
  div11.style.cssText = `background-color: ${color()};`;
});

// mouseenter
div11.addEventListener("mouseenter", () => {
  div11.textContent = "Мишка зайшла";
});

// mouseleave
div11.addEventListener("mouseleave", () => {
  div11.textContent = "Мишка вийшла";
});

// mouseover
div10.addEventListener("mouseover", (e) => {
  div11.style.cssText = `background-color: ${color()};`;
  div11.textContent = `Мишка ${e.type}`;
});

// mouseout
div10.addEventListener("mouseout", (e) => {
  div11.style.cssText = `background-color: ${color()};`;
  div11.textContent = `Мишка ${e.type}`;
});

// dblclick
div11.addEventListener("dblclick", () => {
  div11.textContent = "Подвійне натискання";
});

// wheel
window.addEventListener("wheel", () => {
  div13.style.cssText = `background-color: ${color()};`;
});

// WINDOW =======================================================
// online
window.addEventListener("online", () => {
  console.log("Online");
});

// offline
window.addEventListener("offline", () => {
  console.log("Offline");
});

// beforeunload не спрацьовує
window.addEventListener("beforeunload", (e) => {
  e.returnValue = "";
  // e.defaultPrevented();
});

// resize
window.addEventListener("resize", () => {  
  console.clear();
  console.log(`Видима ширина вікна браузера: ${window.innerWidth}; \nВидима висота вікна браузера: ${window.innerHeight};`);
});

// TOUCH =======================================================
const div14 = document.querySelector(".div14");
const ptext9 = document.querySelector(".ptext9");

// touchstart
window.addEventListener("touchstart", (e) => {
  div14.style.cssText = `background-color: ${color()};`;
  ptext9.textContent = `${e.type}`;
  console.clear();
  console.log(e.changedTouches);
});

// touchend
window.addEventListener("touchend", (e) => {
  div14.style.cssText = `background-color: ${color()};`;
  ptext9.textContent = `${e.type}`;
});

// touchmove
window.addEventListener("touchmove", (e) => {
  div14.style.cssText = `background-color: ${color()};`;
  ptext9.textContent = `${e.type}, X${e.touches[0].pageX}, Y${e.touches[0].pageY}`;
});

// touchcancel
window.addEventListener("touchcancel", (e) => {
  div14.style.cssText = `background-color: ${color()};`;
  ptext9.textContent = `${e.type}`;
});






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