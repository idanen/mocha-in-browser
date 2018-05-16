export function primeFactors(num) {
  const factors = [];
  let number = num;
  for (let divisor = 2; divisor <= num; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
};
