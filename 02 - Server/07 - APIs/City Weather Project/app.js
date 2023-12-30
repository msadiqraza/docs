const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = "4040";
const apiKey = "0c425ddf2bd6968ce1b867ca42fd3c6a";

var city = "Rawalpindi";
var unit = "metric";

//necessary for parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
	city = req.body.cityName;

	var url =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&units=" +
		unit +
		"&appid=" +
		apiKey +
		"#";

	https.get(url, (response) => {
          response.on("data", (data) => {
               const weatherdata = JSON.parse(data);
               console.log(weatherdata);
          })
	});
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
	console.log("Server running at:" + port);
});
