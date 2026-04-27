function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let candidate = max;

  while (true) {
    let isDivisible = true;

    // هل يقبل القسمة على كل الأرقام؟
    for (let i = min; i <= max; i++) {
      if (candidate % i !== 0) {
        isDivisible = false;
        break;
      }
    }

    // إذا نجح → هذا هو الحل
    if (isDivisible) {
      return candidate;
    }

    // إذا فشل → نجرب الرقم التالي
    candidate += max;
  }
}


console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
console.log(smallestCommons([2, 11]));