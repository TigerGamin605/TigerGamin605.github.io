//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0; 
//Define vars to hold "display" value
let display Seconds = 0;
let displayMinutes: = 0;
let displayHours = 0;
//Define vars to hold stopwatch status
let status = "stopped";
//Stopwatch fuction (logic to determine when to increment next value, etc)
function stopWatch(){
	//Display updated time values to user
	document.getElementById("display").innerHTML =Math.floor(Math.random()*1001);
}
function startStop(){

	if(status === "stopped"){

		//Start the stopwatch (by calling setInterval() function)
		interval = window.setInterval(stopwatch, 0);
		document.getElementById("startStop").innerHMTL ="Stop Generating";
		status = "started";
	}
	else{

		window.clearInterval(interval);
		document.getElementById("startStop").innerHTML = "Start Again";
		status = "stopped";
	}

}
