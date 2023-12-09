let num1;
let num2;
let operator; // operator value definitions = add: 1, subtract: 2, multiply: 3, divide: 4
let interim;
let solution;
const text = document.querySelector('#screen');
const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operators');
const submitBtn = document.querySelector('#submit');
const clearBtn = document.querySelector('#clear');

// assign event listeners to the buttons that, when clicked, call their functions with
// each buttons value as a parameter
nums.forEach((elem) => {
    elem.addEventListener('click', () => {
        buttonPress(elem.value);
    });
});
operators.forEach((elem) => {
    elem.addEventListener('click', () => {
        operatorCall(elem.value);
    })
})
submitBtn.addEventListener('click',() => {
    solutionButton();
})
clearBtn.addEventListener('click', () => {
    clear();
})

clear();

// called by operator: checks if let operator has value and calls
// corresponding operator function and replaces let operator
// with new operator value
function operatorCall(value){
    if(operator !== null){
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
        console.log(num1)
    } else{
        num2 = value;
        console.log(num2)
    }
}

// called by solution button: rounds interim and places value into
// solution. Displays solution in the screen and calls the clear
// function to reset variables
function solutionButton(){
    operatorCall();
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
    interim = parseFloat(num1) + parseFloat(num2);
    num1 = interim;
    console.log('interim: ' + interim);
}
function subtract(){
    interim = parseFloat(num1) - parseFloat(num2);
    num1 = interim;
    console.log('interim: ' + interim);
}
function multiply(){
    if (num1 != 0 && num2 != 0){
        interim = parseFloat(num1) * parseFloat(num2);
        num1 = interim;
        console.log('interim: ' + interim);
    } else{
        clear();
        text.textContent = 'Nice try buddy';
    }
}
function divide(){
    interim = parseFloat(num1) / parseFloat(num2);
    num1 = interim;
    console.log('interim: ' + interim);
}