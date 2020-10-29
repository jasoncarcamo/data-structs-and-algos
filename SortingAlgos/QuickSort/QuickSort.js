// Big O (n^2)
const QuickSort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
      const pivotIndex = partition(array, leftBound, rightBound);

      QuickSort(array, leftBound, pivotIndex - 1);
      QuickSort(array, pivotIndex, rightBound);
    };

    return array;
  }
  
  const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivot) {
        leftIndex++;
      };

      while (array[rightIndex] > pivot) {
        rightIndex--;
      };

      if (leftIndex <= rightIndex) {
        swap(array, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      };
    };

    return leftIndex;
  };

  const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  };
  
  module.exports = {
    QuickSort,
    partition,
    swap
  };