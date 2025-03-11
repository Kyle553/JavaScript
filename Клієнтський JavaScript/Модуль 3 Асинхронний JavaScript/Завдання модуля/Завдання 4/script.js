function time_until() {
  const date1 = new Date();
  const date2 = new Date(2035, 11, 5, 13, 20, 50);
  
  const milisecond = date2 - date1;
  
  if (milisecond <= 0) {
    return "Час сплинув"
  }

  const days = Math.floor(milisecond / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milisecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milisecond % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milisecond % (1000 * 60)) / 1000);

  const zero = (num) => num < 10 ? `0${num}` : num;

  return `До 05-11-2035 13:20:50 залишилось: ${zero(days)}:${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
};

time_until();

setInterval(() => {
  console.clear();
  console.log(`${time_until()}`);
}, 500);