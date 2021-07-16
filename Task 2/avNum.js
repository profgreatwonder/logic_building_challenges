// variables
let num_1 = Number(prompt("pick a number:"));
let num_2 = Number(prompt("pick another number:"));
let num_3 = Number(prompt("pick a third number:"));
let avNum = (num_1 + num_2 + num_3)/3
alert(`The average of your chosen numbers is ${avNum}`)


// functions
function num_av() {
    let num_1 = prompt("pick a number: ");
    let num_2 = prompt("pick another number: ");
    let num_3 = prompt("pick a third number");
    let avNum = (Number(num_1) + Number(num_2) + Number(num_3))/3
    return `The average of your chosen numbers is ${avNum}`
}

alert(num_av())

// or (without input from the user)

function n_av(_num1, _num2, _num3) {
    return (_num1 + _num2 + _num3)/3
}

console.log(n_av(3, 3, 3))

// arrow function for the 2nd function solution which can also be used for the 1st. this is just rewriting the function. both works

// const n_av = (_num1, _num2, _num3) => (_num1 + _num2 + _num3)/3;

// console.log(n_av(3, 3, 3));



