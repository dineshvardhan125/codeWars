// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// my solution.

function positiveSum(arr) {
  let filterArr = arr.filter(a => a >= 0)
  let sum = filterArr.reduce((acc,a)=>acc+a,0)
  return sum
  
}