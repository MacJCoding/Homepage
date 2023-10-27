const image = document.querySelector(".heroImg");
const doc = document.querySelector("#className");
const desc = document.querySelector("#classDesc");
const cardback =
  "https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png";
var isScrolling = false;
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
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex--;
    if (heroIndex < 1) heroIndex = 4;
  }
}

function nextHero() {
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex++;
    if (heroIndex > 4) heroIndex = 1;
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
        "Ilia, also known as The Huntress, is a well known hero in the Fusara Duelists universe. Her beauty can lead to some secrets that she can use to her advantage. With her ability to create almost anything, she perform abilities similar to other heroes.";
      break;
    case 1:
      doc.innerHTML = "Obsetileo";
      image.src =
        "media/heroes/Obsetileo.png";
      desc.innerHTML =
        "Obsetileo is warrior with blazing strategy. He focuses on his fireballs and fire novas for damage, but he is quite slow for attacks. His armor-related cards will allow you to survive attacks, so that you can find an opening and get the killing blow.";
      break;
    case 2:
      doc.innerHTML = "Separona";
      image.src =
        "media/heroes/Separona.png";
      desc.innerHTML =
        "Separona is a cunning fighter. She is known for her quick movements, dealing as much damage as possible. She can even stun her foes with electricity manipulation, leaving them paralized. However, her powers can be costly, and this can lead her darker-side to appear and take over.";
      break;
    case 3:
      doc.innerHTML = "Chronos";
      image.src =
        "media/heroes/Chronos.png";
      desc.innerHTML =
        "Chronos is a knight of time. He has the ability to rewind his steps to to attack again and again. But his time manipulation can cause great disturbances to space-time, leaving Ripples in Time that can hinder Chronos. However, Chronos has the right tools to combat through.";
      break;
  }
}

const keywordDesc = document.querySelector(".keywordDesc");

var keyList = Object.keys(keywords);
keyList.forEach((word) => {
	var key = document.querySelector("."+word);
	key.addEventListener("click", () => {
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
document.querySelector(".to-top").addEventListener("click", () => {
  isScrolling = true;
});
document.querySelector(".to-top-home").addEventListener("click", () => {
  isScrolling = true;
});
document.querySelector(".play").addEventListener("click", () => {
  document.querySelector("#unity-container").scrollIntoView(false);
});

setInterval(update, 1);

function update() {
  updateHeroImage();
  if (isScrolling) {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - 10);
    } else {
      isScrolling = false;
    }
  }
}
function updateHeroImage() {
  if (grow) {
    scalePhoto();
  } else {
    descalePhoto();
  }
}

