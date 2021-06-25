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
		accelerate(speed)
		setTimeout(function() {
			alert('SpAcE');
		}, milliseconds)
	}
}
function mouseCheck(event) {
	if (event.button == 2) {
		
		return false;
	}
}

element.addEventListener('contextmenu', function(evt) { 
	alert("Right Click Has Been Blocked /n Anti Piracy System")
  evt.preventDefault();
}, false);
element.addEventListener('contextmenu', function(evt) {
	alert("Right Click Has Been Blocked /n Anti Piracy System")
	evt.preventDefault();
}, false);

function debugCheck() {
	var startTime = performance.now();
	debugger;
	var stopTime = performance.now();
	if ((stopTime - startTime) > 500) {
		alert("Chrome Devtools Has Been Blocked /n Anti Piracy System")
		document.getElementById("body").innerHTML = "Chrome Devtools Has Been Activated. Document Content Has Been Removed. <br> Please Refresh"
	}
}

setInterval(debugCheck, 500)

var myGamePiece, myScore, speed;
var vaild = false;
var myObstacles = [];

function keypress() {
	accelerate(speed)
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js');
}

function startGame() {
	var jumpSlider = document.getElementById("jumpHeight");
	speed = jumpSlider.value / 100;

	jumpSlider.oninput = function() {
		speed = this.value / 100;
	}


	var gravitySlider = document.getElementById("gravityStrength");
	gravity = gravitySlider.value / 100;

	gravitySlider.oninput = function() {
		gravity = this.value / 100;
	}


	myGamePiece = new component(30, 30, "red", 10, 120);
	myGamePiece.gravity = gravity;
	myScore = new component("30px", "arial", "black", 280, 40, "text");
	myGameArea.start();
}

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

function component(width, height, color, x, y, type) {
	this.type = type;
	this.score = 0;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.gravity = 0;
	this.gravitySpeed = 0;
	this.update = function() {
		ctx = myGameArea.context;
		if (this.type == "text") {
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = color;
			ctx.fillText(this.text, this.x, this.y);
		} else {
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	this.newPos = function() {
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
		this.y += this.speedY + this.gravitySpeed;
		this.hitBottom();
		this.hitTop();
	}
	this.hitBottom = function() {
		var rockbottom = myGameArea.canvas.height - this.height;
		if (this.y > rockbottom) {
			this.y = rockbottom;
			this.gravitySpeed = 0;
		}
	}
	this.hitTop = function() {
		var rocktop = 0;
		if (this.y < rocktop) {
			this.y = rocktop;
			this.gravitySpeed = 0;
		}
	}
	this.crashWith = function(otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
			crash = false;
		}
		return crash;
	}
}

function updateGameArea() {
	var x,
		height,
		gap,
		minHeight,
		maxHeight,
		minGap,
		maxGap;
	for (i = 0; i < myObstacles.length; i += 1) {
		if (myGamePiece.crashWith(myObstacles[i])) {
			return;
		}
	}
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyinterval(150)) {
		x = myGameArea.canvas.width;
		minHeight = 20;
		maxHeight = 200;
		height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
		minGap = 50;
		maxGap = 200;
		gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
		myObstacles.push(new component(10, height, "green", x, 0));
		myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
	}
	for (i = 0; i < myObstacles.length; i += 1) {
		myObstacles[i].x += -1;
		myObstacles[i].update();
	}
	myScore.text = "SCORE: " + myGameArea.frameNo;
	myScore.update();
	myGamePiece.newPos();
	myGamePiece.update();
}

function everyinterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) {
		return true;
	}
	return false;
}

function accelerate(n) {
	myGamePiece.gravity = n;
}



function freeze() {
	startGame();
	canvas: document.getElementById("canvas")
	myObstacles = [];
	myGameArea = {
		canvas: document.getElementById("canvas"),
		start: function() {
			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
			this.frameNo = 0;
			updateGameArea();
		},
	}
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

function restart() {
	location.reload()
}

function checkLicense() {
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

	while (vaild == true) {
		if (localStorage.getItem("vaild") == true) {
			vaild = true;
		}
		var input = btoa(prompt("Please Enter Product Code", "CS-"))
		vaild = LicenseCodes.includes(input)
	}
	localStorage.setItem("vaild", true);
}

checkLicense()
if (d.getFullYear() > 2021) {
	if (d.getMonth > 0) {
		while (true !== false) {
			alert("Your Subscription for Clappy Sqaure Has Ended.\n Payment Options: https://eaterminer.github.io/ClappySqaure/pricing")
		}
	}
}
