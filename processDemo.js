console.log("process1", process);
console.log("process2", process.argv);
console.log("process3", process.argv[3]);

console.log(process.env);

console.log("process.pid", process.pid);

console.log("process.cwd()", process.cwd());

console.log("process.title", process.title);

console.log("process.memoryUsage()", process.memoryUsage());

console.log("process.uptime()", process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with: ${code}`);
});

process.exit();

console.log("HOLA");
