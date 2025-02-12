function srt(a) {
return a.split(" ").sort((a, b) => parseInt(a) - parseInt(b)).join(" ");
};

let str = "12 56 30 2 0 11 8 93 29 16 40 36 12 69 33 99"
str = srt(str);
console.log(str);