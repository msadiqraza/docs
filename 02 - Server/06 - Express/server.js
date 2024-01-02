const express = require("express");
const app = express();

app.listen(8080, () => {
     console.log("started")
});

app.get("/", (req, res) => {
	//HTML element
     res.send("Hello World");
});

