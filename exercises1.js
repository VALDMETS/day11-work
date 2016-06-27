///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (x,y) {
  return x+y;
}
console.assert(sum(2,3) === 5, 'sum function');

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (x,y,z) {
  return ((x+y+z)/3);
}
console.assert(avg(5,10,3)===6, 'avg function');
console.assert(avg(3,4,5)===4, 'avg function');

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(str) {
  return str.length;
}
console.assert(getLength('wallaby')===7,'getLength function');

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(x,y) {
  if (y>x) {
    return true;
  } else {
    return false;
  }
}
console.assert(greaterThan(4,7), 'greaterThan function');

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
  return "Hello, " + name +"!";
}
console.assert(greet('Barry')==='Hello, Barry!', 'greet function');

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(a,b,c,d) {
  return "Once upon a " + a + " dreary, as I " + b + " weak and " + c + " over many a quaint and curious volume of " + d + "...";
}

console.assert(madlib('midnight','pondered','weary','stuff')==='Once upon a midnight dreary, as I pondered weak and weary over many a quaint and curious volume of stuff...', 'madlib function');
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
