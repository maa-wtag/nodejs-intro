const http = require("http");

// Create a server
const server = http.createServer();

// Register event listeners
server.on("request", (req, res) => {
  console.log(`Request received for: ${req.url}`);
  res.end("Hello, world!");
});

// Start the server
server.listen(3000, () => console.log("Server running on port 3000"));
