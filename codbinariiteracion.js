function binarySearch(arr, ele) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
  
        if (arr[mid] === ele) {
            return arr[mid];
        }
  
        if (ele > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
  
    return -1;
}

const arr = [2, 4, 6, 7, 9, 11, 19];
let ele = 7;

console.log(binarySearch(arr, ele)); // 7

ele = 8-;

console.log(binarySearch(arr, ele)); // -1