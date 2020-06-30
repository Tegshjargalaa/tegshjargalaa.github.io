
/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively)*/

// const numbersAdd = [1, 2, 3, 4];
function sum(numbersAdd){
    return numbersAdd.reduce(function (result, item) {
        return result + item;
    }, 0);
}


/* Set multiplication*/
// const numbersMult = [1, 2, 3, 4];
function multiply(numbersMult){
    return numbersMult.reduce(function (result, item) {
        return result * item;
    }, 1);
}



/* 5. Define a function reverse() that computes the reversal of a string.*/

// var inputString = "abcde";
function reverse(inputString) {
    // return inputString.toCharArray().reverse().join("");
    return inputString.split("").reverse().join("");
}


/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(myWordsArray, i) {
    return myWordsArray.filter(function (element) {
        return element.length > i;
    })
}

