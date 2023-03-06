function startCount() {
  let count = 0;
  intervalId = setInterval(() => {
    document.getElementById("count-numbers").innerText = ++count;
  }, 1000);
}

document.getElementById("start-btn").addEventListener("click", function () {
  startCount();
});
document.getElementById("stop-btn").addEventListener("click", function () {
  clearInterval(intervalId);
});
document.getElementById("reset-btn").addEventListener("click", function () {
  clearInterval(intervalId);
  document.getElementById("count-numbers").innerText = 0;
});
