function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, sumNumbers){
    return sumNumbers(num1, num2);
}

console.log(calc(2,2, sum))



// Excercise 2, using setTimeOut, receiving a function itself.

setTimeout(function () {
    console.log("Hi JS");
}, 2000)


// Excercise 3 - setTimeOut with other function

function greeting(name) {
    console.log('Hi $(name)');
}

setTimeout(greeting(), 200000);