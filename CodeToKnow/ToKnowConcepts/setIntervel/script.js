let intervelId;

console.log(intervelId);

function changeRunner() {
  if (!intervelId) {
    intervelId = setInterval(changeBackgroundColor, 1000);
    console.log(intervelId);
  }
}

function changeBackgroundColor() {
  const boxElement = document.getElementById("dynamic-box");
  boxElement.className =
    boxElement.className === "startChange" ? "stopChange" : "startChange";
  console.log(boxElement.className);
}

function stopBackgroundColor() {
  console.log(intervelId);

  clearInterval(intervelId);
  intervelId = null;
}

document.getElementById("start").addEventListener("click", changeRunner);

document.getElementById("stop").addEventListener("click", stopBackgroundColor);
