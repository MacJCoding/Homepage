const image = document.querySelector(".heroImg");
const doc = document.querySelector("#className");
const desc = document.querySelector("#classDesc");
const cardback =
  "https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png";
var heroIndex = 1;

var heroImageHeight = document.querySelector(".heroImg").height;
var imgScale = 100;
var grow = true;
var inAnimation = false;

var keywords = {
	"on-summon": "Does something when it first gets summoned",
	"burst": "Does something when it is played from hand",
	"ko": "Does something when it is destroyed",
	"aura": "Does something while on the board",
	"pre-phase": "Does something at the start of the turn",
	"post-phase": "Does something at the end of the turn",
	"delay": "While in hand the delay counter goes down, once the delay reaches zero, you can play this card"
}

function preivousHero() {
	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){ 
	heroIndex--;
    if (heroIndex < 1) heroIndex = 4;
    setHero(heroIndex);
	}else {
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex--;
    if (heroIndex < 1) heroIndex = 4;
  }
	}
}

function nextHero() {
	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){ 
	heroIndex++;
    if (heroIndex > 4) heroIndex = 1;
    setHero(heroIndex);
	}else {
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex++;
    if (heroIndex > 4) heroIndex = 1;
  }
	}
}

function descalePhoto() {
  image.style = "width:" + imgScale + "%; height:" + heroImageHeight + "px";
  imgScale--;
  if (imgScale < 0) {
    imgScale = 0;
    setHero(heroIndex);
    grow = true;
  }
}

function scalePhoto() {
	if(inAnimation){
  image.style = "width:" + imgScale + "%; height:" + heroImageHeight + "px";
	}else{
  image.style = "width:" + imgScale + "%; height:100%";
	}
  imgScale++;
  if (imgScale > 100) {
    imgScale = 100;
    inAnimation = false;
    heroImageHeight = document.querySelector(".heroImg").height;
  }
}

function setHero(index) {
  switch (index) {
    case 4:
      doc.innerHTML = "Ilia";
      image.src =
        "media/heroes/Ilia.png";
      desc.innerHTML =
        "Ilia, also known as The Huntress, is well known in the Fusara universe. Her class surrounds around her known popularity of a hero. She destroys her enemies with her abilities. She becomes more power the more summons she has by her side.";
      break;
    case 1:
      doc.innerHTML = "Obsetileo";
      image.src =
        "media/heroes/Obsetileo.png";
      desc.innerHTML =
        "Obsetileo is warrior with blazing strategy. His class is known to disrupt his enemies as his own abilities would negate any magical properties that would affect him or his allies. He and his allies rely on themselves to win fights rather from outside help.";
      break;
    case 2:
      doc.innerHTML = "Separona";
      image.src =
        "media/heroes/Separona.png";
      desc.innerHTML =
        "Separona is a cunning fighter. She has shown to best herself, becoming stronger everyday. This eventually lead to her professionalism in using her hammer, The Blessed Jet, which can destroy anyone that gets in its way. Separona's class focus on this power, destroying enemy summons";
      break;
    case 3:
      doc.innerHTML = "Chronos";
      image.src =
        "media/heroes/Chronos.png";
      desc.innerHTML =
        "Chronos is a knight of time. His class includes himself from other times, like Past and Future. He strengths as time goes on, and with his advantage with time he can reset the power of any enemies around him.";
      break;
  }
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){ 
	doc.classList.remove('show');
	doc.classList.add('hidden');
	image.classList.remove('show');
	image.classList.add('hidden');
	desc.classList.remove('show');
	desc.classList.add('hidden');
	setTimeout(resetFade, 1);
  }
}


function resetFade(){
	doc.classList.add('show');
	doc.classList.remove('hidden');
	image.classList.add('show');
	image.classList.remove('hidden');
	desc.classList.add('show');
	desc.classList.remove('hidden');
}

const keywordDesc = document.querySelector(".keywordDesc");

var keyList = Object.keys(keywords);
keyList.forEach((word) => {
	var key = document.querySelector("."+word);
	key.addEventListener("click", () => {
		keyList.forEach((w) => {
			var key = document.querySelector("."+w);
			key.style.backgroundColor = "#DDD";
		})
		key.style.backgroundColor = "#999";
		keywordDesc.innerHTML = keywords[word];
		keywordDesc.classList.remove('show');
		keywordDesc.classList.add('hidden');
		setTimeout(resetWordFade, 1);
	});
});

function resetWordFade(){
	keywordDesc.classList.add('show');
	keywordDesc.classList.remove('hidden');
}


setHero(heroIndex);

const left = document.querySelector("#left_arrow");
left.addEventListener("click", preivousHero);
const right = document.querySelector("#right_arrow");
right.addEventListener("click", nextHero);

setInterval(update, 1);

function update() {
  updateHeroImage();
}
function updateHeroImage() {
  if (grow) {
    scalePhoto();
  } else {
    descalePhoto();
  }
}

