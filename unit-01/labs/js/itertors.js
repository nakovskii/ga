// // More JavaScript Iterators
// // .map() -- (10 minutes / 0:10)
// // Write code using .map() to have the following input and output:

// // getSquares – takes in an array of numbers and returns an array of their squares

// ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]
let myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sqIt = (num) => {
    return num ** 2;
}
console.log(` squared array: `, myArr.map(sqIt));
// squared array:  [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// isDivisibleBy3 – takes in an array of numbers and returns an array of booleans indicating whether each element is divisible by 3
// ex: isDivisibleBy3([1, 3, 4, 6, 7, 8, 9]) => [false, true, false, true, false, false true]

const isDivisibleBy3 = (num) => {
    return num%3 ===0;
}
console.log(` is divisible by 3: `, myArr.map(isDivisibleBy3));
// is divisible by 3:  [ false, false, true, false, false, true, false, false, true ]

// .filter() -- (15 minutes / 0:15)
// Write code using .filter() to have the following input and output:
// getOdds – takes in an array of numbers and returns an array of only odd numbers
// ex: getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [1, 3, 5, 7, 9]
const getOdds = (array) => {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        console.log(num);
        if (num % 2 === 0) {
        array[i].pop();
    }
   
    }  
    return array;
}
console.log(` is odd: `, myArr.map(getOdds));


// getEvens – takes in an array of numbers and returns an array of only even numbers

// ex: getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [2, 4, 6, 8, 10]
// getDivisibleBy4 – takes in an array of numbers and returns an array of only numbers that are divisible by 4

// ex: getDivisibleBy4([1, 4, 6, 8, 12, 13]) => [4, 8, 12]
// .reduce()
// Write code using .reduce() to have the following input and output:

// addUpAll – add up all numbers in a given array

// ex. addUpAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => 55
// multiplyAllNums – multiply all numbers in a given array

// ex. multiplyAllNums([1, 2, 3, 4, 5]) => 120
// squareAllNums – power up all numbers in a given array

// ex. squareAllNums([3, 2, 3]) => 729, bc (3 ^ 2) = 9, and (9 ^ 3) = 729
// addUpAllAges – add up all the ages in an array of objects

// ex. addUpAllAges([{name: 'Carl', age: 30}, {name: 'Cara', age: 10}, {name: 'Carmen', age: 15}]) => 55
// Colla