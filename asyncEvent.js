const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("asyncEvent", async () => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Async data!"), 1000)
  );
  console.log(data);
});

myEmitter.emit("asyncEvent");

// async event handle
class FileProcessor extends EventEmitter {
  async processFiles(files) {
    try {
      for (const file of files) {
        // Emit before processing
        this.emit("processing", file);

        // Simulate async processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Emit after processing
        this.emit("processed", file);
      }
      this.emit("complete");
    } catch (error) {
      this.emit("error", error);
    }
  }
}

const processor = new FileProcessor();

// Async event handling
processor.on("processing", async (file) => {
  try {
    await someAsyncOperation(file);
    console.log("Processing:", file);
  } catch (error) {
    console.error("Processing error:", error);
  }
});
