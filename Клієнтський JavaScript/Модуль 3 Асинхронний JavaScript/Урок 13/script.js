function f1(any, callback) {
  setTimeout(() => {
    if (any) {
      callback(true);
    } else {
      callback(false);
    }
  }, 5000);
}

const any = "Щось що повинно загрузитися";

f1(any, (true_false) => console.log(true_false ? "True" : "False"));