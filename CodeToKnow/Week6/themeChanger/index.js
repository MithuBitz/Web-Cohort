const h1Text = document.getElementById("heading-one");

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
  h1Text.style.color = color;
}

const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", () => {
  const toggleColor = document.body.style.backgroundColor;
  console.log(toggleColor);
  if (!toggleColor | (toggleColor == "white")) {
    changeBackground("black");
    toggleBtn.innerText = "Light Mode";
    changeTextColor("white");
  } else {
    changeBackground("white");
    toggleBtn.innerText = "Dark Mode";
    changeTextColor("black");
  }
});
