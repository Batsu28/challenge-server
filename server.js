const { default: axios } = require("axios");
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

app.post("/weather", (req, res) => {
  console.log(req.body);
  let lat, long;
  switch (req.body.cityName) {
    case "mn":
      lat = 52.52;
      long = 13.41;
      break;
    case "ru":
      lat = 55.75;
      long = 37.62;
      break;
    case "cn":
      lat = 39.91;
      long = 116.4;
      break;
  }
  console.log(lat, long);
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`;
  // async function weather() {
  //   let response = await axios(url);
  //   response = await response.data.hourly;
  //   return res.status(200).send(response);
  // }
  // weather();
  axios(url).then((weather) => res.status(200).send(weather.data.hourly));
});

app.listen(port, () => {
  console.log(`server is starting in ${port} port`);
});
