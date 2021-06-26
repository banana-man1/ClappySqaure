var myGameArea, speed, myGamePiece, myObstacles, myScore;
myObstacles = []
speed = 0.05
gravity = 0.05

myGameArea = {
	canvas: document.createElement("canvas"),
	start: function () {
		this.canvas.width = 480
		this.canvas.height = 270
		this.context = this.canvas.getContext("2d")
		document.body.insertBefore(this.canvas, document.body.childNodes[0])
		this.frameNo = 0
		updateGameArea()
	},
	clear: function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}
}