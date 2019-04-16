// Write a function that will return true if a word is a Palindrome, or will return false if not.

// Problem solve one step at a time
// Each step might require research
// Work in layers, one layer at a time. Don't jump ahead until each piece has been tested and works.

// Determine if each step will require research, and research it.

// reverse the word (how?)
// check if the word is the same as the reverse (how?)
// return true or false

const checkPalindrome = (word) => {
//   reverse the word
    let reverse = '';
    for (let i = word.length-1; i >= 0; i--) {
        reverse += word[i];
    }
// check if the reverse == word?
    if (word === reverse){
        // return yes or no
        return `It's a Palindrome!!`
    } else {
        // return yes or no
        return `It's NOT a Palindrome!!`
    }
}

console.log(checkPalindrome('racecar'));


const checkIfIdentical = (word1, word2) => {
   return (word1 === word2) ? `Identical!!` : ` NOT Identical!!`;
};

console.log(checkIfIdentical('me','me'));
console.log(checkIfIdentical(2,2));


const sumButReturnString = (num1, num2, num3) => {
    let sum = num1 + num2 + num3;
    return sum.toString();
};

console.log(sumButReturnString(1,2,3));

const reverseWordOrder = (string) => {
    let arr = string.split(' ');    
    return arr.reverse().join(' ');
};

console.log(reverseWordOrder("Ishmael me Call"));


