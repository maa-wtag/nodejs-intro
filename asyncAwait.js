async function myAsyncFunction() {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    // ... and so on
  } catch (err) {
    // Handle errors
  }
}
