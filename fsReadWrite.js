function readFirstFile(callback) {
  fs.readFile("file1.txt", "utf8", callback);
}

function readSecondFile(firstData, callback) {
  fs.readFile("file2.txt", "utf8", (err, secondData) => {
    if (err) return callback(err);
    callback(null, firstData, secondData);
  });
}

function combineFiles(firstData, secondData, callback) {
  fs.writeFile("output.txt", firstData + secondData, callback);
}

// Usage
readFirstFile((err, data1) => {
  if (err) return console.error(err);

  readSecondFile(data1, (err, data1, data2) => {
    if (err) return console.error(err);

    combineFiles(data1, data2, (err) => {
      if (err) return console.error(err);
      console.log("Operation completed");
    });
  });
});

// fs watch
const fs = require("fs");

// Watch a file for changes
fs.watch("example.txt", (eventType, filename) => {
  console.log(`${filename} was modified with event type: ${eventType}`);
});
