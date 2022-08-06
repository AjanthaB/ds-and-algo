


const arr = [2, -100, 5, 3, -200, 100, 0];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) { // after each iteration last element will be sorted value, reduce the iteration each time
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    console.log(arr);
}


bubbleSort(arr);
