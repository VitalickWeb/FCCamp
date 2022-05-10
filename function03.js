'use strict';

// function reusableFunction() {
//     console.log('Hi World');
// }
// reusableFunction();

// function functionWithArgs(param1, param2) {
//     console.log(param1 + param2);
// }
// functionWithArgs(1, 2);
// functionWithArgs(7, 9);

// function timesFive(num) {
//     return num * 5;
// }
// console.log(timesFive(5));
// console.log(timesFive(2));
// console.log(timesFive(0));

//Global Scope and Functions
// let oopsGlobal; 
// function fun1() {
//    oopsGlobal = 5;
// }
 
// let myGlobal = 10;
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2();

//Local Scope and Functions
// function myLocalScope() {
//     let myVar = 15;
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
//   console.log('outside myLocalScope', myVar);// will cause an error

// const outerWear = "T-Shirt";

// function myOutfit() {
//   let outerWear = 'sweater';
//   return outerWear;
// }
// console.log(myOutfit());

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
    sum = sum + 5; 
    console.log(sum);
}
addThree();
addFive();