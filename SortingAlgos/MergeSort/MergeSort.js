//Big O (n log(n))
const mergeSort = (arr)=>{
    const length = arr.length;

    if(length === 1){
        return arr;
    };

    const mid = Math.floor(length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid, length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray)=>{
    const sortedArray = [];

    while(leftArray.length > 0 && rightArray.length > 0){
        leftArray[0] < rightArray[0] ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
    };

    return sortedArray.concat(leftArray.concat(rightArray));
};

const inputArr = [3, 5, 2, 90, 4, 7, 1, 1,2 , 3, 42, 5];

console.log(mergeSort(inputArr));