import crypto from "crypto";

const hash = crypto.createHash("sha256");
hash.update("password1234");
console.log(hash.digest("hex"));

crypto.randomBytes(16, (err, buff) => {
  if (err) throw err;
  // print hex
  console.log(buff.toString("hex"));
});

// createCipheriv & createDecipheriv

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // Generate a shared secret
const iv = crypto.randomBytes(16); // generate iv

// Create Cipher
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello this is a secret code", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

// Decrypt encrypted data using same algorithm and secretkey
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
