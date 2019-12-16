const time = document.getElementById("time");
const form = document.getElementById("form");
// const btn = document.getElementById("btn");

const timer = event => {
  event.preventDefault();

  console.log("hi");
  let interval = 5;
  let countdown = window.setInterval(() => {
    form.innerHTML = "";
    time.innerText = "00:" + interval;
    interval--;
    if (interval === 0) {
      time.innerText = "DONE";
      clearInterval(countdown);
    }
  }, 1000);
};
