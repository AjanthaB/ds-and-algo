# Bubble Sort Algorithm

## Bubble Sort algorithm is the simplest algorithm. Take the adjacent element in the array and compare, and swap if not in correct order. This is not suitable for large set of data because, complexity of the algorithms is quite large.


## Example

    Original Array
    [2, -100, 5, 3, -200, 100, 0]

Compare the first adjacent elements **2** and **-100** and **-100** is less than **2**, so swap.

    after the first step
    [-100, 2, 5, 3, -200, 100, 0]

Next, Compare the second adjacent elements **2** and **5** and **5** is not less than **2**, so no swap.

Move to Next step, Compare the next adjacent elements **5** and **3** and **3** is nless than **5**, so swap.

    after the 3td step
    [-100, 2, 3, 5, -200, 100, 0]

    after the 4th step
    [-100, 2, 3, -200, 5, 100, 0]

    after the 5th step
    [-100, 2, 3, -200, 5, 100, 0]

    after the last step
    [-100, 2, 3, -200, 5, 0, 100]

 you can see after first iteration, largest value is moved to the end, so in next iterations we can skip the last elements one by one


 ## Complexity of the Algorithm

 **Time complexity** of the bubble sort algorithm is **O(n^2)** even if the array sorted.
 We can optimized it by breaking the for loop if no swap happens(no swaps means already sorted). After optimized we can bring the best case time complexity to **O(n)**

 Worst case(array in descendant order) time complexity is **O(n^2)**

 **Auxiliary Space**: O(1) because

Is bubble sort algorithm is Stable? Yes, it is
