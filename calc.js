let num1;
let num2;
let operator; // operator value definitions = add: 1, subtract: 2, multiply: 3, divide: 4
let interim;
let solution;
const text = document.querySelector('#screen');

clear();

// called by operator: checks if let operator has value and calls
// corresponding operator function and replaces let operator
// with new operator value
function operatorCall(value){
    if(!operator == null){
        if(operator == 1){
            add();
        } else if(operator == 2){
            subtract();
        } else if(operator == 3){
            multiply();
        } else if(operator == 4){
            divide();
        }
    }
    operator = value;
}

// called by number buttons: checks if let num1 is null. If it is,
// replace it with button value. If not, then replace let num2
// with button value.
function buttonPress(value){
    text.textContent = value;
    if(num1 == null){
        num1 = value;
    } else{
        num2 = value;
    }
}

// called by solution button: rounds interim and places value into
// solution. Displays solution in the screen and calls the clear
// function to reset variables
function solutionButton(){
    solution = Math.round((interim) * 10) / 10;
    text.textContent = solution;
    clear("clear");
}

// called by clear button or solution button: sets all variables
// to null and, if not called by solution, erases display text
function clear(condition){
    num1 = null;
    num2 = null;
    interim = null;
    operator = null;
    solution = null;
    if (!condition){
        text.textContent = "";
    }
}

// math functions: rounds the operation of the two numbers and places
// into the solution variable. It then makes num1 equal to solution
function add(){
    interim = num1 + num2;
    num1 = interim;
}
function subtract(){
    interim = num1 - num2;
    num1 = interim;
}
function multiply(){
    interim = num1 * num2;
    num1 = interim;
}
function divide(){
    interim = num1 / num2;
    num1 = interim;
}