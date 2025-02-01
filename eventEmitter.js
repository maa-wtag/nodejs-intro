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

// multiple listeners for an event
myEmitter.on("data", (data) => {
  console.log(`Listener 1 received data: ${data}`);
});

myEmitter.on("data", (data) => {
  console.log(`Listener 2 received data: ${data}`);
});

myEmitter.emit("data", "Event-driven programming");

// one time listener
myEmitter.once("login", (user) => {
  console.log(`${user} has logged in`);
});

myEmitter.emit("login", "Alice"); // Triggers the event
myEmitter.emit("login", "Bob"); // Does not trigger the event

// remove listener
const greet = (name) => console.log(`Hello, ${name}!`);

myEmitter.on("greet", greet);

myEmitter.emit("greet", "Node.js"); // Output: Hello, Node.js

myEmitter.off("greet", greet);

myEmitter.emit("greet", "Node.js"); // No output

// error
myEmitter.on("error", (err) => {
  console.error("Error occurred:", err.message);
});

myEmitter.emit("error", new Error("Something went wrong"));

// monitor
myEmitter.on("test", () => console.log("Test 1"));
myEmitter.on("test", () => console.log("Test 2"));

console.log(myEmitter.listenerCount("test")); // Output: 2

myEmitter.setMaxListeners(15);

// custom events
const userEmitter = new EventEmitter();

userEmitter.on("userLoggedIn", (username) => {
  console.log(`${username} logged in`);
});

userEmitter.emit("userLoggedIn", "John");

// event driven streams
const fs = require("fs");

const readStream = fs.createReadStream("example.txt");
readStream.on("data", (chunk) => {
  console.log("Chunk received:", chunk.toString());
});
readStream.on("end", () => {
  console.log("End of file");
});

// base class
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myInstance = new MyEmitter();

myInstance.on("customEvent", (data) => {
  console.log("Received:", data);
});

myInstance.emit("customEvent", "Hello from custom class!");

// example
import { EventEmitter } from "events"; // Or const EventEmitter = require('events');
const exampleEmitter = new EventEmitter();
exampleEmitter.on("my-event", (data) => {
  console.log("my-event was emitted with data:", data);
});

exampleEmitter.on("another-event", () => {
  console.log("another-event was emitted");
});

exampleEmitter.emit("my-event", { message: "Hello!" }); // Triggers the first listener
exampleEmitter.emit("another-event"); // Triggers the second listener

// example 2
import { EventEmitter } from "events";

// Create an emitter
const anotherNewEmitter = new EventEmitter();

// Register a listener for the 'greet' event
anotherNewEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Register another listener for the same event
anotherNewEmitter.on("greet", () => {
  console.log("How are you doing?");
});

// Emit the 'greet' event
anotherNewEmitter.emit("greet", "Alice");

myEmitter.once("special-event", () => {
  console.log("This will only be logged once for the special-event");
});

myEmitter.emit("special-event"); // Logs the message
myEmitter.emit("special-event"); // Does nothing

const myListener = () => {
  console.log("This is myListener");
};

myEmitter.on("my-event", myListener);
myEmitter.emit("my-event"); // Logs "This is myListener"
myEmitter.off("my-event", myListener);
myEmitter.emit("my-event"); // Does nothing

myEmitter.on("event1", () => console.log("Event 1 Listener 1"));
myEmitter.on("event1", () => console.log("Event 1 Listener 2"));
myEmitter.on("event2", () => console.log("Event 2 Listener"));

myEmitter.removeAllListeners("event1"); // Removes both listeners for 'event1'
myEmitter.emit("event1"); // Does nothing
myEmitter.emit("event2"); // Logs "Event 2 Listener"

myEmitter.on("event-a", () => {});
myEmitter.on("event-b", () => {});

console.log(myEmitter.eventNames()); // Output: ['event-a', 'event-b']

myEmitter.on("event-a", () => {});
myEmitter.on("event-b", () => {});

console.log(myEmitter.eventNames()); // Output: ['event-a', 'event-b']

