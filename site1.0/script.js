let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbr1");

stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white"
}
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black"
}

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbr2");

stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white"
}
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black"
}   

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbr3");

stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white"
}
stpbl1.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black"
}