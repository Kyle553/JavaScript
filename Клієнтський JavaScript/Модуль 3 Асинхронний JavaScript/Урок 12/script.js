const pt1 = document.querySelector(".pt1");
const pt2 = document.querySelector(".pt2");
const pt3 = document.querySelector(".pt3");
const pt4 = document.querySelector(".pt4");

const div1 = document.querySelector(".div1");

// ===========================================================================
const timeHMS = (t) => {
  setInterval(() => {
    const time = new Date();
    t(`${time.getHours()}.${time.getMinutes()}.${time.getSeconds()}`);
  }, 1000);
};

timeHMS((time) => {
  pt2.textContent = time;
});

// ===========================================================================
setTimeout(() => {
  pt1.textContent = "Пройшло 2 секунди";
}, 2000);

// ===========================================================================
let i1 = 0;
const si1 = setInterval(() => {
  i1++;
  if (i1 <= 10) {
    pt3.textContent = i1;
  } else {
      clearInterval(si1);
      pt3.textContent = "10 Таймер зупинився";
  }
}, 1000);

// ===========================================================================
let i2 = 0;
const si2 = setInterval(() => {
  i2++;
  if (i2 < 20) {
    pt4.textContent = i2;
  } else {
      clearInterval(si2);
      pt4.textContent = `${i2} Час сплив`;
  }
}, 1000);

div1.addEventListener("click", () => {
  if (i2 <= 3) {
    pt4.textContent = `${i2} Ще не можна зупинити таймер`;
  } else if (i2 > 3) {
      clearInterval(si2);
      pt4.textContent = `${i2} Таймер зупинено`;
  }
});