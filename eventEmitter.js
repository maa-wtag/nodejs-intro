import { EventEmitter } from "events";

class FileProcessor extends EventEmitter {
  processFile(path, callback) {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        this.emit("error", err);
        return callback(err);
      }

      this.emit("data", data);
      callback(null, data);
    });
  }
}

// Usage
const processor = new FileProcessor();

processor.on("data", (data) => {
  console.log("Processing:", data);
});

processor.on("error", (err) => {
  console.error("Error event:", err);
});

processor.processFile("input.txt", (err, result) => {
  if (err) return console.error("Callback error:", err);
  console.log("Callback result:", result);
});

// event emitters
const EventEmitter = require("events");

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit("greet", "Node.js");

// event emitter
import { EventEmitter } from "events";

const newEmitter = new EventEmitter();

newEmitter.on("user-created", (user) => {
  console.log("A new user was created:", user.name);
  // Send a welcome email, update analytics, etc.
});

const newUser = { id: 123, name: "Alice" };
newEmitter.emit("user-created", newUser); // Triggers the listener registered for 'user-created'

// emitter
const EventEmitter = require("events");
const anotherEmitter = new EventEmitter();

anotherEmitter.on("myEvent", () => {
  console.log("Event triggered!");
});

anotherEmitter.emit("myEvent");

// emmit
const EventEmitter = require("events");

// Create an EventEmitter instance
const eEmitter = new EventEmitter();

// Register an event listener
eEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
eEmitter.emit("greet", "Node.js");
