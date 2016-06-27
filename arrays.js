// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function largestNum (numbers) {
    topNum = numbers[0];
    for (i=0; i<=numbers.length; i++) {
        if (topNum < numbers[i]) {
            topNum = numbers[i];
        }
    }
    return topNum;
}
console.assert(largestNum(numbers)===101, 'largestNum function');

// ---------------------------
// 2. Find longest string
// ---------------------------

function longestString (strings) {
    topString = strings[0];
    for (i=0; i<strings.length; i++) {
        holdString = strings[i];
        if (topString.length < holdString.length) {
            topString = holdString;
        }
    }
    return topString;
}
console.assert(longestString(strings)==='collection','longestString function');

// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEven(numbers) {
  var c = 0;
  var evenArray = [0];
  for (i=0; i<=numbers.length; i++) {
    if (numbers[i]%2 === 0) {
      evenArray[c] = Number(numbers[i]);
      c++;
    }
  }
  return evenArray;
}
console.assert(findEven(numbers)[0] === 12 ,'findEven function');
console.assert(findEven(numbers)[3] === 6 ,'findEven function');

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOdd(numbers) {
  var c = 0;
  var oddArray = [0];
  for (i=0; i<=numbers.length; i++) {
    if (numbers[i]%2 === 1) {
      oddArray[c] = Number(numbers[i]);
      c++;
    }
  }
  return oddArray;


}
console.assert(findOdd(numbers)[0] === 1 ,'findOdd function');
console.assert(findOdd(numbers)[2] === 7 ,'findOdd function');

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs(strings) {
  var c = 0;
  var isStrings = [''];
  for(i=0; i<strings.length; i++) {
    var current = strings[i];
    for (j=0; j<current.length; j++) {
      if (current.charAt(j) === 'i' && current.charAt((j+1)) === 's') {
        isStrings[c] = current;
        c++;
      }
    }
  }
  return isStrings;
}
console.assert(findIs(strings)[0]==='this','findIs function');
console.assert(findIs(strings)[1]==='is','findIs function');

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function arrayCollider (numbers, strings) {
  var newArray = numbers.concat(strings);
  return newArray;
}
console.assert(arrayCollider(numbers,strings)[0] === 1,'arrayCollider function');
console.assert(arrayCollider(numbers,strings)[12] === 'is','arrayCollider function');


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------


function teachers (instructors) {
  var c = 0;
  var javaList = [''];
  var finalList = [''];
  for (i=0; i<instructors.length; i++) {
    var current = instructors[i];
    if (current.teaches === 'JavaScript') {
      javaList[c]=current;
      c++;
    }
  }
  for (i=0; i<javaList.length; i++) {
      finalList[i] = javaList[i].firstname;
      finalList[i] = finalList[i].toLowerCase();
  }
  return (finalList.sort());
}
var testing = teachers(instructors);
console.assert(testing[0]==='calvin','teachers function');
console.assert(testing[2]==='jd','teachers function');
