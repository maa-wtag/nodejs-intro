const promisify = util.promisify;
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

readFileAsync("example.txt", "utf-8")
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });

// using async/await
(async () => {
  try {
    const data = await readFileAsync("example.txt", "utf-8");
    console.log("File contents:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
})();

// callback
function fetchData(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      callback(null, "Data fetched successfully!");
    } else {
      callback(new Error("Failed to fetch data"), null);
    }
  }, 1000);
}

// promise
function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

// Using Promises
fetchDataAsync()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Using async/await
(async () => {
  try {
    const data = await fetchDataAsync();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();

// callback based
const fs = require("fs");

fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully!");
});

// promise based
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

writeFileAsync("example.txt", "Hello, World!")
  .then(() => console.log("File written successfully!"))
  .catch((err) => console.error("Error writing file:", err));

// custom wrapper
function promisifyFunction(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}

// Example: Using the wrapper with setTimeout
const delayedMessage = promisifyFunction((ms, callback) => {
  setTimeout(() => callback(null, `Waited for ${ms}ms`), ms);
});

delayedMessage(2000)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

// multiple promises
const fs = require("fs").promises;

(async () => {
  try {
    const results = await Promise.all([
      fs.readFile("file1.txt", "utf-8"),
      fs.readFile("file2.txt", "utf-8"),
    ]);
    console.log("Files:", results);
  } catch (err) {
    console.error("Error:", err);
  }
})();
