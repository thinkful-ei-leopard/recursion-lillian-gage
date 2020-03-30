function nthTriangularNumber(n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangularNumber(n - 1);
}

console.log(nthTriangularNumber(4));