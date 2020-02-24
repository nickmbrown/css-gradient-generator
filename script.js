let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.querySelector(".random");

console.log(css);
console.log(color1);
console.log(color2);

setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    let fullCssText = body.style.background + ";";
    console.log(fullCssText);
    let linearIndex = fullCssText.indexOf("linear");
    let parenIndex = fullCssText.indexOf("))") + 2;
    let trimmedText = fullCssText.slice(linearIndex,parenIndex);
    css.textContent = trimmedText;
}

function randomRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = fullColorHex(red, green, blue);

    return color;
}

function randomGradient() {
    color1.value = randomRGB();
    color2.value = randomRGB();
    setGradient();
}

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return "#" + red+green+blue;
  };

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);

