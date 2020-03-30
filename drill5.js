function stringSplitter(str, separator='/') {
  if(str.length === 0){
    return [''];
  }

  const char = str[0];
  if(char === separator){
    return ['', ...stringSplitter(str.slice(1))];
  }
  const newArray = stringSplitter(str.slice(1));
  newArray[0] = char + newArray[0];
  return newArray;
}

console.log(stringSplitter('02/20/2020'));