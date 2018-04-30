let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor(colors);
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add random colors to square divs
  squares[i].style.backgroundColor = colors[i];

  //add click listener
  squares[i].addEventListener("click", function() {
    //color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare clicked to picked
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

//change colors to correct one if winning condition met
function changeColors(color) {
  for (let i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color;
}

//pick random color from colors array
function pickColor(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
