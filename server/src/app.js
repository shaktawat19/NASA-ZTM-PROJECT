const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();

const planetsRouter = require("./routes/planets/planets.router");

// cors() returns its middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan('combined')); // logging requests with morgan.

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
