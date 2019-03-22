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

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

const fibRec =(n)=>{
    if (n<=1){
        return 1;
    } else {
        return fibRec(n-1)+fibRec(n-2);
    }
}

console.log(fibRec(1));
console.log(fibRec(2));
console.log(fibRec(3));
console.log(fibRec(4));
console.log(fibRec(5));
console.log(fibRec(6));
console.log(fibRec(7));
