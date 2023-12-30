var randomA = Math.ceil(Math.random() * 6);
var randomB = Math.ceil(Math.random() * 6);

var randomSrc1 = "./images/dice" + randomA + ".png";
var randomSrc2 = "./images/dice" + randomB + ".png";

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var header = document.querySelector("h1");

dice1.setAttribute("src", randomSrc1);
dice2.setAttribute("src", randomSrc2);

//can also use randomA and randomB
if (dice1.getAttribute("src") > dice2.getAttribute("src")) {
	header.textContent = "Player 1 Wins!";
} else if (dice1.getAttribute("src") < dice2.getAttribute("src")) {
	header.textContent = "Player 2 Wins!";
} else {
	header.textContent = "Draw!";
}
           