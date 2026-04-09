function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
  let result = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

// create password variable
let password = generatePassword(12);

// log result
console.log("Generated password: " + password);