myEmitter.on("error", (err) => {
  console.error("Whoops! An error occurred:", err);
});

myEmitter.emit("error", new Error("Something went wrong!"));

// class: EventEmitter
import { EventEmitter } from "events";

class MyClass extends EventEmitter {
  constructor() {
    super(); // Don't forget to call super() in the constructor
  }

  doSomething() {
    // ... some logic ...
    this.emit("my-custom-event", { data: "some data" });
  }
}

const myEventInstance = new MyClass();

myEventInstance.on("my-custom-event", (data) => {
  console.log("Custom event received:", data);
});

myEventInstance.doSomething();

// events emitter
import { EventEmitter } from "events"; // Or const EventEmitter = require('events');
const exapmleEmitter = new EventEmitter();
exapmleEmitter.on("my-event", (data) => {
  console.log("my-event was emitted with data:", data);
});

exapmleEmitter.on("another-event", () => {
  console.log("another-event was emitted");
});

myEmitter.emit("my-event", { message: "Hello!" }); // Triggers the first listener
myEmitter.emit("another-event"); // Triggers the second listener

import { EventEmitter } from "events";

// Create an emitter
const rmEmitter = new EventEmitter();

// Register a listener for the 'greet' event
rmEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Register another listener for the same event
rmEmitter.on("greet", () => {
  console.log("How are you doing?");
});

// Emit the 'greet' event
rmEmitter.emit("greet", "Alice");

myEmitter.once("special-event", () => {
  console.log("This will only be logged once for the special-event");
});

myEmitter.emit("special-event"); // Logs the message
myEmitter.emit("special-event"); // Does nothing

const myNewListener = () => {
  console.log("This is myListener");
};

myNewListener.on("my-event", myListener);
myNewListener.emit("my-event"); // Logs "This is myListener"
myNewListener.off("my-event", myListener);
myNewListener.emit("my-event"); // Does nothing

myEmitter.on("event1", () => console.log("Event 1 Listener 1"));
myEmitter.on("event1", () => console.log("Event 1 Listener 2"));
myEmitter.on("event2", () => console.log("Event 2 Listener"));

myEmitter.removeAllListeners("event1"); // Removes both listeners for 'event1'
myEmitter.emit("event1"); // Does nothing
myEmitter.emit("event2"); // Logs "Event 2 Listener"

myEmitter.on("count-event", () => {});
myEmitter.on("count-event", () => {});

console.log(myEmitter.listenerCount("count-event")); // Output: 2

myEmitter.on("event-a", () => {});
myEmitter.on("event-b", () => {});

console.log(myEmitter.eventNames()); // Output: ['event-a', 'event-b']

myEmitter.on("error", (err) => {
  console.error("Whoops! An error occurred:", err);
});

myEmitter.emit("error", new Error("Something went wrong!"));

// extend event emitter
import { EventEmitter } from "events";

class MyClass extends EventEmitter {
  constructor() {
    super(); // Don't forget to call super() in the constructor
  }

  doSomething() {
    // ... some logic ...
    this.emit("my-custom-event", { data: "some data" });
  }
}

const myEventEmitterInstance = new MyClass();

myEventEmitterInstance.on("my-custom-event", (data) => {
  console.log("Custom event received:", data);
});

myEventEmitterInstance.doSomething();

import { EventEmitter } from "events";
import https from "https";

class RequestEmitter extends EventEmitter {
  get(url) {
    this.emit("start", url);
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          this.emit("data", data);
          this.emit("end", res.statusCode);
        });
      })
      .on("error", (err) => {
        this.emit("error", err);
      });
  }
}

const myRequest = new RequestEmitter();

myRequest.on("start", (url) => {
  console.log(`Starting request to: ${url}`);
});

myRequest.on("data", (data) => {
  console.log("Received data:", data.substring(0, 50)); // Log a portion of the data
});

myRequest.on("end", (statusCode) => {
  console.log(`Request finished with status code: ${statusCode}`);
});

myRequest.on("error", (err) => {
  console.error("Request error:", err);
});

myRequest.get("https://www.google.com");

