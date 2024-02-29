console.log("main.js is connected!");

let sub = document.getElementById("sub");
let submit = document.getElementById("submit");
let visaBtn = document.getElementById("visa-btn");
let masterBtn = document.getElementById("mastercard-btn");
let expressBtn = document.getElementById("express-btn");
let subCheck = document.getElementById("sub-check");
let paymentCheck = document.getElementById("payment-check");

submit.onclick = function () {
  if (sub.checked) {
    subCheck.textContent = `subscribed`;
  } else {
    subCheck.textContent = `NOT subscribed`;
  }

  if (visaBtn.checked) {
    paymentCheck.textContent = "you choose visa card";
  } else if (masterBtn.checked) {
    paymentCheck.textContent = "you choose master card";
  } else if (expressBtn.checked) {
    paymentCheck.textContent = "you choose express card";
  } else {
    paymentCheck.textContent = "please choose a payment method";
  }
};
