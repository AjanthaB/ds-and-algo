
/**
 * @desc Swap te element to a given index
 * @param arr array need to be sorted
 * @param currentIndex index of the current value
 * @param swapToIndex index to swap
 */
function swap(arr, currentIndex, swapToIndex) {
  const tmpValue = arr[swapToIndex];
  arr[swapToIndex] = arr[currentIndex];
  arr[currentIndex] = tmpValue;
}

/**
 * @desc Sort the given array using selection sort
 * @param arr array of numbers
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMinValue = i; // track the index of min value
    let minValue = arr[i]; // track te minimum value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        indexOfMinValue = j;
      }
    }
    swap(arr, i, indexOfMinValue);
  }
}


const arr = [5,4,7,11,3,2,1];
selectionSort(arr);
console.log(arr);
