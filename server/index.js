const express = require("express");

// Instantiate Express
const app = express();

// Define server port
const PORT = 3200;

// Create a default route
app.get("/", (req, res) => {
  res.send("wag wan g");
});

// Start listening to the requests
app.listen(PORT);
