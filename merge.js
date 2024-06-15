function merge(arr1, arr2) {
    let mergedArray = [];
    let checkIndex1 = 0;
    let checkIndex2 = 0;
    while(checkIndex1 < arr1.length && checkIndex2 < arr2.length){
        if(arr1[checkIndex1] <= arr2[checkIndex2]){
            mergedArray.push(arr1[checkIndex1]);
            // console.log(`${arr1[checkIndex1]} is smaller than ${arr2[checkIndex2]}. Push ${arr1[checkIndex1]}.}`)
            checkIndex1++; 
        }
        if(arr2[checkIndex2] < arr1[checkIndex1]){
            mergedArray.push(arr2[checkIndex2]);
            // console.log(`${arr2[checkIndex2]} is smaller than ${arr1[checkIndex1]}. Push ${arr2[checkIndex2]}.}`)
            checkIndex2++; 
        }
    }
    
    while(checkIndex1 < arr1.length){
        mergedArray.push(arr1[checkIndex1]);
        // console.log(`Array 2 is done. Push ${arr1[checkIndex1]}.}`)
        checkIndex1++; 
    }

    while(checkIndex2 < arr2.length){
        mergedArray.push(arr2[checkIndex2]);
        // console.log(`Array 1 is done. Push ${arr2[checkIndex2]}.}`)
        checkIndex2++; 
    }
    
    return mergedArray;
}




function mergeSort(arr) {
    //check for a short array that doesn't need to be split
    if(arr.length <=1) return arr;
    //check for mid point of array
    const midPoint = Math.floor(arr.length/2);
    let leftSide = mergeSort(arr.slice(0, midPoint));
    let rightSide = mergeSort(arr.slice(midPoint));
    return merge(leftSide, rightSide);
    
}

module.exports = { merge, mergeSort}; 