var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1sh = document.querySelector("#p1s");
var p2sh = document.querySelector("#p2s")
var p1s = 0;
var p2s = 0;
var gameoaver = false;
var winnerscore = 5;
var numinput = document.querySelector("input");
var ptn = document.querySelector("#pt");
p1.addEventListener("click", function () {
    if (!gameoaver) {
        p1sh.textContent = ++p1s;
        if (p1s >= winnerscore) {
            gameoaver = true;
            p1sh.classList.toggle("green");
        }
    }
});
p2.addEventListener("click", function () {
    if (!gameoaver) {
        p2sh.textContent = ++p2s;
        if (p2s >= winnerscore) {
            gameoaver = true;
            p2sh.classList.toggle("green");
        }
    }
});

reset.addEventListener("click", function () {
    p1s = 0;
    p2s = 0;
    gameoaver = false;
    document.querySelector("#p1s").textContent = 0;
    document.querySelector("#p2s").textContent = 0;
    p1sh.classList.remove("green");
    p2sh.classList.remove("green");
});

numinput.addEventListener("change", function () {
    ptn.textContent = this.value;
    winnerscore = Number(this.value);

    p1s = 0;
    p2s = 0;
    gameoaver = false;
    document.querySelector("#p1s").textContent = 0;
    document.querySelector("#p2s").textContent = 0;
    p1sh.classList.remove("green");
    p2sh.classList.remove("green");

})