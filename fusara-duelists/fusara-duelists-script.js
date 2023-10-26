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

var peek1Height = -1;
var peek1Scale = 100;
var growPeek1 = true;
var peek1InAnimation = false;
var peek1Flipped = false;

var peek2Height = -1;
var peek2Scale = 100;
var growPeek2 = true;
var peek2InAnimation = false;
var peek2Flipped = false;

var peek3Height = -1;
var peek3Scale = 100;
var growPeek3 = true;
var peek3InAnimation = false;
var peek3Flipped = false;

var oCards = [
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB2ywOhTe2LuZ0KNPcCob-qKLAcm6WRO8mud_Mb-6_UXlior2SKk82Omfrl1UapJOOrZ3xCsBHBQ12Nvfa6CWPejmXKTg=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB2ywOhTe2LuZ0KNPcCob-qKLAcm6WRO8mud_Mb-6_UXlior2SKk82Omfrl1UapJOOrZ3xCsBHBQ12Nvfa6CWPejmXKTg=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB2ywOhTe2LuZ0KNPcCob-qKLAcm6WRO8mud_Mb-6_UXlior2SKk82Omfrl1UapJOOrZ3xCsBHBQ12Nvfa6CWPejmXKTg=s2560"
];

var sCards = [
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCdutFcAJ9vcATvjpQ7K4lsEDFbLLSOl0pgh8K3UtpJaZeq4mB97mNQVmwTl8uvo8rFiqZgQQVX0aaU5PNj5iFQKwBGxg=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCdutFcAJ9vcATvjpQ7K4lsEDFbLLSOl0pgh8K3UtpJaZeq4mB97mNQVmwTl8uvo8rFiqZgQQVX0aaU5PNj5iFQKwBGxg=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCdutFcAJ9vcATvjpQ7K4lsEDFbLLSOl0pgh8K3UtpJaZeq4mB97mNQVmwTl8uvo8rFiqZgQQVX0aaU5PNj5iFQKwBGxg=s2560"
];

var cCards = [
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDuOhljwslshflN7TSRTXeAi60GjS5v6nYt3Z766tGZKqbgWIB41COaZHzstwNXKYI_Vv1THn-lf-iO-Q_7IKyz-8KK=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDuOhljwslshflN7TSRTXeAi60GjS5v6nYt3Z766tGZKqbgWIB41COaZHzstwNXKYI_Vv1THn-lf-iO-Q_7IKyz-8KK=s2560",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDuOhljwslshflN7TSRTXeAi60GjS5v6nYt3Z766tGZKqbgWIB41COaZHzstwNXKYI_Vv1THn-lf-iO-Q_7IKyz-8KK=s2560"
];

var iCards = [
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBoFIL2BrlKveRwsQ9SP3pRHwqIpQPKq1CORhQxC3AtGwtnGR8aRjQ5TMbtHy8cFMXuRP9Tjf9cCBzWRj9WI41rtsUVxw=s1600",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBoFIL2BrlKveRwsQ9SP3pRHwqIpQPKq1CORhQxC3AtGwtnGR8aRjQ5TMbtHy8cFMXuRP9Tjf9cCBzWRj9WI41rtsUVxw=s1600",
  "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBoFIL2BrlKveRwsQ9SP3pRHwqIpQPKq1CORhQxC3AtGwtnGR8aRjQ5TMbtHy8cFMXuRP9Tjf9cCBzWRj9WI41rtsUVxw=s1600"
];

function preivousHero() {
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex--;
    if (heroIndex < 1) heroIndex = 4;
    peek1Flipped = false;
    growPeek1 = false;
    peek1Height = peek1.height;
    peek2Flipped = false;
    growPeek2 = false;
    peek2Height = peek2.height;
    peek3Flipped = false;
    growPeek3 = false;
    peek3Height = peek3.height;
  }
}

