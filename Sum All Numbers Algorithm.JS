function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1,2]));
console.log(sumAll([2,5]));
console.log(sumAll([1,6]));
console.log(sumAll([6,1]));
console.log(sumAll([6,2]));
console.log(sumAll([3,5]));
console.log(sumAll([2,6]));
console.log(sumAll([8,1]));

