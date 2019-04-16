const findmax =(arr)=> {
    if (arr.length == 1) {
        return arr[0];
    } else {
        const firstEl = arr[0];
        const maxOfRest = findmax(arr.slice(1))

        if (maxOfRest > firstEl) {
            return maxOfRest; 
        } else {
            return firstEl;
        }
    }
}


console.log(findmax([1,3,506,242,22]));
