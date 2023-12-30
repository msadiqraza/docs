// input
let x = "21",
	y = 21,
	z = true,
	w = Boolean(""),
	n = Boolean("bruh"),
	a,
	b,
	c,
	firstName,
	lastName;

document.getElementById("myButton").onclick = function () {
	var username = document.getElementById('myname').value;
	document.getElementById("myButton").innerHTML += " "+username;
};

// type conversion: converting an empty string will give false and vice versa: line 21
x = Number(x);
y = String(y);
z = String(z);

console.log(x, y, z);
console.log(typeof x, typeof y, typeof z);
console.log(w, n);

// Math: same math ftns as java
const PI = 3.14159;

// hypotenuse program:
document.getElementById("button1").onclick = function () {
	a = document.getElementById("side1").value;
	a = Number(a);

	b = document.getElementById("side2").value;
	b = Number(b);

	c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	c = Number(c);

	document.getElementById("hyp").innerText =
		document.getElementById("hyp").innerHTML + "  " + c;
	console.log(c);
};

//random in java: will give a double between 0 and 1, for a int between any two numbers we will:
//for int between 1 and 6 i.e. a dice
let d = Math.ceil(Math.random() * 6);

//string methods:
//see line 59, 1 is added to length instead of showing as string , see string properties.png
let name = "Gu Changge";
//string slicing:
firstName = name.slice(0, 2);
lastName = name.slice(3);

console.log(firstName, lastName);
//or

firstName = name.slice(0, name.indexOf(" "));
lastName = name.slice(name.indexOf(" ") + 1);

console.log(firstName, lastName);

// method chaining, see line 87
let mChain = firstName.toUpperCase().length;

document.getElementById("chButton").innerHTML += "Enter";
// if statement && check box
document.getElementById("chButton").onclick = function () {
	if (document.getElementById("checkBox").checked) {
		console.log("Checked");
	} else {
		console.log("Unchecked");
	}
};

// Three ways to use switch:
/*
	case "A":
	case "A"..."C"
	case (condition)grade >90 (for condition==boolean)
*/

// !(condition) is NOT operator, ||, &&
// not operator can be used on any variable which automatically turns it into a boolean(false)
// as would be in line 65

// while loop: JS BroCode 1:24:06 shows an interesting idea i.e line 91 is enescapable until
// Username is input

let Username = "";

// while (Username == "" || Username == null) {
// 	Username = window.prompt("Enter username: ");}

// Making a rectange using loops

let rows = 10;
rows = Number(rows);

let col = 20;
col = Number(col);

const rectangle = document.getElementById("rectangle");

for (let i = 0; i < rows; i++) {
	if (i == 0 || i == rows - 1) {
		for (let j = 0; j < col; j++) {
			rectangle.innerHTML += "&nbsp;+&nbsp;";
		}
	} else {
		rectangle.innerHTML += "&nbsp;+&nbsp;";
		for (let j = 0; j < col + 1; j++) {
			rectangle.innerHTML += " &nbsp;&nbsp;";
		}
		rectangle.innerHTML += "&nbsp;+&nbsp;";
	}
	rectangle.innerHTML += "<br>";
}

document.getElementById("checkLabel").innerHTML = "Karma";

console.log(mChain, Username);
console.log(rows, col);

//till function