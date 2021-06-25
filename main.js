// This File Includes: Var, events, Instant On Stuff
// VARS
var myGamePiece, myScore, speed;
var vaild = false;
var d = new Date();
var myObstacles = [];
var input = btoa(prompt("Please Enter Product Code", "CS-"))
var LicenseCodes = ["Q1MtS0JFODBURTk=",
	"Q1MtMk9KU09HUkg=",
	"Q1MtTldZM1NRVEo=",
	"Q1MtUlRETVBQMTc=",
	"Q1MtU0E5VUFFNlg=",
	"Q1MtWUNYTVhDSVY=",
	"Q1MtSzgwUlVWMjQ=",
	"Q1MtOVBBMkxaMzY=",
	"Q1MtQUQzQUtHUjU=",
	"Q1MtWkhBRlJJSjI=",
	"Q1MtTU5DTDZDQk8=",
	"Q1MtNzhPTkhFRzE=",
	"Q1MtS1lZWUtIOUU=",
	"Q1MtSzlaRUIzWEo=",
	"Q1MtSkg4QVNSMjE=",
	"Q1MtOThBR0U2Q1o=",
	"Q1MtQ0Y1TzMzTks=",
	"Q1MtUDFYQTlHU1E=",
	"Q1MtTUJXTUlPRkQ=",
	"Q1MtTDVTUlhQRkQ=",
	"Q1MtVkpaQlhGTUI=",
	"Q1MtSFpGUElXRDU=",
	"Q1MtTTJMOFFJOTk=",
	"Q1MtU0tJVzdBWVo=",
	"Q1MtVUdaUVNLSVg=",
	"Q1MtWlBYVFM1NTc=",
	"Q1MtRVZVTVlDVFk=",
	"Q1MtVjZEUFhCNjE=",
	"Q1MtWFpYWllTWFU=",
	"Q1MtV0kxR05NS0c=",
	"Q1MtVEVTVA=="
]
var myGameArea = {
	canvas: document.createElement("canvas"),
	start: function() {
		this.canvas.id = "canvas"
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		updateGameArea();
	},
	clear: function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

// EVENTS
document.onkeydown = function(e) {
	if (e.ctrlKey && (e.keyCode === 85)) {
		alert("Ctrl + U Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 73) && e.shiftKey) {
		alert("Ctrl + Shift + I Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 67) && e.shiftKey) {
		alert("Ctrl + Shift + I Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 74) && e.shiftKey) {
		alert("Ctrl + Shift + I Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.keyCode === 32) {
		accelerate(speed);
		setTimeout(function() {
			accelerate(-0.2);
		}, 100)
	}
}

document.addEventListener('contextmenu', function(evt) {
	alert("Right Click Has Been Blocked /n Anti Piracy System")
	evt.preventDefault();
}, false);

// INSTANT
setInterval(debugCheck, 500)

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js');
}

while (vaild !== true) {
	if (localStorage.getItem("vaild") == true) {
		vaild = true;
	}
	vaild = LicenseCodes.includes(input)
}
localStorage.setItem("vaild", true);

if ((d.getFullYear() > 2021 && d.getMonth > 0)) {
	while (true) {
		alert("Your Subscription for Clappy Sqaure Has Ended.\n Payment Options: https://eaterminer.github.io/ClappySqaure/pricing")
	}
}
