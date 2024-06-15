/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, firstIndex=0, lastIndex=array.length-1){
    //helper function that will swap two number values in an array at certain indices 
    function swapPlaces(array, index1, index2){
        [array[index1], array[index2]] = [array[index2], array[index1]]
    }

    //set your pivot value... pivot will be the first element
    let pivot = array[firstIndex];

    //set this to start at beginning of array. this will keep track of the furthest right value that is smaller than the pivot's value
    let indexOfLastNumLessThanPivot = firstIndex;

    //loop through the rest of the array from array[1]--> array[lastIndex]
    //each time you find a number that is smaller than the pivot's value, increment indexOfLastNumLessThanPivot, then swapPlaces with the current index i and that of indexOfLastNumLessThanPivot
    for (let i = firstIndex + 1; i <= lastIndex; i++) {
        if (pivot > array[i]) {
            //you found another number smaller that the pivot's value, so you make more room for another smaller number to be on its left side
            indexOfLastNumLessThanPivot++;
            //now swap i with that indexOfLastNumLessThanPivot
          swapPlaces(array, indexOfLastNumLessThanPivot, i);
        }
      }

      // Swap the pivot from the start the swapPoint
    //update where the new pivot's index will be based on the last smaller number
    let newPivotIndex= indexOfLastNumLessThanPivot;
    //swap pivot's value with last lowest number's value
  swapPlaces(array, firstIndex, newPivotIndex);
  return newPivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
      }
      return arr;
}

module.exports = {pivot, quickSort};