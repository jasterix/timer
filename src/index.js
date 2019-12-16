const title = document.getElementById("title");
const btn = document.getElementById("btn");

const timer = event => {
  event.preventDefault();

  console.log("hi");
  let interval = 5;
  let countdown = window.setInterval(() => {
    title.innerText = "00:" + interval;
    interval--;
    if (interval === 0) {
      title.innerText = "DONE";
      clearInterval(countdown);
    }
  }, 1000);
};
