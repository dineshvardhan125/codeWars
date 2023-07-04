// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
function past(h, m, s){
  let hours = 3600000 * h
  let mints = 60000 * m
  let secos = 1000 * s
  return (hours + mints + secos)
}