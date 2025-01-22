import { EventEmitter } from "events";

// Create an event emitter
const orderEmitter = new EventEmitter();

// Listener for the "order-placed" event
orderEmitter.on("order-placed", (order) => {
  console.log(`Order placed: ${order.id}`);
  // Process payment, update inventory, send notifications, etc.
});

// Listener for the "order-placed" event to send a confirmation email
orderEmitter.on("order-placed", (order) => {
  console.log(`Sending confirmation email for order: ${order.id}`);
});

// Function to simulate placing an order
function placeOrder(order) {
  // ... do some processing ...
  orderEmitter.emit("order-placed", order); // Emit the event
}

// Place some orders
const order1 = { id: 1, items: ["Product A", "Product B"] };
const order2 = { id: 2, items: ["Product C"] };

placeOrder(order1);
placeOrder(order2);

orderEmitter.on("error", (err) => {
  console.error("An error occurred:", err);
});
