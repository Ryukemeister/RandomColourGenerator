const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    randomNumber = hex[Math.floor(Math.random() * hex.length)];
    hexColour += randomNumber;
  }
  // console.log(hexColour);
  document.body.style.backgroundColor = hexColour;
  color.textContent = hexColour;
});