function nextHero() {
  if (!inAnimation) {
    heroImageHeight = document.querySelector(".heroImg").height;
    grow = false;
    inAnimation = true;
    heroIndex++;
    if (heroIndex > 4) heroIndex = 1;
    peek1Flipped = false;
    growPeek1 = false;
    peek1Height = peek1.height;
    peek2Flipped = false;
    growPeek2 = false;
    peek2Height = peek2.height;
    peek3Flipped = false;
    growPeek3 = false;
    peek3Height = peek3.height;
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
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaBoFIL2BrlKveRwsQ9SP3pRHwqIpQPKq1CORhQxC3AtGwtnGR8aRjQ5TMbtHy8cFMXuRP9Tjf9cCBzWRj9WI41rtsUVxw=s1600";
      desc.innerHTML =
        "Ilia, also known as The Huntress, is a well known hero in the Fusara Duelists universe. Her beauty can lead to some secrets that she can use to her advantage. With her ability to create almost anything, she perform abilities similar to other heroes.";
      break;
    case 1:
      doc.innerHTML = "Obsetileo";
      image.src =
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaB2ywOhTe2LuZ0KNPcCob-qKLAcm6WRO8mud_Mb-6_UXlior2SKk82Omfrl1UapJOOrZ3xCsBHBQ12Nvfa6CWPejmXKTg=s2560";
      desc.innerHTML =
        "Obsetileo is warrior with blazing strategy. He focuses on his fireballs and fire novas for damage, but he is quite slow for attacks. His armor-related cards will allow you to survive attacks, so that you can find an opening and get the killing blow.";
      break;
    case 2:
      doc.innerHTML = "Separona";
      image.src =
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaCdutFcAJ9vcATvjpQ7K4lsEDFbLLSOl0pgh8K3UtpJaZeq4mB97mNQVmwTl8uvo8rFiqZgQQVX0aaU5PNj5iFQKwBGxg=s2560";
      desc.innerHTML =
        "Separona is a cunning fighter. She is known for her quick movements, dealing as much damage as possible. She can even stun her foes with electricity manipulation, leaving them paralized. However, her powers can be costly, and this can lead her darker-side to appear and take over.";
      break;
    case 3:
      doc.innerHTML = "Chronos";
      image.src =
        "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDuOhljwslshflN7TSRTXeAi60GjS5v6nYt3Z766tGZKqbgWIB41COaZHzstwNXKYI_Vv1THn-lf-iO-Q_7IKyz-8KK=s2560";
      desc.innerHTML =
        "Chronos is a knight of time. He has the ability to rewind his steps to to attack again and again. But his time manipulation can cause great disturbances to space-time, leaving Ripples in Time that can hinder Chronos. However, Chronos has the right tools to combat through.";
      break;
  }
}

function revealCard(index) {
  switch (heroIndex) {
    case 1:
      switch (index) {
        case 1:
          peek1.src = oCards[0];
          break;
        case 2:
          peek2.src = oCards[1];
          break;
        case 3:
          peek3.src = oCards[2];
      }
      break;
    case 2:
      switch (index) {
        case 1:
          peek1.src = sCards[0];
          break;
        case 2:
          peek2.src = sCards[1];
          break;
        case 3:
          peek3.src = sCards[2];
      }
      break;
    case 3:
      switch (index) {
        case 1:
          peek1.src = cCards[0];
          break;
        case 2:
          peek2.src = cCards[1];
          break;
        case 3:
          peek3.src = cCards[2];
      }
      break;
    case 4:
      switch (index) {
        case 1:
          peek1.src = iCards[0];
          break;
        case 2:
          peek2.src = iCards[1];
          break;
        case 3:
          peek3.src = iCards[2];
      }
      break;
  }
}

