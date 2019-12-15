const title = document.getElementById("title");

const timer = () => {
  console.log("hi");
  let interval = 5;
  try {
    const countdown = setInterval(() => {
      title.innerHTML = "00:" + interval;
      interval--;
      if (interval < 0) {
        title.innerText = "DONE";
        clearInterval(countdown);
      }
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};
// timer();
