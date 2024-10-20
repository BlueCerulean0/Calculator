const display = document.getElementById("display");
currentInput = ""

function appendToDisplay(input){
    if (display.value === "ERROR") {
        currentInput = ""
        display.value = ""
    }
    display.value += input
    currentInput += input
};

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "ERROR"
    }

};

function clearDisplay() {
    display.value = ""
}

function back() {
    display.value = display.value.slice(0, -1) + "";
}