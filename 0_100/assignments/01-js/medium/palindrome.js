/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  // str = str.toLowerCase().replace(/[^\w]/g, "");

  // const len = str.length;
  // let last = len-1;

  // for(let i = 0; i <= last; i++){
  //   if(str[i] != str[last]){
  //     return false;
  //   }
  //   last--;
  // }
  // return true;

  const reversed = str.toLowerCase().replace(/[^\w]/g,"").split("").reverse().join("");

  return reversed == str.toLowerCase().replace(/[^\w]/g,"");
}

module.exports = isPalindrome;
