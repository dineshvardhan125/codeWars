// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// my solution

//1 . // 
const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// 2 . //

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

