class Database extends EventEmitter {
  connect() {
    // Simulating async connection
    setTimeout(() => {
      this.emit("connect");
    }, 1000);
  }

  query(sql) {
    // Simulating async query
    setTimeout(() => {
      if (sql.includes("SELECT")) {
        this.emit("result", { rows: [] });
      } else {
        this.emit("error", new Error("Invalid query"));
      }
    }, 500);
  }
}

const db = new Database();

// Once listener (fires only once)
db.once("connect", () => {
  console.log("Database connected");
});

// Multiple listeners
db.on("result", (data) => {
  console.log("Query result:", data);
});

// Error handling
db.on("error", (error) => {
  console.error("Database error:", error);
});

db.connect();
db.query("SELECT * FROM users");
