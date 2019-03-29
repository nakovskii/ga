// only classes have constructor
class Car {
    // this is a constructor
    constructor(model, color){
        this.make = 'Honda'
        this.model = model;
        this.color = color;
        this.fuel = 100;
    }
    // 
    drive() {
        this.fuel--;
        return 'Vroom!';
      }
      refuel() {
        this.fuel = 100;
      }
  };

const hondaCivic = new Car('Civic', 'Red');
console.log(hondaCivic);

class Person {
    constructor(initalName){
        this.name = initalName;
        this.species = 'Homo Sapiens';
    }
    speak(){
        return `Hello! I'm ${this.name}`;
    }
}

const andy = new Person('Andy');
console.log(andy.speak());

const laeeq = new Person();
laeeq.name = 'Laeeq';
console.log(laeeq);
console.log(laeeq.speak());

class Animal {
    constructor(name, breed){
      this.name = name;
      this.breed = breed;
      this.diet = [];
    }
    eat(food){
      this.diet.push(food);
      console.log(this.diet,'12334');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed, tail){
        super(name, breed);
        this.waggingTail = tail;
    }
    bark(){
      return `Bark! Hello, this is dog. My name is ${this.name}`
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed, numLives){
        super(name, breed);
        this.numLives = numLives;
    }
    meow(){
      return `Meow! I am not a dog! My name is ${this.name}`
    }
  }

const fido = new Dog('fido','chu','wag');
fido.eat('meat');


// Make a BankAccount Class
// For this exercise you will be creating a BankAccount class.

// It will have the following properties...

// type (e.g., "checking"), which should be determined by some input
// money, which should start out as 0
// It should have the following methods...

// withdraw, which should decrease the amount of money by some input
// deposit, which should increase the amount of money by some input
// showBalance, which should print the amount of money in the bank to the console.
// The BankAccount class has a transactionHistory property which keeps track of the withdrawals and deposits made to the account.

// Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.
// Bonus
// Give the BankAccount class a backupAccount property that can, optionally, contain a reference to another instance of the class, determined by some input

// Whenever a BankAccount's balance goes below zero, it will remove money from the instance stored in backupAccount so that its balance goes back to zero.
// This should trigger a withdrawal in the back up account equal to the amount of money that was withdrawn from the original account.


class BankAccount {
    constructor(type, money){
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
    }
    withdraw(amount){
        this.money -= amount;
        this.transactionHistory.push(`withrawn: ${amount}`);
        console.log(`You've withdrawn ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        
    }
    deposit(amount){
        this.money += amount;
        this.transactionHistory.push(`deposited: ${amount}`);

    }
    showBalance(){
        return `Your balance is: ${this.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
    showHistory(history=1){
        let pastHistory = [];
        for (let i = history; i  > 0 ; i--) {
            pastHistory.push(this.transactionHistory[i]);
        }
        return (`Your last ${history} transction(s) are: ${pastHistory} `)
    }
    
}

const myChecking = new BankAccount('checking',100000000);
console.log(myChecking.showBalance());
myChecking.deposit(400000);
console.log(myChecking.showBalance());
myChecking.withdraw(105066);
console.log(myChecking.showBalance());
myChecking.deposit(500000);
console.log(myChecking.showBalance());
myChecking.withdraw(305066);
console.log(myChecking.showBalance());
myChecking.deposit(1000000);
console.log(myChecking.showBalance());
myChecking.withdraw(205000);
console.log(myChecking.showBalance());
console.log(myChecking.showHistory(5));

