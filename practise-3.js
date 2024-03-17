let mode = "full";
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}


fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

setInterval(update, 100);
update();
