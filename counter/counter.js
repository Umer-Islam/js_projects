let count = 0;

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("counter").textContent = count;
};
decrease = document.getElementById("decreaseBtn").onclick = function () {
  count -= 1 ? count > 0 : window.alert(`counter can't be negative`);
  document.getElementById("counter").textContent = count;
};
reset = document.getElementById("resetBtn").onclick = function () {
  count = 0;
  document.getElementById("counter").textContent = count;
};

function negativeBanner() {
  document.getElementById("notification").textContent =
    "counter cannot be negative";
  document.getElementById("notification").style.backgroundColor = "red";
}
