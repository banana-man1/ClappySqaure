var jumpSlider, debuggerActive, gravitySilder, myGameArea, key, tmp, speed, myGamePiece, myObstacles, myScore, vaild, d, myObstacles, licenseCodes;
myObstacles = []
debuggerActive = "Sorry, Viewing Soure Code and Pirating Applications Is NOT LEGAL and thus I Have Stopped You!"
speed = 0.05
gravity = 0.05
d = new Date()
vaild = false
licenseCodes = [
	"Q1MtS0JFODBURTk=",
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