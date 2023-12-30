const express = require("express");
const app = express();

//handling post data using body parser, works with express
const bodyParser = require("body-parser");
// Use middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/edit", (req, res) => {
	res.sendFile(__dirname + "/changing-html.html");
});

//Handling data post
app.post("/", (req, res) => {
	//using body parser
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

     var submit = num1 + num2;
     
	//To dynamically change the value of an h2 element in response to a POST request,
     // you would typically need to use JavaScript on the client side.
	// req.body.h2 = submit;

	res.send("sent");
});

app.post("/edit", (req, res) => {
     res.send("uploaded");
});

// Middleware to handle all GET requests other than "/"
app.get("*", (req, res) => {
	res.send("NOT AVAILABLE");
});

const server = app.listen(5500, () => {
     var portLoc = server.address().port;
     console.log("started at: " + portLoc);
     
});
