/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/*runs test for only the 2 arrays, not permitive values whether expected value is equal to the found value*/
function myFunctionTestForArray(expected, found) {
    var counter = 0;
    for (i = 0; i < expected.length; i++) {
        if (expected[i] !== found[i]) {
            counter++;
        }
    }
    if (counter === 0) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found;
    }
}

/* 1. max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("1. Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* 2. max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("2. Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("2. Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("2. Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* 3. takes a character and return True if it is vowel, return false otherwise*/
function isVowel(c) {
    if (c == 'a' || c == 'e' || c == 'u' || c == 'i' || c == 'y' || c == 'o')
        return true
    return false
}
console.log("3. Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("3. Expected output of isVowel('b') is false  " + myFunctionTest(false, isVowel('b')));
console.log("3. Expected output of isVowel('c') is true  " + myFunctionTest(true, isVowel('c')));

/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively)*/
function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// Print out the total to the console
console.log("4. Expected output of sum([1, 2, 3, 4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));


// Set multiplication
function multiply(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = (total * numbers[i]);
    }
    return total;
}
// Print out the total to the console
console.log("4. Expected output of multiply([1, 2, 3, 4]) is 10  " + myFunctionTest(10, multiply([1, 2, 3, 4])));
console.log("4. Expected output of multiply([1, 2, 3, 4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* 5. Define a function reverse() that computes the reversal of a string.*/
function reverse(inputString) {
    return inputString.split("").reverse().join("");
}
console.log("5. Expected output of reverse ('tjka') is 'akjt' " + myFunctionTest("akjt", reverse("tjka")));

/* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
console.log("6. Expected output of findLongestWordLength (my name is tegshjargal) is 11  " + myFunctionTest(11, findLongestWordLength("my name is tegshjargal")));

/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(myWordsArray, i) {
    return myWordsArray.filter(function (element) {
        return element.length > i;
    })
}

console.log("7. Expected output of words (['this','is','JavaScript','yes'], 3) is this,JavaScript " + myFunctionTestForArray(["this", "JavaScript"], filterLongWords(["this", "is", "JavaScript", "yes"], 3)));

/* 8.Modify the jsfiddle on the map/filter/reduce slide as follows:*/

/*8.1 multiply each element by 10; */
function multiplyBy10(myArray) {
    const returnArray = myArray.map(function (element, i, array) {
        return element * 10;
    })
    return returnArray;
}
console.log("8.1. Expected output of array ([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTestForArray([10, 30, 50, 30, 30], multiplyBy10([1, 3, 5, 3, 3])));

/*8.2 return array with all elements equal to 3; */
function arrayEqual3(myArray) {
    const returnArray = myArray.filter(function (element) {
        return element === 3;
    })
    return returnArray;
}
console.log("8.2. Expected output of array ([1,3,5,3,3]) is [3,3,3] " + myFunctionTestForArray([3, 3, 3], arrayEqual3([1, 3, 5, 3, 3])));


/*8.3 return the product of all elements; */
function productOfAllElements(myArray) {
    const returnArray = myArray.reduce(function (preValue, element, index, array) {
        return preValue * element;
    })
    return returnArray;
}

console.log("8.3. Expected output of array ([1,3,5,3,3]) is 135 " + myFunctionTest(135, productOfAllElements([1, 3, 5, 3, 3])));

console.log("***********************************************************************************");
console.log("*********************    Test section using console.assert()  ********************* ");


// console.log("1. Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
function testMax() {
    console.assert(max(10,20) === 20, "MaxOf(10, 20) should be 20");
}
testMax();

function testMaxOfThree(){
    console.assert(maxOfThree(5, 4, 44) === 44, "MaxOf(5,4,44) should be 44")
}
testMaxOfThree();

function testIsVowel(){
    console.assert(isVowel('a') === true,"isVowel('a') output should be false" )
}
testIsVowel();

function testSum(){
    console.assert(sum([1, 2, 3, 4]) === 10, "sum([1, 2, 3, 4]) is should be 10")
}
testSum();

function testMultiply(){
    console.assert(multiply([1, 2, 3, 4]) === 24, "multiply([1, 2, 3, 4])) should be 24 ")
}
testMultiply();

function testReverse(){
    console.assert(findLongestWordLength("my name is tegshjargal") === 11, "findLongestWordLength(my name is tegshjargal) output should be 11")
}
testReverse();

function testArrayWordsValues(){
	console.assert(myFunctionTestForArray (["this","JavaScript"], filterLongWords(["this","is","JavaScript","yes"], 3)) === "TEST SUCCEEDED", "Output should be ['this,JavaScript']");
}
testArrayWordsValues();

function testMultiplyBy10(){
	console.assert(myFunctionTestForArray ([10,30,50,30,30], multiplyBy10([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [10,30,50,30,30]");
}
testMultiplyBy10();

function testEqualWith3(){
	console.assert(myFunctionTestForArray ([3,3,3], arrayEqual3([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be [3,3,3]");
}
testEqualWith3();

function testProductsOfAllElements(){
	console.assert(myFunctionTest (135, productOfAllElements([1,3,5,3,3])) === "TEST SUCCEEDED", "Output should be 135");
}
testProductsOfAllElements();