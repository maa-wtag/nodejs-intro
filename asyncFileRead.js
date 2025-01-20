import fs from "fs";

function myFileReader(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      // If an error occurred, call the callback with the error
      return callback(err);
    }
    // If successful, call the callback with the data
    callback(null, data);
  });
}

// Using the callback pattern:
myFileReader("my-file.txt", (err, fileContent) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", fileContent);
});

console.log("Reading file in progress..."); // This will be logged before the file is read
