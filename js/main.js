
// get dom elements by id
    // get display
    const display = document.getElementById('display');
    // get btnIncrease
    const incrementButton = document.getElementById('increment-btn');
    // get input
    const inputValue = document.getElementById('input-value');
    // get btnDecrease
    const decrementButton = document.getElementById('decrement-btn');
    
// add click event listeners to the buttons
incrementButton.addEventListener('click', addToCount)
decrementButton.addEventListener('click', subtractFromCount)
// create variable for running total
let total = 0


//called by '+' button event lister
function addToCount() {
    // When the "+" button is clicked
    let fromString = parseInt(inputValue.value)
    total = total + fromString
// When button is clicked, the value entered
//  in input is added to count and the new 
//  count value displayed
    updateCount()
}


// called by '-' button event lister
function subtractFromCount() {
// When button is clicked, 
let fromString = parseInt(inputValue.value)
    total = total - fromString
// when clicked the value entered in input is 
// subtracted from count

    updateCount()
}


//called to update count on screen
function updateCount(){
    // update display with running total
    display.innerText = total 
}




