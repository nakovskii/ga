
//  https://git.generalassemb.ly/sei-nyc-jeopardy/morning-exercises/tree/master/js-array-manipulation


let fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry',
'Fig', 'Guava', 'Huckleberry', 'Ice plant', 'Jackfruit'];
console.log(`Challenge 2a`);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(`Challenge 2b`);

for (let i = fruits.length-1; i >=0; i--){
    console.log(fruits[i]);
}

console.log(`Challenge 2c`);

for (let i = 2; i < fruits.length; i+=3) {
    console.log(fruits[i]);
}

console.log(`Challenge 3`);
let customers = ['Derick', 'Brian', 'Daniel', 'Leo', 'Tara', 'Soleil', 'Bruno', 'Celeste', 'Drake', 'Jason'];
let min=0;
customers.forEach(function(ele){
    min = min+2;
    console.log(`${ele}: ${min} minuntes`);
});

// Challenge Set B: forEach

let dogs = ['Snoopy', 'Scooby', 'Pluto', 'Goofy', 'Astro', 'Mr. Peabody', 'Odie', "Santa's Little Helper", 'Brian'];