function powerCalculator(base, exp) {
  if (exp < 0) {
    return "Exponent should be greater than 0";
  }
  if (base === 1) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(10, 4));

