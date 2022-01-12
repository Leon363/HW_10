// console.log("Hello World!!!");
//output for var 3 3 3 

// for(var i=0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }

    
// for(let i=0; i < 3; i++){
//     setTimeout(function(){
//         console.log(i);
//     }) 
// }

// const fun = function(a, b) {
//     return a + b; 
// }    

// console.log("12" + 12);
// console.log("12" - 12);
// console.log("ab" + 12);
// console.log("ab" - 12);
// console.log(+"12" + 12);
// console.log(+"5" * 5 / 4 * +"3");
// console.log(` + "12" + 12 = ${+"12" + 12}`);

//HW #defenition

// 1. написать слово aNaNas используя только буквы "а" и "s"

// ананас - вариант 1:
console.log("a"); 
console.log("ab" - "a")
console.log("a" + "s");
// ананас - вариант 2:
console.log("a" + ("AB" - "a") + "a" + "s");
// ананас - варант 3:
console.log("a" + "a" * "a" + "a" + "s");
    

// 2. написать калькулятор 

function plus(a, b){
    return a + b;
}
function minus(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b == 0){
        return console.log("ERROR: Divide by ZERO");
    }
    else return a / b;
}
function power(a,b){
    return a ** b;
}
function root(a){
    return Math.sqrt(a);
}


function calculator(a, b, c){
    if( c == "-" ){
        return minus(a, b);
    }
    else if ( c == "+"){
        return plus(a, b);
    }
    else if(c == "*"){
        return multiply(a,b)
    }
    else if(c == "**"){
        return power(a,b);
    }
    else if(b == "sqrt"){
        return root(a);
    }
    else{
        return divide(a,b);
    }
     

}
console.log(calculator(121, "sqrt"))

// 3. написать пример для запуска f(5)(10, 3)

function five(a, b){
    return a ** b;
}
console.log(five(10, 3));

