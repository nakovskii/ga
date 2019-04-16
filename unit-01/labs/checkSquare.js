

const checkSq = (x) => {
    return Math.sqrt(x)%1 == 0;
}

const checkToLimit = (limit) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${i}: ${checkSq(i)}`);
    }
}
console.log(checkToLimit(40));

