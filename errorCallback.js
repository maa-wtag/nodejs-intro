function doSomethingAsync(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const hasError = Math.random() > 0.5; // Simulate a 50% chance of error
    if (hasError) {
      callback(new Error("Something went wrong!"));
    } else {
      callback(null, "Operation successful!");
    }
  }, 1000);
}

doSomethingAsync((err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Result:", result);
  }
});

// callback hell

asyncOperation1((err, result1) => {
  if (err) {
    /* handle error */
  }
  asyncOperation2(result1, (err, result2) => {
    if (err) {
      /* handle error */
    }
    asyncOperation3(result2, (err, result3) => {
      if (err) {
        /* handle error */
      }
      // ... and so on
    });
  });
});

// error-first callback

import fs from "fs";

// Reading file with callback
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

// callback hell

// Problematic nested callbacks
fs.readFile("file1.txt", "utf8", (err1, data1) => {
  if (err1) return console.error(err1);

  fs.readFile("file2.txt", "utf8", (err2, data2) => {
    if (err2) return console.error(err2);

    fs.writeFile("output.txt", data1 + data2, (err3) => {
      if (err3) return console.error(err3);
      console.log("Files combined successfully");
    });
  });
});


// error-first callback
function asyncOperation(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const error = null; // or some error object if an error occurred
    const result = 'Operation completed';
    callback(error, result);
  }, 1000);
}

asyncOperation((err, result) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('Result:', result);
});
