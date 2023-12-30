const express = require("express");
const app = express();

app.listen(5500, () => {
     console.log("started")
});

app.get("/", (req, res) => {
	//HTML element
     res.send("<h1>Fuck You!</h1>");
});

