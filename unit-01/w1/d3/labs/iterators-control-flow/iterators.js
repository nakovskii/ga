// Put these lines into your `lecture-practice.js` file.

const yourMoney = 100;
const catPrice = 100;
console.log("The price of the cat is: " + catPrice);

// YOUR CODE HERE

if (yourMoney > catPrice) {
    console.log("You can buy a cat and will have dollars left over");
} else if (yourMoney == catPrice) {
    console.log("You have just enough to buy a cat!" );
} else {
    console.log("You cannot buy a cat. You need more dollars :(");
    
}

// ITERATOR 

let canBuy = (yourMoney >= catPrice);
canBuy ? ((yourMoney > catPrice) ? console.log("You can buy a cat and have money left over!") : console.log("You have just enough to buy a cat!" )) : console.log("You cannot buy a cat.:(");

// console.log(canBuy);

// while loop

let n = 0
while (n < 10) {
  console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`)
  n++
}


