const pirateBar = document.querySelector('.pirateBar');
const navyBar = document.querySelector('.navyBar');

const pirateText = document.querySelector('#pirateInput');
const navyText = document.querySelector('#navyInput');

const pirateCodes = document.querySelector('.pirateCodes');
const navyCodes = document.querySelector('.navyCodes');

const title = document.querySelector('.title');

var pirateProg = 0;
var navyProg = 0;

var pirateIndex = 0;
var navyIndex = 0;

var pirateAns = ["kdgbbkrip", "35441","so i lie to a kid", "the game is a made-up doohickey i must beat"];
var navyAns = ["ctomnywlaywhf", "11046","i want bees or sand", "the game is a made-up doohickey i must beat"];

var pirateCurrentClues = ["beach", "prom","toilet", "championship", "FINISHED"];
var navyCurrentClues = ["beach", "funeral","sink", "achievements", "FINISHED"];

var gameStart = false;


document.querySelector(".next").addEventListener("click", () => {
	gameStart = true;
	if(pirateText.value == pirateAns[pirateIndex]){
		pirateIndex++;
		pirateProg += 25;
		pirateBar.style.width = pirateProg+"%";
		pirateText.value = "";
	}
	if(navyText.value == navyAns[navyIndex]){
		navyIndex++;
		navyProg += 25;
		navyBar.style.width = navyProg+"%";
		navyText.value = "";
	}
	if(gameStart){
		var str1 = "<b>Clue codes:</b><p>";
		for(var i = 0; i <= pirateIndex; i++){
			str1+=pirateCurrentClues[i]+"</p><p>";
		}
		pirateCodes.innerHTML = str1+"</p>"
		str1 = "<b>Clue codes:</b><p>";
		for(var i = 0; i <= navyIndex; i++){
			str1+=navyCurrentClues[i]+"</p><p>";
		}
		navyCodes.innerHTML = str1+"</p>"
	}
	if(navyProg >= 100){
		title.innerText = "The Levyathan Navy WINS!!!";
	}
	if(pirateProg >= 100){
		title.innerText = "The Pirates WINS!!!";
	}
});

