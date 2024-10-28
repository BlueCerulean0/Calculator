const display = document.getElementById("display");
const numbers = document.querySelectorAll('.numBtn');
const operators = document.querySelectorAll('.operator')

const period = document.getElementById('period');
const equal = document.getElementById('equal');
const clearDisplay = document.getElementById('clearDisplay');
const back = document.getElementById('back');

const twentyOne = document.getElementById('myAudio');
const what9plus10 = document.getElementById('myAudio2');


numbers.forEach((button) => {
    button.value = button.id;
})

operators.forEach((button) => {
    button.value = button.id;
})

period.value = ".";
equal.value = "=";


let input = "0";
display.value = input

let firstNum = "0";
let secondNum = "";
let operatorV = "";

function calculate(a,o,b) {
    
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

     if (o === "+") {return num1+num2}
     else if (o === "-") {return num1-num2}
     else if (o === "*") {return num1*num2}
     else if (o === "/") {return num1/num2}
     else if (o === "%") {return num1%num2}
     return null

}

equal.addEventListener('click', function calc() {
    
    firstNum = calculate(firstNum,operatorV,secondNum);
    secondNum = "";
    operatorV = "";

    display.value = firstNum + operatorV + secondNum;

    if (display.value === "21") {twentyOne.play()};
})

numbers.forEach (button => {
    
    button.addEventListener('click', () => {
        
        if (operatorV) {
            secondNum += button.value;
        } else {firstNum = (firstNum === "0") ? button.value : firstNum + button.value;
        }
        display.value = firstNum + operatorV + secondNum;

        if (display.value === "21") {
            twentyOne.play()
        }
        if (display.value === "9+10") {
            what9plus10.play()
        }
    });
})


operators.forEach (button => {
    button.addEventListener('click', () => {

        if (!operatorV && firstNum) {
            operatorV = button.value
        }

        if (firstNum && operatorV && secondNum) {
            firstNum = calculate(firstNum,operatorV,secondNum);
            secondNum = "";
            display.value = firstNum;
            operatorV = button.value;
            
            if (display.value === "21") {twentyOne.play()}
        }
        
        display.value = firstNum + operatorV + secondNum;
    })
})

period.addEventListener('click', () => {
    
    if (!operatorV) {
        if (!firstNum.includes('.')) {
            firstNum += period.value;
        }else {
            if (!secondNum.includes('.')) {
                secondNum += period.value;
            }
        }
    }
    display.value = firstNum + operatorV + secondNum;
})

clearDisplay.addEventListener('click', () => {
    firstNum = "0";
    secondNum = "";
    operatorV = "";

    display.value = firstNum + operatorV + secondNum;
})


back.addEventListener('click', () => {

    if (operatorV && !secondNum) {
        operatorV = "";
    }else if (operatorV) {
        secondNum = secondNum.slice(0,-1);
    }else {
        firstNum = firstNum.slice(0,-1);
    }
    display.value = firstNum + operatorV + secondNum;

});