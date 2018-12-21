var mode = 6;
var colors = generateRandomColors(mode);
var pickedcolor = randompick();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButtom = document.querySelector("#reset");
var easyB = document.getElementById("easyB");
var hardB = document.getElementById("hardB");

easyB.addEventListener("click", function () {
    easyB.classList.add("selected");
    hardB.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";
    mode = 3;
    colors = generateRandomColors(mode);
    pickedcolor = randompick();
    colorDisplay.textContent = String(pickedcolor);
    squares.forEach(function (square, i) {
        if (colors[i]) {
            square.style.backgroundColor = colors[i];
        } else {
            square.style.backgroundColor = "transparent";
            square.removeEventListener("click", clickevent);
        }
    })
})
hardB.addEventListener("click", function () {
    easyB.classList.remove("selected");
    hardB.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    mode = 6;
    colors = generateRandomColors(mode);
    pickedcolor = randompick();
    colorDisplay.textContent = String(pickedcolor);
    squares.forEach(function (square, i) {
        square.style.backgroundColor = colors[i];
        if(i > 2){
            square.addEventListener("click", clickevent);
        }
    })
})

colorDisplay.textContent = String(pickedcolor);

resetButtom.addEventListener("click", function () {
    colors = generateRandomColors(mode);
    pickedcolor = randompick();
    resetButtom.textContent = "New Colors"
    colorDisplay.textContent = String(pickedcolor);
    h1.style.backgroundColor = "steelblue";
    squares.forEach(function (square, i) {
        if (colors[i]) {
            square.style.backgroundColor = colors[i];
        } else {
            square.style.backgroundColor = "transparent";
        }
    })
    messageDisplay.textContent = "";
})
squares.forEach(function (square, i) {
    //add initial colors to squares
    square.style.backgroundColor = colors[i];
    //add click listener
    square.addEventListener("click", clickevent);
});

function changeColors(color) {
    squares.forEach(function (square,i) {
        if(colors[i]){
            square.style.backgroundColor = color;
        }else{
            square.style.backgroundColor = "transparent";
        }
    });
    h1.style.backgroundColor = color;
}

function randompick() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var tempcolors = [];
    for (var i = 0; i < num; i++) {
        tempcolors.push("rgb(" + getRandomNum() + ", " + getRandomNum() + ", " + getRandomNum() + ")");
    }
    return tempcolors;
}

function getRandomNum() {
    return Math.floor(Math.random() * Math.floor(255));
}

function clickevent(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //correct
    if (clickedColor === pickedcolor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedcolor);
        resetButtom.textContent = "Play Again"
    } else {
        this.style.backgroundColor = "black";
        messageDisplay.textContent = "Try Again";
    }
}