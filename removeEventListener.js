const listener = (msg) => console.log(msg);

myEmitter.on("message", listener);
myEmitter.emit("message", "Hello, World!");

// Remove the listener
myEmitter.off("message", listener);
myEmitter.emit("message", "This will not be logged");
