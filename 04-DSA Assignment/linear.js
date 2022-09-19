//Linear Search using for loop
let arr = [7, 5, 13, 18, 45, 39, 12]
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }
  return null
}
console.log(linearSearch([7, 5, 13, 18, 45, 39, 12], 39))

//Linear Search using while loop
function linearWhile(arr, item) {
  let i = 0;
  while (arr[i] !== item) {
    i++;
  }
  return i

}
console.log(linearWhile([7, 5, 13, 18, 45, 39, 12], 39))

//Linear Search using recursion method

function linearRecursion(arr, item, i = 0) {
  if (i > arr.length) return -1
  if (arr[i] == item) return i;
  return linearRecursion(arr, item, i + 1)

}
console.log(linearRecursion([7, 5, 13, 18, 45, 39, 12], 2))