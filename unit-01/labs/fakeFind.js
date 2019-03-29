const findFake = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

console.log(findFake(
    [55, 12, 204, 43, 99],
    (currentArrayElement) => {
        if (currentArrayElement == 99){
            return currentArrayElement;
        }
    }
));


