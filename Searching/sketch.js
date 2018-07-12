/**
* @author Emily Wang <write2emily@hotmail.com>
*  Date: Thursday April 13th 2018
* About: This program can search an interger array using two different methods
**/

numList=[6,2,13,0,4,5,45,23,1,9,18,14,5,7,11,3,34,23];

function setup(){
console.time('linearSearch');
var linearAns=linearSearch(numList,13);
console.timeEnd('linearSearch');
console.log(linearAns);

console.time('binarySearch');
var binaryAns=binarySearch(numList,5);
console.timeEnd('binarySearch');
console.log(binaryAns);
//linear search is faster
}

/**
 * Performs a linear search
 * @param {number[]} list the array of int that will be sorted
 * @param {number} target the number that is being searched for
 */
function linearSearch(list,target){
	for (var i=0;i<list.length;i++) {
		if(list[i]===target){
			return i ;
		}
	}
	return -1;
}

/**
 * Performs a binary search
 * @param {number[]} list the array of int that will be sorted
 * @param {number} target the number that is being searched for
 */
function binarySearch(list,target){
list=sort(numList);
	maxValue=list.length;
	minValue=0;
	var midValue;

	while (minValue<maxValue){
		midValue=floor((maxValue+minValue)/2)
		if(list[midValue]<target){
			minValue=midValue+1;
		}
		else{
		maxValue=midValue;
		}
}
	if(minValue==maxValue && list[minValue]==target){
		return minValue;
	}
		else{
			return -1;
		}
}

//linear search-data does not need to be sorted before searching
//binary search-data needs to be sorted
//linear search is slower by 0.6841 seconds in this program because there are few values
//linear seach is O(n) algorithm, worst case is it finished n iterations of the loop
//binary search is O(log n) cuts range of items in half each timeEnd
//Linear search better for less elements, more elements binary is better
