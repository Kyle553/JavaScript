function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  await delay(4000);
  console.log("1. Пройшло 4 секунди");
})();

delay(2000).then(() => console.log("2. Пройшло 2 секунди"));