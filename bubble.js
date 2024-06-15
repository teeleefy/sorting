function bubbleSort(array) {
    let count = 0;
    let madeASwap = true;
    for(let i = 0; i < array.length; i++){
        while(madeASwap){
            madeASwap = false;
            for(j = 0; j < array.length-i; j++){
                count++;
                if(array[j] > array[j + 1]){
                    let copyJ = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = copyJ;
                    madeASwap=true;
                } 
            }
        }
    } 
    // console.log(count);
    return array;
}

module.exports = bubbleSort;