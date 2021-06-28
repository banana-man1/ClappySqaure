tmp = document
jumpSlider = tmp.getElementById("jumpHeight")
gravitySilder = tmp.getElementById("gravityStrength")

tmp.onkeydown = function (e) {
	key = e.key.toUpperCase()
	if (e.ctrlKey && e.shiftKey && (key == "I"|| key == "C" || key == "J")) {
		alert("Anti Piracy\n Ctrl Shift " + key + " Has Been Blocked")
		return false
	} else if (e.ctrlKey && (key == "U")) {
		alert("Anti Piracy\n Ctrl U Has Been Blocked")
		return false
	} else if (e.keyCode == 32) {
		accelerate(-0.2)
	}
}

jumpSlider.oninput = function() {
	speed = this.value / 100
}

gravitySlider.oninput = function() {
	gravity = this.value / 100;
}

tmp.onkeyup = function (e) {
	if (e.keyCode == 32) {
		accelerate(speed)
	}
}

tmp.addEventListener('contextmenu', function (e) {
	alert("Anti Piracy\n Context Menu Has Been Blocked")
	e.preventDefault()
})