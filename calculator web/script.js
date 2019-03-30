function addition(firstNumber, secondNumber) {
    var result = firstNumber+secondNumber;
    return result;
}

function subtraction(firstNumber, secondNumber) {
    var result = firstNumber-secondNumber;
    return result;
}

function multiple(firstNumber, secondNumber) {
    var result = firstNumber*secondNumber;
    return result;
}

function devide(firstNumber, secondNumber) {
    var result = firstNumber/secondNumber;
    return result;
}

function reminder(firstNumber, secondNumber) {
    var result = firstNumber%secondNumber;
    return result;
}


function myCalculator(operator) {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    switch (operator) {
        case '+' :
            var result = addition(firstNumber, secondNumber);
            break;
        case '-' :
            var result = subtraction(firstNumber, secondNumber);
            break;
        case '*' :
            var result = multiple(firstNumber, secondNumber);
            break;
        case '/' :
            var result = devide(firstNumber, secondNumber);
            break;
        case '%' :
            var result = reminder(firstNumber, secondNumber);
            break;
    }

    document.getElementById('result').value = result;
}   
