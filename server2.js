import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Paul",
  },
  {
    id: 3,
    name: "Smith",
  },
];

// Logger Middleware

const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
};

// JSON Middleware

const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for Get /api/users/:id

const getUserbyIDHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User Not Found" }));
  }
  res.end();
};

// Route handler for POST /api/users

const createUserHandler = (req, res) => {
  let body = "";
  // Listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const parsedData = JSON.parse(body);
    const newUser = { ...parsedData };
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify({ newUser }));
    res.end();
  });
};

// Not Found Handler

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route Not Found" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserbyIDHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });

  console.log(req.url);
  console.log(req.method);
});

server.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
