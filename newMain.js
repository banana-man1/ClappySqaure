if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register("sw.js")
}

while (vaild !== true) {
	if (localStorage.getItem("vaild") == true) {
		vaild = true
	}
	var input = btoa(prompt("Please Enter Your Product Code", "CS-").toUpperCase())
	vaild = licenseCodes.includes(input)
}
localStorage.setItem("vaild", true)

if (d.getFullYear() > 2021 && d.getMonth() > 0) {
	while (true)  {
		alert("Your Subscription for Clappy Sqaure Has Ended.\n Payment Options: https://eaterminer.github.io/ClappySqaure/pricing")
	}
}

document.getElementById("highScore").innerHTML = localStorage.getItem("highScore")

setInterval(debugCheck, 750);
