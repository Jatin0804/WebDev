/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // let res = 0;
    // const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    // for(let i of str){
    //   if(vowels.has(i)){
    //     res++ ;
    //   }
    // }
    // return res;

    let res = 0;
    const vowels = "aeiouAEIOU";

    for(let s of str){
      if(vowels.includes(s)){
        res++;
      }
    }
    return res;
}

module.exports = countVowels;