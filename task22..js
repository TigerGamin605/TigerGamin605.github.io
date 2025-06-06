let status = "stopped"
const creaturtes=["Jormungandre", "Qilin", "Chupacabra", "Wendigo", "Siren", "Tengu", "Skinwalker", "Nian", "Draugr", "Gnome"
	//Stopwatch function (logic to determine when to increment next value, etc.)
	function stopWatch(){
		//Display updated time values to user 
		let random index=Math.floor(Math.random() *creatures.length);
		document.getElementById("display").innerHTML =("value",creatures[randomIndex]);
	}
	function startStop(){

	if(status === "stopped"){

		interval = window.setInterval(stopWatch, 0);
		document.getElementById("startStop").innerHTML = "Stop Generating";
		playAudio();
	}
	else{

		window.clearInterval(interval);
		document.getElementById("startStop").innerHTML = "Start Again";
		pauseAudio();
		status = "stopped";
	}

function playAudio() {
	var a = document.getElementById("startStop"),innerHTML = "Start Again";
	pauseAudio();
	status = "stopped";
}
}
function playAudio() {
	var a = document.getElementById("myAudio");
	a.play();
}
function pauseAudio() {
	var a = document.getElementById("myAudio");
	a.pause();
}