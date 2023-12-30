const { log } = require("console");
const express = require("express");
const https = require("https");

const url =
	"https://api.openweathermap.org/data/2.5/weather?q=Rawalpindi&units=metric&appid=0c425ddf2bd6968ce1b867ca42fd3c6a#";
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	https.get(url, (response) => {
		var data = "";

		console.log(response.statusCode);

		//receive data example
		response
			.on("data", (chunk) => {
				data += chunk;
				const weatherData = JSON.parse(data);
				//get weatherdata
				const icon =
					"https://openweather.org/img/wn/10d" + "@2x.png";
				const temp = weatherData.main.temp;

				console.log(weatherData);

				//have to use HTML syntax
				res.write("<h1>response" + temp + "</h1>");
				res.write("<img src=" + icon + ">");
				res.send();
			})
			.on("error", (err) => {
				console.log(err);
			});
	});
});

app.get("/failure", (req, res) => {
	res.redirect("/");
})

app.get("*", () => {
	console.log("NOT AVAILABLE");
});

app.listen(port, () => {
	console.log("server is running at: " + port);
});
