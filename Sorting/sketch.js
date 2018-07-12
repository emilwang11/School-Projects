/**
* @author Emily Wang <write2emily@hotmail.com>
*  Date: Thursday March 29th 2018
* About: This program alphabetically sorts a list of letters using 3 different methods
**/

var bubbleArray=["r", "a", "b", "g", "a"]
var selectionArray=["h", "y","q", "d", "e"]
var sortArray=["w", "c", "j", "d", "z"]
var charValue=[]
var sortedLetters=[];

function setup() {
  console.time('bubbleSort');
  bubbleSort();
  console.timeEnd('bubbleSort');

  console.time('selectionSort');
  selectionSort();
  console.timeEnd('selectionSort')

  console.time('sort');
  sort(sortArray);
  console.log(sortArray);
  console.timeEnd('sort');
}

/**
 * Sorts letters using a bubble sorting algorithm
 */
function bubbleSort(){
  charValue=unchar(bubbleArray);
  {
    var swapped;
    do{
      swapped=false;
      for (var i=0; i<charValue.length-1; i++){
        if (charValue[i]>charValue[i+1]){
          var temp=charValue[i];
          charValue[i]=charValue[i+1];
          charValue[i+1]=temp
          swapped=true;
        }
      }
} while(swapped);
}
sortedLetters=char(charValue);
console.log(sortedLetters);
}

/**
 * Sorts letters using a selection sorting algorithm
 */
function selectionSort(){
wordssChar=unchar(selectionArray);
var smallestValue, temp;
for (var i=0; i<selectionArray.length; i++){
  smallestValue=i;
  for (var j=i+1; j<selectionArray.length; j++){
  if (selectionArray[j]<selectionArray[smallestValue]){
    smallestValue=j;
  }
}
temp=selectionArray[i];
selectionArray[i]=selectionArray[smallestValue];
selectionArray[smallestValue]=temp;
}
console.log(selectionArray);
}
/* bubble sorting is the slowest O(n^2), involves loop within loop
has to loop through multiple times
swaps are inefficient since its not the min or max value
compares two adjacent items and swaps them if they are out of order
Selection sort compares values to the current min value
less number of swaps for selection swap
array.sort uses TimSort, combination of insertion and merge sorts
 O(n Log n) time*/
