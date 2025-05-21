function display(result){
    console.log(result)
}

function add(num1, num2, myCallBack){
    let sum = num1 + num2;
    myCallBack(sum)
}

add(1, 3, display);


// ANONYMOUS FUNCTIONS


let sum = function (num3, num4){
    return num3 + num4;
}

console.log(sum(1,5))


// RECURSIVE FUNCTIONS


function countDown(num){
    console.log(num--);
    if (num >=0){
        countDown(num)
    }
}

countDown(10);













