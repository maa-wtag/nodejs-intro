import { EventEmitter } from "events";

class OrderSystem extends EventEmitter {
  constructor() {
    super();
    this.orders = [];
  }

  placeOrder(order) {
    this.orders.push(order);
    this.emit("orderPlaced", order);
  }

  processOrder(order) {
    // Process the order
    this.emit("orderProcessed", order);
  }
}

const orderSystem = new OrderSystem();

// Event Listeners
orderSystem.on("orderPlaced", (order) => {
  console.log("New order received:", order);
});

orderSystem.on("orderProcessed", (order) => {
  console.log("Order processed:", order);
});

// Usage
orderSystem.placeOrder({ id: 1, item: "Coffee" });
