'use strict';

function reverseString(str) {
  if(str === ''){
    return '';
  }

  const newStr = str[str.length - 1];
  return newStr + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello'));
