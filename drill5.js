function stringSplitter(str, separator='/') {
  if(str.length === 0){
    return [''];
  }

  const char = str[0];
  if(char === separator){
    return ['', ...stringSplitter(str.slice(1))];
  }
  return [char + stringSplitter(str.slice(1))[0]];
}

console.log(stringSplitter('02/20/2020'));