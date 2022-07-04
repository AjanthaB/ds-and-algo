# Selection Sort Algorithm

## Selection algorithm iterate through the array and find the minimum value, and swap it with the zeroth element. Next start from the second element and repeating this process until the end of the array.

## Example

```js
const array = [5, 3, 8, 1];
```

- Step 1: In first iteration, go trough the whole array and find the minimum value(minimum = 1). Swap it with the first element. Now new array will be look likes below

```js
const array = [1, 3, 8, 5];
```

- Step 2: Next, go through the array stating from second element and find the minimum value(this time minimum is 3). No need to swap, because value is in the correct position

```js
const array = [1, 3, 8, 5];
```

- Step 3: Repeat the process, this time value is 5, swap it with 8

```js
const array = [1, 3, 5, 8];
```

Now you can see, array is sorted, last element will be sorted automatically


============


## Complexity fo te Selection Sort
