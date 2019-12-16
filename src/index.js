const time = document.getElementById("time");
const form = document.getElementById("form");
// const btn = document.getElementById("btn");

const timer = event => {
  const input = parseInt(event.target.parentNode.querySelector("input").value);
  event.preventDefault();

  let interval = input;
  let countdown = window.setInterval(() => {
    form.innerHTML = "";
    time.innerText = "0:" + interval;
    interval--;
    if (interval === 0) {
      time.innerText = "DONE";
      clearInterval(countdown);
    }
  }, 1000);
};
