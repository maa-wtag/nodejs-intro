function parallel(tasks, finalCallback) {
  let completed = 0;
  const results = [];

  tasks.forEach((task, index) => {
    task((err, result) => {
      if (err) {
        finalCallback(err);
        finalCallback = () => {}; // Ensure callback is called only once
        return;
      }

      results[index] = result;
      completed++;

      if (completed === tasks.length) {
        finalCallback(null, results);
      }
    });
  });
}

// Usage
const tasks = [
  (cb) => setTimeout(() => cb(null, "First"), 1000),
  (cb) => setTimeout(() => cb(null, "Second"), 500),
  (cb) => setTimeout(() => cb(null, "Third"), 800),
];

parallel(tasks, (err, results) => {
  if (err) return console.error(err);
  console.log("All tasks completed:", results);
});
