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

// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// function addFive() {
//     sum = sum + 5; 
//     console.log(sum);
// }
// addThree();
// addFive();


// let processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed = processArg(7);
// console.log(processed);

// function nextInLine(arr, item) { 
//     arr.push(item);
//     let elem = arr.shift(item);
//     item = elem;
//     return item;
// }

// const testArr = [1, 2, 3, 4, 5];
// console.log(nextInLine(testArr, 6));


// function welcomeToBooleans() {
//     return true;
// }
// console.log(welcomeToBooleans());


// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue === true) {
//         return 'Yes, that was true';
//     } else {
//         return 'No, that was false';
//     }
// }

// trueOrFalse(true);


// function testEqual(val) {
//     if (val == 12) {
//       return "Equal";
//     } 
//     return "Not Equal";
// }
  
// console.log(testEqual(10));


function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testStrict(10));