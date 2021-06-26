document.onkeydown = function (e) {
	if (e.ctrlKey && (e.keyCode === 85)) {
		alert("Ctrl + U Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 73) && e.shiftKey) {
		alert("Ctrl + Shift + I Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 67) && e.shiftKey) {
		alert("Ctrl + Shift + C Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.ctrlKey && (e.keyCode === 74) && e.shiftKey) {
		alert("Ctrl + Shift + J Has Been Blocked \n Anti Piracy System")
		return false;
	} else if (e.keyCode === 32) {
		accelerate(speed);
		setTimeout(function () {
			accelerate(-0.2);
		}, 100)
	}
}

document.addEventListener('contextmenu', function (evt) {
	alert("Right Click Has Been Blocked /n Anti Piracy System")
	evt.preventDefault();
}, false);

setInterval(debugCheck, 500)

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js');
}

while (vaild !== true) {
	if (localStorage.getItem("vaild") == true) {
		vaild = true;
	}
	var input = btoa(prompt("Please Enter Product Code", "CS-").toUpperCase())
	vaild = LicenseCodes.includes(input)
}
localStorage.setItem("vaild", true);

if ((d.getFullYear() > 2021 && d.getMonth > 0)) {
	while (true) {
		alert("Your Subscription for Clappy Sqaure Has Ended.\n Payment Options: https:eaterminer.github.io/ClappySqaure/pricing")
	}
}
document.getElementById("hiScore").innerHTML = localStorage.getItem("hiScore")
