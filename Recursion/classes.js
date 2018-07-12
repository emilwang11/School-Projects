/**
* @author Emily Wang <write2emily@hotmail.com>
*  Date: May 18th, 2018
* About: Sum digits and Palindromes useing both iterative and recursive methods
**/

//var sumDigits;

function setup() {

sumDigits= new SumDigits(647);
console.log(sumDigits.iterativeSum());
console.log(sumDigits.recursiveSum());
}

class SumDigits{

  constructor(number){
    this.num=number.toString().split('');
    this.number=number;
  }

  iterativeSum(){
    var n = 0
    for(var i in this.num){
      n += +this.num[i];
    }
    return n;
  }


 recursiveSum(){
  if (this.number<1) {
    return 0;
  }
  return this.number%10+recursiveSum(floor(this.number/10));
}
}
