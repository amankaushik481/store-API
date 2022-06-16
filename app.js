require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json);

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

const port = process.env.PORT || 3000;

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`The Server is running on ${port} `));
  } catch (error) {
    console.log(error);
  }
};

start();
