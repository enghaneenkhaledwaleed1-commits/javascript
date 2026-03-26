function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const masked = name[0] + "*".repeat(name.length - 2) + name[name.length - 1];

  return masked + domain;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
