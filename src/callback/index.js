// Excercise 2, using setTimeOut, receiving a function itself.

setTimeout(function () {
    console.log("Hi JS");
}, 2000)


// Excercise 3 - setTimeOut with other function

function greeting(name) {
    console.log(`Hola ${name}`);
}


setTimeout(greeting, 2000, `Diego`);




//Example from Platzi teammate
function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,2, div))



//Excercise for me and Platzi students

function haceCurso(name){
    console.log(`${name} si está haciendo el Curso`)
}

function noHaceCurso(name){
    console.log(`${name} no está haciendo el Curso`)
}

function decirLaVerdad(name, callback){
    return callback(name)
}

console.log(decirLaVerdad(`Diego`, haceCurso));

