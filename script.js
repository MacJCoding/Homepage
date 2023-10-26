const image = document.querySelector(".gameImg");
const doc = document.querySelector("#className");
const desc = document.querySelector("#classDesc");
const cardback =
  "https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png";
var isScrolling = false;
var gameIndex = 0;
var gameNames = ["Lost in The Shadows",
				"Colordle",
				"Galactic Collector",
				"War Plus"
				]
var gameIcon = ["https://img.itch.zone/aW1nLzgyNjczMzIucG5n/347x500/QX14rU.png",
				"https://img.itch.zone/aW1nLzk2Njc4NTkucG5n/315x250%23c/PHyxpx.png",
				"https://img.itch.zone/aW1hZ2UvOTI3OTk4LzUyNDkwNDYucG5n/347x500/5KpqOi.png",
				"https://img.itch.zone/aW1nLzEwMzQwNjE2LnBuZw==/315x250%23c/eoDJcQ.png"
				]
var gameDesc = ["Xesia's shadow is lost in the shadow dimension. Lead her back to Xesia, but you are not the only lost shadow.",
				"A recreationg of Worlde but with colors and hexcodes",
				"Welcome to Galactic Collector, where you collect parts for your ship to become stronger.  Get parts by defeating enemies.",
				"Its war but with abilities. Since someone commented on one of my devlogs how difficult making card games could be,  I started brainstorming on some card game ideas and this is one of them. This game was made in  3 days. Hope you enjoy! "
				]

function preivousHero() {
    gameIndex--;
    if (gameIndex < 0) gameIndex = gameNames.length-1;
    setGame(gameIndex);
}

function nextHero() {
    gameIndex++;
    if (gameIndex > gameNames.length-1) gameIndex = 0;
    setGame(gameIndex);
}

function setGame(index) {
    doc.innerHTML = gameNames[index];
    image.src =gameIcon[index];
    desc.innerHTML =gameDesc[index];
	doc.classList.remove('show');
	doc.classList.add('hidden');
	image.classList.remove('show');
	image.classList.add('hidden');
	desc.classList.remove('show');
	desc.classList.add('hidden');
	setTimeout(resetFade, 1);
}

function resetFade(){
	doc.classList.add('show');
	doc.classList.remove('hidden');
	image.classList.add('show');
	image.classList.remove('hidden');
	desc.classList.add('show');
	desc.classList.remove('hidden');
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

setGame(gameIndex);
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

setInterval(update, 1);

function update() {
  if (isScrolling) {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - 10);
    } else {
      isScrolling = false;
    }
  }
}
