// 8-Project Euler Problem 2

const sumEvenFab = (num) => {
    let evenFib = [];
    let sumEvenFib=0;

    const fib = (n) => {
        let a=1, b=0, temp;
        while(n>=0){
            temp=a;
            a=a+b;
            b=temp;
            n--;
        }
        return b;
    }
    for (let i=1; i < num; i++){
        if (fib(i)%2==0) {
            evenFib.push(fib(i));
        }
    }
    for (let j=0; j < evenFib.length; j++){
        sumEvenFib += evenFib[j];
    }
    if (sumEvenFib > 4000000) {
        return `The number is greater than 4 million`;
    }
    else {
        return sumEvenFib
        }
    
}

console.log(sumEvenFab(30));
