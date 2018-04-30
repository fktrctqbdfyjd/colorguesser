let colors = randomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor(colors);
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
  //generate new colors
  colors = randomColors(6);
  //pick new colors from array
  pickedColor = pickColor(colors);
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change divs colors
  for (let i = 0; i < squares.length; i++) {
    //add random colors to square divs
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

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
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "Play Again";
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

//generate random array with colors
function randomColors(num) {
  //add num colors to array
  let array = [];
  //generate num colors
  for (let i = 0; i < num; i++) {
    array.push(randomColor());
  }
  //return array
  return array;
}

//random color to string
function randomColor() {
  //set red 0-255
  let r = Math.floor(Math.random() * 256);
  //set green 0-255
  let g = Math.floor(Math.random() * 256);
  //set blue 0-255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
