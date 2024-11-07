// User inputs
var firstNumber;
var secondNumber;
var operator;
let temp = "";

// Add keyboard EventListeners
window.addEventListener('keydown', function(e){
    const key = e.key;

    // Check if the key is a number (0-9)
    if (key >= '0' && key <= '9') {
        const button = document.querySelector(`button[data-value="${key}"]`);
        if (button) {
            button.click();  // Simulate clicking the number button
        }
    }

    // // Handle operators
    // else if (key === '+' || key === '-' || key === '*' || key === '/') {
    //     const button = document.querySelector(`button[data-value="${key}"]`);
    //     if (button) {
    //         button.click();  // Simulate clicking the operator button
    //     }
    // }

    // Handle Enter (equals)
    else if (key === 'Enter') {
        e.preventDefault();
        const button = document.querySelector(`button[data-value="="]`);
        if (button) {
            button.click();  // Simulate clicking the equals button
        }
    }

    // Handle Escape (clear)
    else if (key === 'Escape') {
        const button = document.querySelector(`button[data-value="C"]`);
        if (button) {
            button.click();  // Simulate clicking the clear button
        }
    }
});

// Add EventListeners to all buttons
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    switch(true) {
        case button.classList.contains("number"):
            button.addEventListener("click", () => {
                const value = button.getAttribute("data-value");
                temp += value;
                document.querySelector(".display").innerText = temp;
            });
            break;
        case button.classList.contains("operator"):
            button.addEventListener("click", () => {
                const operatorType = button.getAttribute("operator");
                operator = operatorType;
                firstNumber = temp;
                temp = "";
                document.querySelector(".display").innerText = "";
            });
            break;
        case button.classList.contains("clear"):
            button.addEventListener("click", () => {
                firstNumber = "";
                secondNumber = "";
                operator = "";
                document.querySelector(".display").innerText = "";
            });
            break;
        case button.classList.contains("equals"):
            button.addEventListener("click", () => {
                secondNumber = temp;
                temp = "";
                const result = operate(firstNumber, secondNumber, operator);
                firstNumber = result;
                document.querySelector(".display").innerText = result;
            });
            break;
    }
})

// Define math operations
const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;
const subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;
const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

// Operate function
function operate(firstNumber, secondNumber, operator) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    switch (operator) {
        case "addition":
            return addition(firstNumber, secondNumber);
        case "subtraction":
            return subtraction(firstNumber, secondNumber);
        case "multiplication":
            return multiplication(firstNumber, secondNumber);
        case "divide":
            if (secondNumber == 0) {
                return "ERROR";
            }
            else {
                return divide(firstNumber, secondNumber);
            }    
    }
}