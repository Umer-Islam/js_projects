console.log("js connected");

mode = document.getElementById("modedark");
body = document.getElementById("body");
mode.onclick = function () {
  body.style.backgroundColor = "gray";
  mode.textContent = "";
};
