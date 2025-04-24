const inputField = `Супер секрет`;

function createSecret ( secret ) {
  const newSecret = secret;

  return function getSecret () {
    return newSecret;
  }
}

const user = createSecret(inputField);
console.log(user());

// ==============================================
function createCounter () {
  let count = 0;

  return {
    increment(value) {
      count = count + value;
      return this;
    },
    
    decrement (value) {
      count = count - value;
      return this;
    },
    
    getValue () {
      console.log(count);
      return this;
    },

    reset () {
      count = 0;
      console.log(`Лічильник скинуто`);
      return this;
    }
  };
}

const counter = createCounter();
counter.increment(100).decrement(50).getValue();