const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", changColor);

function changColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];

  // bodyBcg.style.backgroundColor = colors[2];
}
