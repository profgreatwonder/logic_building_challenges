    let firstNum = prompt("please select a number: ");
    let secondNum = prompt("please select another number: ");
    let addNum = Number(firstNum) + Number(secondNum);
    alert(`The addition of your choice numbers is ${addNum}`);

    // or

    // let firstNum = Number(prompt("please select a number: "));
    // let secondNum = Number(prompt("please select another number: "));
    // let addNum = firstNum + secondNum;
    // alert(addNum);


// function 
function plusNum() {
    let initialNum = prompt("please select a number:");
    let lastNum = prompt("please select another number");
    return Number(initialNum) + Number(lastNum)
    
}

// alert(plusNum());

// or (without input from the user)

function sumNum(fN, sN) {
    return fN + sN;
}

console.log(sumNum(12, 3));