function descaleCard(index, isReseting) {
  switch (index) {
    case 1:
      peek1InAnimation = true;
      peek1.style = "width:" + peek1Scale + "%; height:" + peek1Height + "px";
      peek1Scale--;
      if (peek1Scale < 0) {
        peek1Scale = 0;
        if (!peek1Flipped) {
          peek1.src = cardback;
        } else {
          revealCard(1);
        }

        growPeek1 = true;
      }

      break;
    case 2:
      peek2InAnimation = true;
      peek2.style = "width:" + peek2Scale + "%; height:" + peek2Height + "px";
      peek2Scale--;
      if (peek2Scale < 0) {
        peek2Scale = 0;
        if (!peek2Flipped) {
          peek2.src = cardback;
        } else {
          revealCard(2);
        }
        growPeek2 = true;
      }

      break;
    case 3:
      peek3InAnimation = true;
      peek3.style = "width:" + peek3Scale + "%; height:" + peek3Height + "px";
      peek3Scale--;
      if (peek3Scale < 0) {
        peek3Scale = 0;
        if (!peek3Flipped) {
          peek3.src = cardback;
        } else {
          revealCard(3);
        }
        growPeek3 = true;
      }
      break;
  }
}

function scaleCard(index) {
  switch (index) {
    case 1:
      peek1.style = "width:" + peek1Scale + "%; height:" + peek1Height + "px";
      peek1Scale++;
      if (peek1Scale > 100) {
        peek1Scale = 100;
        peek1InAnimation = false;
        peek1Height = peek1.height;
      }
      break;
    case 2:
      peek2.style = "width:" + peek2Scale + "%; height:" + peek2Height + "px";
      peek2Scale++;
      if (peek2Scale > 100) {
        peek2Scale = 100;
        peek2InAnimation = false;
        peek2Height = peek2.height;
      }
      break;
    case 3:
      peek3.style = "width:" + peek3Scale + "%; height:" + peek3Height + "px";
      peek3Scale++;
      if (peek3Scale > 100) {
        peek3Scale = 100;
        peek3InAnimation = false;
        peek3Height = peek3.height;
      }
      break;
  }
}

function flipCard(evt) {
  card = evt.currentTarget;
  switch (evt.currentTarget.index) {
    case 1:
      if (!peek1Flipped) {
        peek1Flipped = true;
        growPeek1 = false;
        peek1Height = peek1.height;
      }
      break;
    case 2:
      if (!peek2Flipped) {
        peek2Flipped = true;
        console.log("2");
        growPeek2 = false;
        peek2Height = peek2.height;
      }
      break;
    case 3:
      if (!peek3Flipped) {
        peek3Flipped = true;
        console.log("3");
        growPeek3 = false;
        peek3Height = peek3.height;
      }
      break;
  }
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

document.querySelector(".home-logo").addEventListener("click", () => {
  window.location.href = 'index.html';
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const left = document.querySelector("#left_arrow");
left.addEventListener("click", preivousHero);
const right = document.querySelector("#right_arrow");
right.addEventListener("click", nextHero);
document.querySelector(".floating-btn").addEventListener("click", () => {
  isScrolling = true;
});

const peek1 = document.querySelector("#peek1");
peek1.index = 1;
peek1.addEventListener("click", flipCard);
const peek2 = document.querySelector("#peek2");
peek2.index = 2;
peek2.addEventListener("click", flipCard);
const peek3 = document.querySelector("#peek3");
peek3.index = 3;
peek3.addEventListener("click", flipCard);

setInterval(update, 1);

function update() {
  updateSneakPeek(1);
  updateSneakPeek(2);
  updateSneakPeek(3);
  updateHeroImage();
  if (isScrolling) {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - 10);
    } else {
      isScrolling = false;
    }
  }
}

function updateSneakPeek(index) {
  switch (index) {
    case 1:
      if (growPeek1) {
        scaleCard(1);
      } else {
        descaleCard(1);
      }
      if (!peek1InAnimation) {
        peek1.style = "width:" + peek1Scale + "%; height:100%";
      }
      break;
    case 2:
      if (growPeek2) {
        scaleCard(2);
      } else {
        descaleCard(2);
      }
      if (!peek2InAnimation) {
        peek2.style = "width:" + peek2Scale + "%; height:100%";
      }
      break;
    case 3:
      if (growPeek3) {
        scaleCard(3);
      } else {
        descaleCard(3);
      }
      if (!peek3InAnimation) {
        peek3.style = "width:" + peek3Scale + "%; height:100%";
      }
      break;
  }
}

function updateHeroImage() {
  if (grow) {
    scalePhoto();
  } else {
    descalePhoto();
  }
}