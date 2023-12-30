let a = "Bruh",
	b = 15,
	c = true,
	length = 16;

document.getElementById("button1").onclick = function () {
	document.getElementById("label1").innerHTML = "Outrunning Karma";
	let y = document.getElementById("input1").checked;
	y = Boolean(y);
	document.getElementById("button1").innerHTML = y;
	console.log(y);
};

document.getElementById("label2").innerHTML = "Outrunning Karma";
const x = document.getElementById("label3");
let element = document.getElementById("label2").innerHTML;

element = "Casual";
x.innerHTML += "Armada";

//function: using a program for square

function getArea(length) {
	let result = length * length;
	return result;
}

//conditional statement / ternary operator
function checkAge(x) {
	return x >= 18 ? true : false;
}

//Whitespace: see here for how whitespace chars work
// console.log(getArea(length), "\n", checkAge(length));
// console.log(getArea(length) + "\n", checkAge(length));
// console.log(getArea(length) + "\n" + checkAge(length));

//Var vs Let: var : in function, let : in brackets

//Tempelate literals:
// console.log(`This is a tempelation: ${length} \n Using it whitespace chars can be used`);
let text = `This is also a way to use tempelate literals ${b}`;

document.getElementById("label4").innerHTML = text;

//Format Currency:  tolocaleString(): number formatting system, it can be used for a variety of different things like setting units or turning into percentage see Images
let num = 876543123456.789;

// num = num.toLocaleString();
// num = num.toLocaleString("en-US");
// num = num.toLocaleString("hi-IN");
// num = num.toLocaleString("de-DE");
num = num.toLocaleString("ur-PK", { style: "currency", currency: "PKR" });

console.log(num);

// Alert Dialog
document.getElementById("alertButton").onclick = function () {
	alert(`this is an alert`);
	console.log(`check`);
};

document.getElementById("clearButton").onclick = function () {
	document.getElementById("label1").innerHTML = "";
	document.getElementById("label2").innerHTML = "";
	document.getElementById("label3").innerHTML = "";
	document.getElementById("label4").innerHTML = "";

	document.getElementById("head1").innerHTML = "";
	document.getElementById("head2").innerHTML = "";

	console.clear();

	//learn how to change the meta data from witchin the method
};
