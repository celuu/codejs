const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const b = Math.sqrt(n)

  for (let i = 2; i <= b; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(6));
