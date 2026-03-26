// 1. إنشاء مصفوفة الوجبات
let lunches = [];

// 2. إضافة وجبة إلى نهاية القائمة
function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

// 3. إضافة وجبة إلى بداية القائمة
function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// 4. إزالة آخر وجبة من القائمة
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = array.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return array;
}

// 5. إزالة أول وجبة من القائمة
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = array.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return array;
}

// 6. اختيار وجبة عشوائية
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

// 7. عرض قائمة الطعام بالكامل
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    // استخدام join لدمج العناصر مع فاصل نصي
    console.log(`Menu items: ${array.join(", ")}`);
  }
}