//import data from './media/videos.json' assert { type: 'json' };
//console.log(data);

const image = document.querySelector(".gameImg");
const doc = document.querySelector("#className");
const desc = document.querySelector("#classDesc");
const cardback =
  "https://youre.outof.games/media/uploads/6c/94/6c945403-1207-454b-a953-a1787ba9016f/cardback_0.png";
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
var gameDesc = ["Xesia's shadow is lost in the shadow dimension. Lead her back to Xesia, but you are not the only lost shadow.<p><a class='gameLink' href = 'https://macjcoding.itch.io/lost-in-the-shadows'>Play Here</a><\p>",
				"A recreationg of Worlde but with colors and hexcodes <p><a class='gameLink' href = 'https://macjcoding.itch.io/colordle'>Play Here</a><\p>",
				"Welcome to Galactic Collector, where you collect parts for your ship to become stronger.  Get parts by defeating enemies.<p><a class='gameLink' href = 'https://macjcoding.itch.io/galactic-collector'>Play Here</a><\p>",
				"Its war but with abilities. Since someone commented on one of my devlogs how difficult making card games could be,  I started brainstorming on some card game ideas and this is one of them. This game was made in  3 days. Hope you enjoy! <p><a class='gameLink' href = 'https://macjcoding.itch.io/war-plus'>Play Here</a><\p>"
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


setGame(gameIndex);
const left = document.querySelector("#left_arrow");
left.addEventListener("click", preivousHero);
const right = document.querySelector("#right_arrow");
right.addEventListener("click", nextHero);

var data = {
  "videos": [
    {
      "name": "Ying VS Volpina | Armored Arena",
      "link": "66NZEe_HhjA"
    },
    {
      "name": "Monika VS Steve | Armored Arena",
      "link": "Tw-Rzg_RJqs"
    },
    {
      "name": "Abigail VS Hella | Armored Arena",
      "link": "_YLIRDtXzso"
    },
    {
      "name": "Claire VS Null | Armored Arena",
      "link": "vN1u62yVAYU"
    },
    {
      "name": "Chronos VS Rain | Armored Arena",
      "link": "qqIJxwrRJYM"
    },
    {
      "name": "Alex VS Nina | Armored Arena",
      "link": "aBNHMSey3-A"
    },
    {
      "name": "Stella VS Teufel | Armored Arena",
      "link": "of-u6TLfDx0"
    },
    {
      "name": "Dark Control VS Chaos | Armored Arena",
      "link": "bn2RPqiOc44"
    },
    {
      "name": "League of Legends' Turret in Unity | MacJCoding",
      "link": "L2mBBISO1bE"
    },
    {
      "name": "Super Smash Bros' Home Run Contest in Unity | MacJCoding",
      "link": "XYYS30MGjHw"
    },
    {
      "name": "Recreating Pong & Intro to Unity/Game Development | MacJCoding",
      "link": "1AA59NmCt5Q"
    },
    {
      "name": "Deck Builder & Remote Configuration | Fusara Duelists Devlog #3 | MacJCoding",
      "link": "tB5VThBeLjg"
    },
    {
      "name": "All Planned Out | Fusara Duelists Devlog #2 | MacJCoding",
      "link": "qK2nFk02Qys"
    },
    {
      "name": "Ribben Rose Apartment | MacJCoding",
      "link": "ttPrBrJ47xA"
    },
    {
      "name": "Channel Update | MacJCoding",
      "link": "X2QMoWaFPBs"
    },
    {
      "name": "Intro to the Project | Project PFP Devlog #1 | MacJCoding",
      "link": "iEBo-FovkIQ"
    },
    {
      "name": "Gameplay & More Updates | Project PFP Devlog #2 | MacJCoding",
      "link": "iQ56hyDxq-8"
    },
    {
      "name": "Why Yogg?!?! - Hearthstone: Battlegrounds | Obsetileo",
      "link": "NlERgpRJCjE"
    },
    {
      "name": "Hearthstone Battlegrounds - A Perfect Pair Of Quests | No Commentary Gameplay | Obsetileo",
      "link": "tnxn8nO8QWo"
    },
    {
      "name": "Obsetileo's Top 5 Paladins Plays | Obsetileo 2022 Recap | Obsetileo",
      "link": "EDtP1rvstZ8"
    },
    {
      "name": "Paladins: Siege - Solo Killing w/ Vora | No Commentary Gameplay | Obsetileo",
      "link": "e6P1Ego7PKA"
    },
    {
      "name": "Runaway Baby x Bang Bang - Bruno Mars & K'NAAN ft. Adam Levine [MASHUP] | MacJMisc",
      "link": "rWMrFFryQy4"
    },
    {
      "name": "A Fox's Reflection - REMAKE (Volpina VS Ying) [Miraculous Ladybug VS Paladins] | MacJMisc",
      "link": "ozJEllGlC1w"
    },
    {
      "name": "Darkness Ablaze Pack Opening #5 - Pokemon TCG | MacJBreaks",
      "link": "oABAbl4lYsA"
    },
    {
      "name": "Silver Tempest Pack Opening #2 - Pokemon TCG | MacJBreaks",
      "link": "GCUNfZqae88"
    },
	{
		"name": "Deck of Packs - Episode 2 - Pokemon TCG | MacJBreaks",
		"link": "BRbrnP1HBSE"
	},
	{
		"name": "Whatnot is Rigged? | MacJBreaks",
		"link": "NvsDQkdNSWk"
	}
  ]
};

const randomVidContainer = document.querySelector('.random-video');
var videoList = data['videos'];

newVideo();
const randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", newVideo);

function newVideo() { 
	var a = Math.floor(Math.random() * videoList.length);
	randomVidContainer.innerHTML = "<h3>"+videoList[a]['name']+"</h3>"+//<a style='text-decoration: none; color:black' href='https://youtu.be/"+videoList[a]['link']+"'>Watch Here</a></br>"+
	'<iframe width="560" height="560" src="https://www.youtube.com/embed/'+videoList[a]['link']+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}

const formButton = document.querySelector("#formButton");
formButton.addEventListener("click", getInput);

function getInput() {
	var sent = false;
	var x = document.getElementById("feedback").value;
	var f = document.getElementById("feedbackForm");
	var t = document.getElementById("textArea");
	console.log("press");
	if(x!=null && x!="")
	{
		formButton.removeEventListener("click", getInput);
		let req = new XMLHttpRequest();
		t.innerHTML='<p>'+x+'</p>'
		req.onreadystatechange = () => {
		if (req.readyState == XMLHttpRequest.DONE && !sent) {
			f.innerHTML='<p>Thank you for your feedback!</p>';
			sent = true;
			console.log(req.responseText);
			var arr = JSON.parse(req.responseText)['record'];
			req.open("PUT", "https://api.jsonbin.io/v3/b/6556282312a5d376599a5753", true);
			req.setRequestHeader("Content-Type", "application/json");
			req.setRequestHeader("X-ACCESS-Key", "$2a$10$tMemtnV.mNFKoAnPZAWL7e25TdEbqyfCd9by6B5edy1SR04j22e66");
			console.log(arr);
			arr.push({feedback: x});
			/*var s = "[";
			for (let i = 0; i < arr.length; i++) {
				s += '{"feedback":"'+arr[i].feedback+'"}';
				if(i!=arr.length-1)
					s+=",";
			}
			s+="]";
			req.send(s);*/
			req.send(JSON.stringify(arr));
			console.log(JSON.stringify(arr));
		}
		};
		
		req.open("GET", "https://api.jsonbin.io/v3/b/6556282312a5d376599a5753/latest", true);
		req.setRequestHeader("X-ACCESS-Key", "$2a$10$tMemtnV.mNFKoAnPZAWL7e25TdEbqyfCd9by6B5edy1SR04j22e66");
		req.send();
	}
}



