function selectionSort(array) {
    let count = 0;
    // let madeASwap = true;
    let smallest ={index: null, value: null};
    for(let i = 0; i < array.length; i++){
        // console.log('OUTER I LOOP...');
        smallest.index = i+1;
        smallest.value = array[i+1];
       for(j = i+1; j < array.length; j++){
            count++;
            if(array[j] < array[i] && array[j] < smallest.value){
                smallest.index = j;
                smallest.value = array[j]  
            } 
            // console.log(`I: ${array[i]} && J: ${array[j]}`)
        }
        //set i to equal smallest and smallest to equal i;
        if(array[i] > smallest.value){
            let copyI = array[i];
            array[i] = smallest.value;
            array[smallest.index]= copyI;
        }
        // console.log(array);
    } 
    // console.log(count);
    return array;
}

module.exports = selectionSort;