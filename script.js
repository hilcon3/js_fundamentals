// variables
function add7(n){
  return n+7;
}

function multiply(x, y){
  return x*y;
}

function capitalize(str){
  s = str.toLowerCase();
  return s.substring(0,1).toUpperCase() + s.substring(1);
}

function lastLetter(str){
  return str.charAt(str.length-1);
}

console.log(lastLetter("abcd"));


