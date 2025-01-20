function doAsync(callback) {
  setTimeout(() => {
    try {
      const result = "Operation completed";
      callback(null, result); // Success: error is null
    } catch (error) {
      callback(error); // Error case
    }
  }, 1000);
}

// Usage
doAsync((error, result) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Success:", result);
});
