let num1;
let num2;
let operator; // operator value definitions = add: 1, subtract: 2, multiply: 3, divide: 4
let solution;
const text = document.querySelector('#screen');

clear();

// called by operator: checks if let operator has value and calls
// corresponding operator function and replaces let operator
// with new operator value
function operatorCall(value){
    if(!operator == null){
        if(operator == 1){
            // call add function
        } else if(operator == 2){
            // call subtract function
        } else if(operator == 3){
            // call multiply function
        } else if(operator == 4){
            // call divide function
        }
    }
    operator = value;
}

// called by number buttons: checks if let num1 is null. If it is,
// replace it with button value. If not, then replace let num2
// with button value.
function buttonPress(value){
    if(num1 == null){
        num1 = value;
    } else{
        num2 = value;
    }
}

// called by solution button: display value of solution in the screen
// text and then sets all variables to null
function solutionButton(){
    text.textContent = solution;
    num1 = null;
    num2 = null;
    operator = null;
    solution = null;
}

// called by clear button: sets all variable values to null and clears
// screen text
function clear(){
    num1 = null;
    num2 = null;
    operator = null;
    solution = null;
    text.textContent = "";
}

// math functions: rounds the operation of the two numbers and places
// into the solution variable. It then makes num1 equal to solution
function add(){
    solution = Math.round((num1 + num2) * 10) / 10;
    num1 = solution;
}
function subtract(){
    solution = Math.round((num1 - num2) * 10) / 10;
    num1 = solution;
}
function multiply(){
    solution = Math.round((num1 * num2) * 10) / 10;
    num1 = solution;
}
function divide(){
    solution = Math.round((num1 / num2) * 10) / 10;
    num1 = solution;
}