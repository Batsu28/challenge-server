const cors = require("cors");
const express = require("express");

const app = express();
const data = require("./data.json");
const port = 2001;

app.use(cors());
app.use(express.json());

app.get("/navbar", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`server is starting in ${port} port`);
});
