class ServiceBus extends EventEmitter {
  constructor() {
    super();

    // Always have an error handler
    this.on("error", (error) => {
      console.error("ServiceBus error:", error);
    });

    // Handle uncaught errors
    process.on("uncaughtException", (error) => {
      this.emit("error", error);
      // Graceful shutdown
      process.exit(1);
    });
  }

  publish(event, data) {
    if (!event || !data) {
      this.emit("error", new Error("Invalid event or data"));
      return;
    }
    this.emit(event, data);
  }
}
