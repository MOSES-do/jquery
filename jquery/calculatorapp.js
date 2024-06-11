$(document).ready(() => {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    var buttonPressed;
    updateScreen(result);

    $('.button').on('click', function (evt) {
        buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = '0';
        } else if (buttonPressed === "CE") {
            currentEntry = '0';
        } else if (buttonPressed === "back" && typeof (currentEntry) != 'number') {
            currentEntry = currentEntry.substring(0, currentEntry.length - 1)
        } else if (buttonPressed == "+/-") {
            currentEntry *= -1;
        } else if (buttonPressed === '.') {
            currentEntry += '.';
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry)
            operation = buttonPressed;
            currentEntry = '';
        } else if (buttonPressed === '%') {
            currentEntry = currentEntry / 100;
        } else if (buttonPressed === "sqrt") {
            currentEntry = Math.sqrt(currentEntry);
        } else if (buttonPressed === "1/x") {
            currentEntry = 1 / currentEntry;
        } else if (buttonPressed === "pi") {
            currentEntry = Math.PI;
        } else if (buttonPressed === "=") {
            if (prevEntry == '' || currentEntry == '') return //prevents conversion error
            console.log(prevEntry, operation, currentEntry);
            currentEntry = operate(prevEntry, currentEntry, operation)
            operation = null;
        }
        updateScreen(currentEntry)
    })
})

//screen display
updateScreen = function (value) {
    var value = value.toString();
    $('.screen').html(value.substring(0, 10));
}

isNumber = function (value) {
    return !isNaN(value)
}

isOperator = function (value) {
    return (value === '+' || value === '-' || value === '*' || value === '/');
}

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(typeof (a), typeof (b), operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
}
