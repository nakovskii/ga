const findFake = (arr, callback) => {
    let bigNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i]>bigNum ? bigNum = arr[i]: bigNum;
    }
    return bigNum;
}

findFake(
    [55, 12, 204, 43, 99],
    (currentArrayElement) => {
        console.log(`${currentArrayElement} is the largest number!`);
    }
);