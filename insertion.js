function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i];
  
      for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
        // console.log(1, arr)
      }
    
      arr[j + 1] = currentValue;
    //   console.log(2, arr)
    }
  
    return arr;
  }


// function insertionSort(array) {
//     let moveLeft = false;
//     for(let i = 0; i < array.length; i++){
//         let moveNum = array[i+1];
//         if(moveNum < array[i]){
//             moveLeft = true;
//         }
//         while(moveLeft){
//             for(let j = i; j>=0; j--){
//                 // console.log(`I: ${array[i]} && J: ${array[j]}`)
//                 if(i === 0){
//                     let copyI = array[i];
//                     array[i]= moveNum;
//                     array[i+1]=copyI;
//                 } else {
//                     let checkIfGreaterThan = array[j-1]
//                     if(moveNum > checkIfGreaterThan){
//                         let copyJ = array[j];
//                         array[j]= moveNum;
//                         array[i+1]=copyI;
//                     }
//                     let copy = array[j];
//                     array[i+1]=
//                     console.log(`You should swap I and J`)
//                     moveLeft = false;
//                 }
                
//         }
//         }
        
//     }
//     return array;
// }

module.exports = insertionSort;