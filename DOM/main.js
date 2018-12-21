var body = document.querySelector("body");
var sl = document.getElementById("sl");
var isBlue = false;
// setInterval(function(){
//     if(isBlue){
//         body.style.background = "white";
//         sl.textContent = "sdds";
//     }else{
//         body.style.background = "blue";
//         sl.textContent = "List item 2";
//     }
//     isBlue = !isBlue;
// }, 1000);
var fl = document.getElementById("fl");
fl.style.color = "blue";

var firsth1 = document.getElementsByClassName("firsth1");
var butt = document.querySelector("button");

firsth1[0].addEventListener("mouseover", function(){
    firsth1[0].classList.toggle("backgroundd");
})
firsth1[0].addEventListener("mouseleave", function(){
    firsth1[0].classList.toggle("backgroundd");
})
// addEventListener("mouseleave")
var flag = false;
butt.addEventListener("click", function(){

    if(flag){
        document.querySelector("body").style.backgroundColor = "pink";
        flag = false;
    }else{
        document.querySelector("body").style.backgroundColor = "white";
        flag = true;        
    }
    console.log(flag);
});