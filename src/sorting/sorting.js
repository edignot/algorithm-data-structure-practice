// Sorting algorithms

// Bubble sort approach:
// Time complexity: Best case (items are already sorted): O(n), Average case: O(n^2) ,Worst case (all items sorted in opposite order): O(n^2)
// Space complexity: O(1)
export const bubbleSort = ([...items]) => {
    for (let a = 0; a < items.length - 1; a++) {
        for (let b = a + 1; b < items.length; b++) {
            if (items[a] > items[b]) {
                const newA = items[b];
                items[b] = items[a];
                items[a] = newA;
            }
        }
    }
    return items;
};

// Quicksort approach:
// Time complexity: Best case (random order): O(n * log n), Worst case (items are already sorted): O(n^2)
// Space complexity: O(n) - recursive calls
export const quickSort = (items) => {
    const copiedArr = items;
    if (copiedArr.length <= 1) {
        return copiedArr;
    }
    const smallerArr = [];
    const largerArray = [];
    const pivotEl = copiedArr.shift();
    const equalArray = [pivotEl];

    while (copiedArr.length) {
        const currentEl = copiedArr.shift();
        currentEl === pivotEl && equalArray.push(currentEl);
        currentEl > pivotEl && largerArray.push(currentEl);
        currentEl < pivotEl && smallerArr.push(currentEl);
    }

    const smallerElSorted = quickSort(smallerArr);
    const largerElSorted = quickSort(largerArray);
    return smallerElSorted.concat(equalArray, largerElSorted);
};

// Merge sort approach:
// Time complexity: O(n * log n)
// Space complexity: O(n) - recursive calls
export const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    const middleIndex = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    const leftSortedArr = mergeSort(leftArr);
    const rightSortedArr = mergeSort(rightArr);

    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while (
        leftArrIndex < leftSortedArr.length ||
        rightArrIndex < rightSortedArr.length
    ) {
        if (
            leftArrIndex >= leftSortedArr.length ||
            leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]
        ) {
            mergedArr.push(rightSortedArr[rightArrIndex]);
            rightArrIndex++;
        } else {
            mergedArr.push(leftSortedArr[leftArrIndex]);
            leftArrIndex++;
        }
    }
    return mergedArr;
};
