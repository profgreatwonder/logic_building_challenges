    let firstNum = prompt("please select a number:");
    let secondNum = prompt("please select another number");
    let addNum = Number(firstNum) + Number(secondNum)
    alert(addNum);


// function 
function plusNum() {
    let initialNum = prompt("please select a number:");
    let lastNum = prompt("please select another number");
    return Number(initialNum) + Number(lastNum)
    
}

alert(plusNum());