
function binarySearchRecursive(arr, ele, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === ele) {
        return arr[mid];
    }

    if (ele > arr[mid]) {
        return binarySearchRecursive(arr, ele, mid + 1, end);
    } else {
        return binarySearchRecursive(arr, ele, start, mid - 1);
    }
}

const arr = [2, 4, 6, 7, 9, 11, 19];
let ele = 7;

console.log(binarySearchRecursive(arr, ele)); // 7

ele = 8;

console.log(binarySearchRecursive(arr, ele)); // -1
