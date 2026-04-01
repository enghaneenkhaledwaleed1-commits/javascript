let num = 5;

function factorialCalculator(n) {
  let result = 1;   // استخدمت let لأنه يتغير
  for (let i = 1; i <= n; i++) {  // تبدأ من 1
    result *= i;
  }
  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);