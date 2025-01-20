function asyncOperation1() {
  return new Promise((resolve, reject) => {
    // ... do something asynchronous ...
  });
}

asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => {
    // ... and so on
  })
  .catch((err) => {
    // Handle errors
  });
