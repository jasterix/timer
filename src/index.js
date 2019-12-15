const title = document.getElementById("title");

const timer = () => {
  let interval = 60;
  const timer = setInterval(() => {
    title.innerHTML = "00:" + interval;
    console.log(interval);
    interval--;
    if ((interval, 0)) {
      clearInterval(timer);
    }
  }, 1000);
};
timer();
