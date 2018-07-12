/**
* @author Emily Wang <write2emily@hotmail.com>
*  Date: May 18th, 2018
* About: Sum digits and Palindromes useing both iterative and recursive methods
**/

function setup() {
console.log(sumDigits(125));
console.log(sumDigitsRec(132));
console.log(palindrome("racecar"));
console.log(recPalindrome("rAcecar"))
}

/**
* Iterative version of sum digits
* @param {number} number non-negative integer to return sum of its digits
*/
function sumDigits(number){
  var n = 0
  num = number.toString().split('');
  for(var i in num){
    n += +num[i];
  }
  return n;
}
/**
Recursive version of sum digits
@param {number} number non-negative integer to return sum of its digits
*/
function sumDigitsRec(n){
  if (n<1) {
    return 0;
  }
  return n%10+sumDigitsRec(floor(n/10));
}

/**
Iterative version of palindromes
@param {string} word word to check if it is a palindrome
*/
function palindrome(word){
letters=word.toLowerCase().split('');
var len=word.length;

for (i=0; i<len/2; i++){
  if (letters[i]!==letters[len-i-1]){ //compares first and last characters
    return false;
  }
}
    return true;
}

/**
Recursive version of palindrome
@param {string} word word to check if it is a palindrome
*/
function recPalindrome(str){
  characters=str.toLowerCase().split('');
  var leng=str.length;
  if (leng===0 || leng===1){
    return true;
  }
  if (characters[0]==characters[leng-1]){
    return recPalindrome(str.slice(1, leng-1)); //cuts the first and last letters of the word
  }
    return false;
}

/*
Pitfalls of Recursion
Call stack increases with every recursive call, which slow things down
and takes up more memory than iterative version
Can crash the stack
A stack overflow is an undesirable condition in which a particular computer program
 tries to use more memory space than the call stack has available.
 In programming, the call stack is a buffer that stores requests that need to be handled.
*/


/*thought process
  var a=n%10;
  var b=floor(n/10);
  var c=b%10
  var d=floor(b/10);
  var e=d%10
  console.log(e/10)
  var sum=a+c+e;
*/
