console.log("js connected");

let mode = document.getElementById("modedark");
let body = document.getElementById("body");
mode.onclick = function () {
  body.style.backgroundColor = "gray";
  mode.textContent = "";
};
