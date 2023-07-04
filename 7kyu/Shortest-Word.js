// Instructions
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// my solution.
function findShort(s){
  let arr = s.split(' ')
  let small = arr[0]
  arr.forEach((e,i)=>{
    if(arr[i].length < small.length){
      small = arr[i]
    }
  })
  return small.length
}