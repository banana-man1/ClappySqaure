//function debugCheck() {
//	var startTime = performance.now();
//	//debugger;
//	var stopTime = performance.now();
//	if ((stopTime - startTime) > 500) {
//		document.getElementById("body").innerHTML = "Chrome Devtools Has Been Activated. Document Content Has Been Removed. <br> Please Refresh"
//		alert("Chrome Devtools Has Been Blocked /n Anti Piracy System")
//	}
//}

function startGame() {
	var jumpSlider = document.getElementById("jumpHeight");
	speed = jumpSlider.value / 100;

//	jumpSlider.oninput = function() {
//		speed = this.value / 100;
//	}


	var gravitySlider = document.getElementById("gravityStrength");
	gravity = gravitySlider.value / 100;z

//	gravitySlider.oninput = function() {
//		gravity = this.value / 100;
//	}

	myGamePiece = new component(30, 30, "red", 10, 120);
	myGamePiece.gravity = gravity;
	myScore = new component("30px", "arial", "black", 280, 40, "text");
	myGameArea.start();
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
	//	this.hitTop();
	}
	this.hitBottom = function() {
		var rockbottom = myGameArea.canvas.height - this.height;
		if (this.y > rockbottom) {
			this.y = rockbottom;
			this.gravitySpeed = 0;
		}
	}
//	this.hitTop = function() {
//		var rocktop = 0;
//		if (this.y < rocktop) {
//			this.y = rocktop;
//			this.gravitySpeed = 0;
//		}
//	}
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
//	if (myGameArea.frameNo > localStorage.getItem("hiScore")) {
//		localStorage.setItem("hiScore", myGameArea.frameNo);
//		document.getElementById("hiScore").innerHTML = myGameArea.frameNo;
//	}
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



//function freeze() {
//	startGame();
//	canvas: document.getElementById("canvas")
//	myObstacles = [];
//	myGameArea = {
//		canvas: document.getElementById("canvas"),
//		start: function() {
//			document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//			this.frameNo = 0;
//			updateGameArea();
//		},
//	}
//	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//}

//function restart() {
//	location.reload()
//}