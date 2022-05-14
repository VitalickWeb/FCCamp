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


// function testStrict(val) {
//     if (val === 7) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   console.log(testStrict(10));

// function compareEquality(a, b) {
//     if (a === b) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   compareEquality(10, "10");


// function testNotEqual(val) {
//     if (val != 99) { 
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testNotEqual(10);


// function testStrictNotEqual(val) {
//     if (val !== 17) {
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testStrictNotEqual(10);


// function testGreaterThan(val) {
//     if (val > 100) {
//       return "Over 100";
//     }
//     if (val > 10) {
//       return "Over 10";
//     }

//     return "10 or Under";
//   }
  
//   console.log(testGreaterThan(10));


// function testGreaterOrEqual(val) {
//     if (val >= 20) { 
//       return "20 or Over";
//     }
//     if (val >= 10) { 
//       return "10 or Over";
//     }
//     return "Less than 10";
//   }
  
//   testGreaterOrEqual(10);


// function testLessThan(val) {
//     if (val < 25) {
//       return "Under 25";
//     }
//     if (val < 55) { 
//       return "Under 55";
//     }
  
//     return "55 or Over";
//   }
  
//   testLessThan(10);


// function testLessOrEqual(val) {
//     if (val <= 12) { 
//       return "Smaller Than or Equal to 12";
//     }
//     if (val <= 24) { 
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   testLessOrEqual(10);


// function testLogicalAnd(val) {
//     if (val <= 50 && val >= 25) {
//         return "Yes";
//     }
 
//     return "No";
//   }
  
//   console.log(testLogicalAnd(10));


// function testLogicalOr(val) {
//     if (val > 20 || val < 10) {
//       return "Outside";
//     }

//     return "Inside";
//   }
  
//   testLogicalOr(15);


// function testElse(val) {
//     let result = "";
   
//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or Smaller";
//     }
  
//     return result;
//   }
  
//   testElse(4);



function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);