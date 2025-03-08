async function as1() {
  console.log("text1");
  await setTimeout(() => console.log("text2"), 3000);
}

as1();

// ===========================================================================
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let loading = Math.random() > 0.5;
    if (loading) {
      resolve(true);
    } else {
      reject(false);
    }
  }, 1000);
});

// IIFE
(async function as2() {
  try {
    const result = await pr
    console.log(result);
  } catch {
      console.error("error");
  }
})();