function countKprimes(k, start, end) {
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function getPrimeFactorsCount(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        count++;
        n /= i;
      }
    }
    return count;
  }

  const kPrimes = [];
  for (let i = start; i <= end; i++) {
    if (getPrimeFactorsCount(i) === k) {
      kPrimes.push(i);
    }
  }
  return kPrimes;
}

function puzzle(s) {
  const onePrimes = countKprimes(1, 2, s);
  const threePrimes = countKprimes(3, 2, s);
  const sevenPrimes = countKprimes(7, 2, s);
  let count = 0;

  for (const a of onePrimes) {
    for (const b of threePrimes) {
      for (const c of sevenPrimes) {
        if (a + b + c === s) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(countKprimes(5, 500, 600)); // Output: [500, 520, 552, 567, 588, 592, 594]
console.log(puzzle(138)); // Output: 1
console.log(puzzle(143)); // Output: 2
