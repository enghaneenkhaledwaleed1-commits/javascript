function pyramid(char, rows, inverted) {
  let result = "\n"; // يبدأ النص بسطر فارغ (newline)

  if (!inverted) {
    // الحالة العادية: رأس الهرم للأعلى
    for (let i = 0; i < rows; i++) {
      let spaces = " ".repeat(rows - i - 1);   // عدد المسافات قبل الرموز
      let chars = char.repeat(2 * i + 1);      // عدد الرموز في السطر (يزيد 2 كل مرة)
      result += spaces + chars + "\n";         // نضيف السطر للناتج
    }
  } else {
    // الحالة المقلوبة: رأس الهرم للأسفل
    for (let i = rows - 1; i >= 0; i--) {
      let spaces = " ".repeat(rows - i - 1);   // عدد المسافات قبل الرموز
      let chars = char.repeat(2 * i + 1);      // عدد الرموز في السطر
      result += spaces + chars + "\n";         // نضيف السطر للناتج
    }
  }

  return result; // يرجع النص النهائي
}
console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
