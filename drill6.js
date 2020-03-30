/* eslint-disable strict */
function fibonacci(n, fibSeq = []) {
  if(fibSeq.length === n) {
    return fibSeq;
  }
  if (fibSeq.length < 2) {
    fibSeq.push(1);
    return fibonacci(n, fibSeq);
  }
  fibSeq.push(fibSeq[fibSeq.length -1] + fibSeq[fibSeq.length -2]);
  return fibonacci(n, fibSeq);
}

console.log(fibonacci(7));