import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }

  sendMessage(msg) {
    // Emit 'message' event
    this.emit("message", msg);
  }
}

const myEventEmitter = new MyEmitter();

// Add event listener
myEventEmitter.on("message", (msg) => {
  console.log("Message received:", msg);
});

// Trigger event
myEventEmitter.sendMessage("Hello World");

class OrderSystem extends EventEmitter {
  createOrder(order) {
    // Process order...
    this.emit("orderCreated", order);

    if (order.priority === "high") {
      this.emit("highPriority", order);
    }
  }
}

const orderSystem = new OrderSystem();

// Multiple listeners for same event
orderSystem.on("orderCreated", (order) => {
  console.log("Notification sent to customer:", order.id);
});

orderSystem.on("orderCreated", (order) => {
  console.log("Order logged in system:", order.id);
});

// Separate listener for high priority
orderSystem.on("highPriority", (order) => {
  console.log("High priority order:", order.id);
});

class Connection extends EventEmitter {
  connect() {
    // Maximum listeners warning
    console.log("Max listeners:", this.getMaxListeners());

    // Increase max listeners if needed
    this.setMaxListeners(15);

    // List all event names
    console.log("Events:", this.eventNames());

    // Count listeners
    console.log("Connect listeners:", this.listenerCount("connect"));
  }
}

const connection = new Connection();

// Once - listener called only once
connection.once("connect", () => {
  console.log("Connected once");
});

// Regular listener
const connectHandler = () => console.log("Connected");
connection.on("connect", connectHandler);

// Remove specific listener
connection.removeListener("connect", connectHandler);

// Remove all listeners for an event
connection.removeAllListeners("connect");

class DataProcessor extends EventEmitter {
  processData(data) {
    try {
      if (!data) {
        throw new Error("No data provided");
      }

      this.emit("processing", data);
      // Process data...
      this.emit("completed", data);
    } catch (error) {
      this.emit("error", error);
    }
  }
}

const dataProcessor = new DataProcessor();

// Error handler - ALWAYS add this
dataProcessor.on("error", (error) => {
  console.error("Processing error:", error);
});

// Other event handlers
dataProcessor.on("processing", (data) => {
  console.log("Processing:", data);
});

dataProcessor.on("completed", (data) => {
  console.log("Completed:", data);
});

class FileProcessor extends EventEmitter {
  async processFiles(files) {
    this.emit("start", files.length);

    for (const file of files) {
      try {
        this.emit("processing", file);
        await this.processFile(file);
        this.emit("processed", file);
      } catch (error) {
        this.emit("error", error);
      }
    }

    this.emit("complete");
  }

  async processFile(file) {
    // Simulate async processing
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return file;
  }
}

const asyncProcessor = new FileProcessor();

asyncProcessor.on("start", (totalFiles) => {
  console.log(`Starting to process ${totalFiles} files`);
});

asyncProcessor.on("processing", (file) => {
  console.log(`Processing ${file}`);
});

asyncProcessor.on("processed", (file) => {
  console.log(`Finished ${file}`);
});

asyncProcessor.on("complete", () => {
  console.log("All files processed");
});

const EventEmitter = require("events");
const myEvEmitter = new EventEmitter();

myEvEmitter.on("myEvent", (data) => {
  console.log("Event occurred:", data);
});

myEvEmitter.emit("myEvent", "Hello, World!");

myEvEmitter.on("multipleListeners", () => console.log("Listener 1"));
myEvEmitter.on("multipleListeners", () => console.log("Listener 2"));
myEvEmitter.emit("multipleListeners");

myEvEmitter.on("greet", (name, age) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
});
myEvEmitter.emit("greet", "Alice", 30);

myEvEmitter.once("onceEvent", () => console.log("This will only run once"));

const listener = () => console.log("Event occurred");
myEvEmitter.on("removeMe", listener);
myEvEmitter.removeListener("removeMe", listener);
// or
myEvEmitter.removeAllListeners("removeMe");

myEvEmitter.on("error", (err) => {
  console.error("An error occurred:", err);
});
