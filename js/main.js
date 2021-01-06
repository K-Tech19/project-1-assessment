let input = document.getElementById('input');
let btnIncrease = document.getElementById('btnIncrease');
let btnDecrease = document.getElementById('btnDecrease');
let countUp = 0;
let updated = 0;
let count = []; 




function increase() {
    input == count + intValue;
}

function decrease() {
    input == count - intValue;
}

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("🥶Freezing");
    // Upon Loading
    // input value should be 1
    input = 0;
    // initial count 0
    count = 0;
    // When the "+" button is clicked
    countUp = btnIncrease.target.addEventListener('click', increase);
    console.log("more");
        // When button is clicked, the value entered in input is added to count
    //When the "-" button id clicked
    countDown = btnDecrease.target.addEventListener('click', decrease);
    console.log("less");
        // When button is clicked, the value entered in input is subtracted from count
    // display new count


})
