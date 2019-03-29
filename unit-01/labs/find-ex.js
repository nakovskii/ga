

function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  console.log([4, 5, 8, 12, 2].find(isPrime)); 
