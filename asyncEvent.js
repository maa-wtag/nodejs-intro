const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("asyncEvent", async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Async data!"), 1000)
  );
  console.log(data);
});

myEmitter.emit("asyncEvent");
