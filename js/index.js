// ----------const------------
// if (true) {
//     const message = "hi";
// }
// console.log(message);
// Uncaught ReferenceError: message is not defined


if (true) {
    const message = "hi";
    console.log(message);
}
// hi


const message = "hi";
if (true) {
    console.log(message);
}
// hi


// ----------let------------
function sayHi(){
    for (let i=1 ; i<5 ; i++){
        console.log(i);
    }
}
sayHi();
// 1
// 2
// 3
// 4

// function sayHi2(){
//     for (let i=1 ; i<5 ; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// sayHi2();
//Uncaught ReferenceError: i is not defined
//at sayHi2

// --------let-const-------------
// ====>>>they are block scope


// --------var-------------
function sayHi3(){
    for (var i=0 ; i<5 ; i++){
        console.log(i);
    }
    console.log(i);
}
sayHi3();
// 0
// 1
// 2
// 3
// 4
// 5
// var is functional scope


// declration 
var userName = "gomnam";
userName = "amar";
console.log(userName);
var userName = "yaser";
console.log(userName);
//amar
//yaser
// ===>>> var is redeclration unlike let and const 


//Difference beetween let and const
let userName2 = "gomnam";
userName2 = "amar";
console.log(userName2);
//amar
const userName3 = "yaser";
userName3 = "gomnam";
console.log(userName3);
// Uncaught TypeError: Assignment to constant variable