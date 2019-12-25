// This is the first step
// This function only adds two numbers

function add(param1: number, param2: number): number {
  return param1 + param2;
}

//console.log(add(2, 3));
//console.log(add(4, 5));

// The second part of the function
// It will take any quantity of numbers and add them together.

function add2(...param1: number[]): number {
  let total = 0;
  param1.forEach(num => {
    total += num;
  });
  return total;
}

console.log(add2(2, 3, 4, 5, 6));
console.log(add2(4, 5, 4, 4));
