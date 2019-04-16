//  https://git.generalassemb.ly/sei-nyc-jeopardy/functions-scope-lesson


// es6 way of declaring function
// naming convention:
// use a VERB to describe what a function does

const printHello = () => {
	console.log('======');
	console.log('Hello!');
	console.log('======');
};

printHello();

const printSum = () => {
     console.log(10+10);
}
printSum();

const printTriangle = (x) => {
    let hash = "#";
    for (i=0; i< x; i++){
        console.log(hash);
        hash = hash+"#"; 
    }
}
printTriangle();

const greetUser = (firstName, lastName, year, city) => {
    console.log(
      'Hello ' +
        firstName +
        ' ' +
        lastName +
        ' born in ' +
        year +
        ' from ' +
        city +
        '!',
    );
  };



  const getLastElement = (array) => {
    console.log(array[array.length-1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement([[1, 2, 3], [4, 5, 6]]);

const minusOne = (num) => {
    console.log(num-1);
}

const makeSentence = (word1, word2, word3) => {
    console.log(`Oh boy do ${word1} ${word2} ${word3}?`);
}
makeSentence('I', 'want', 'chimichangas');

