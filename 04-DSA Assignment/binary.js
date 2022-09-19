//binary search using Iterative Implementation.

let arr = [1, 23, 56, 7, 18, 9]
function binaryIteration(arr, x) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;
}
console.log(binaryIteration([1, 23, 56, 7, 18, 9], 23))


//binary search using Recursive Implementation.


function getMidPoint(arr, searchItem) {
  var length = arr.length;
  var midPoint = Math.floor(length / 2);
  var newArr = arr;
  console.log(arr);
  console.log("array midpoint value: " + arr[midPoint]);

  if (arr[midPoint] > searchItem) {

    var newArr = arr.slice(0, arr[midPoint]);
    return getMidPoint(newArr, searchItem);

  } else if (arr[midPoint] < searchItem) {

    var newArr = arr.slice(midPoint, arr.length);
    return getMidPoint(newArr, searchItem);

  } else {
    return arr
  }
}
console.log(getMidPoint([1, 23, 56, 7, 18, 9], 18))






