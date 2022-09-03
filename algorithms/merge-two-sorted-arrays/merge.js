// Here I have added 3 merge function to merge given two sorted arrays

// Method 1:
// Time complexity: O(m*n)
// Space Complexity: O(2)
function merge1(arr1, arr2) {
    // [1,3,7], [2,5,9,11]
    console.time('merge')
    for (let i = 0; i < arr2.length; i++) {
        let j = 0;
        let tmp = arr2[i]
        for (j = 0; j < arr1.length; j++) {
            if (tmp < arr1[j]) {
                const tmp2  = arr1[j];
                arr1[j] = tmp;
                tmp = tmp2;
            }
        }
        arr1.push(tmp);
    }

    console.log(arr1);
    console.timeEnd('merge');
    return arr1;
}

// Method 2:
// Time complexity: O(m+n)
// Space Complexity: O(m+n)
function merge2(arr1, arr2) {
    console.time("merge")
    let i = 0, j = 0;
    const arr3 = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i++]);
        } else {
            arr3.push(arr2[j++]);
        }
    }

    while ( i < arr1.length) {
        arr3.push(arr1[i++]);
    }

    while ( j < arr2.length) {
        arr3.push(arr2[j++]);
    }

    console.log(arr3);
    console.timeEnd("merge");
    return arr3;
}

// Method 2:
// Time complexity: O(m*n)
// Space Complexity: O(1)
function merge3(arr1, arr2) {
    console.time("merge")
    for (let i = arr2.length - 1; i >= 0; i--) { // start from last element in array 2

        let last = arr1[arr1.length - 1];
        let j;
        for(j = arr1.length - 2; j >= 0 && arr1[j] > arr2[i]; j--) {
            arr1[j+1] = arr1[j]
        }

        if (last > arr2[i]) {
            arr1[j+1] = arr2[i];
            arr2[i] = last;
        }
    }
    const arr = arr1.concat(arr2);
    console.log(arr);
    console.timeEnd("merge");

    return arr;
}