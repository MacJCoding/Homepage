class Clue {
	constructor(clue, passArr, bill){
		this.clue = clue;
		this.passArr = passArr;
		this.bill = bill;
	}
	getClue(){
		return this.clue;
	}
	getPass(){
		var ret = "";
		for(var i = 0; i < this.passArr.length; i++){
			for(var j = 0; j < this.bill.length; j++){
				if(i==this.bill[j]){
					ret+=this.passArr[j]+"";
				}
			}
		}
		return ret;
	}
}

const area = '<textarea type="text" id="input" style="padding-top: 10px; font-size: 20px; text-align: center; width: 70%; min-height: 100px; resize: none"></textarea>'
const button = '<button class="next" style=" border-radius: 26.5px; background-color: #BBE; border: 3px solid #001f61; box-shadow: 0 16px 22px -17px #03153b; color: #004; cursor: pointer; font-size: 20px; line-height: 20px; padding: 12px 20px;"><b>Next</b></button>'

var navyClue = [
	new Clue("<h2>At Ease Soldier!</h2><h4>Submit the first clue code to start</h4>",["a","b","c","d","e","f","g","h","i","j"],[7,2,8,44,5,35,23,9,24,54]),
	new Clue("<h2>Clue 1:</h2><h4>Open Mic Night? That poster is out-dated! Why is it still here in the CS lounge?</h4>",["a","f","e","l","m","n","p","r","u","y"],[8,2,6,9,36,4,49,7,3,84]),
	new Clue("<h2>Clue 2:</h2><h4>It seems that Sylveon found a tampered poster in the Right Back Classroom!</h4>",["b","i","k","l","m","n","o","s","t","u"],[24,5,9,35,64,7,65,3,14,93]),
	new Clue("<h2>Clue 3:</h2><h4>Help! Evan got sick from not washing his hands in the Left Back Classroom!</h4>",["ache","achi","morn","night","eve","mants","ments","mints","monts","munts"],[6,37,75,8,24,7,15,24,64,34]),
	new Clue("<h2>FINAL CLUE:</h2><h4>Maybe that paper for cooking FE can help you</h4><ul style='font-size:18px; text-align: left;margin-left:30%; margin-right: 30%;'><li>Pepino, index 7</li><li>Lugtu, index 4</li><li>Bozzuto, index 21</li><li>Kim, index 3</li><li>Malhotra, index 2</li><li>Nugent, index 6</li><li>Saad, index 10</li><li>Wichman, index 16</li><li>Ferony, index 0</li></ul>",["ache","achi","morn","night","eve","mants","ments","mints","monts","munts"],[6,37,75,8,24,7,15,24,64,34])
]
var pirateClue = [
	new Clue("<h2>AHOY MATEY!!!</h2><h4>Submit the first clue code to start</h4>",["a","b","c","d","e","f","g","h","i","j"],[7,2,8,44,5,35,23,9,24,54]),
	new Clue("<h2>Clue 1:</h2><h4>KEVIN! i mean KEVEN! HE DRANK RED GATORAID IN THE CS LOUNGE!</h4>",["a","b","d","g","i","j","m","o","p","r"],[48,37,12,27,75,10,9,5,0,3]),
	new Clue("<h2>Clue 2:</h2><h4>It seems that Sylveon found a tampered poster in the Right Back Classroom!</h4>",["e","i","k","l","n","o","r","r","t","t"],[7,4,46,5,68,3,12,93,1,8]),
	new Clue("<h2>Clue 3:</h2><h4>Our social director is getting a bit too skibidi in the Left Back Classroom.</h4>",["champ","boat","cruise","ship","winner","ion","netron","electron","machamp","row"],[6,37,75,8,24,7,15,24,64,34]),
	new Clue("<h2>FINAL CLUE:</h2><h4>Maybe that paper for cooking FE can help you</h4><ul style='font-size:18px; text-align: left;margin-left:30%; margin-right: 30%;'><li>Pepino, index 7</li><li>Lugtu, index 4</li><li>Bozzuto, index 21</li><li>Kim, index 3</li><li>Malhotra, index 2</li><li>Nugent, index 6</li><li>Saad, index 10</li><li>Wichman, index 16</li><li>Ferony, index 0</li></ul>",["champ","boat","cruise","ship","winner","ion","netron","electron","machamp","row"],[6,37,75,8,24,7,15,24,64,34])
]
var index = 0;

const text = document.querySelector('.text');
const buttonText = document.querySelector('.button');
//text.innerHTML = clues[index].getClue();

if(document.querySelector(".pirate")!=null)
document.querySelector(".pirate").addEventListener("click", () => {
	document.querySelector(".container").style.border = "10px solid rgba(188, 20, 37, 0.4)";
	document.querySelector(".container").style.backgroundColor = "#F7CFD4";
	text.innerHTML = pirateClue[index].getClue()+area;
	buttonText.innerHTML = button;
	document.querySelector(".next").addEventListener("click", () => {
	var input = document.querySelector('#input');
	
	if(input.value == pirateClue[index].getPass())
		index++;
	if(index >= pirateClue.length){
		index = 0;
	}
	text.innerHTML = pirateClue[index].getClue();
	if(index!=pirateClue.length-1){
		text.innerHTML += area;
	} else {
		buttonText.innerHTML = "";
	}
});
});

//Copy code from pirate to navy
if(document.querySelector(".navy")!=null)
document.querySelector(".navy").addEventListener("click", () => {
	document.querySelector(".container").style.border = "10px solid rgba(75, 84, 139, 0.4)";
	document.querySelector(".container").style.backgroundColor = "#BABED6";
	text.innerHTML = navyClue[index].getClue()+area;
	buttonText.innerHTML = button;
	document.querySelector(".next").addEventListener("click", () => {
	var input = document.querySelector('#input');
	//console.log(navyClue[index].getPass());
	if(input.value == navyClue[index].getPass())
		index++;
	if(index >= navyClue.length){
		index = 0;
	}
	text.innerHTML = navyClue[index].getClue();
	if(index!=pirateClue.length-1){
		text.innerHTML += area;
	} else {
		buttonText.innerHTML = "";
	}
});
});