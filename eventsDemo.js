import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hola " + name);
}

function goodByeHandler(name) {
  console.log("Adios " + name);
}

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

myEmitter.on("error", (err) => {
  console.log("An Error occured:", err);
});

myEmitter.emit("error", new Error("Something went wrong"));
