const BubbleSort = arr => {
    let swapping = true;

    while(swapping){
        swapping = false;

        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                
                swap(arr, i, (i + 1));

                swapping = true;
            };
        };
    };

    return arr;
};


const swap = (arr, indexOne, indexTwo) => {
    const temp = indexTwo;

    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};
