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
let oopsGlobal; 
function fun1() {
   oopsGlobal = 5;
}
 
let myGlobal = 10;
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();