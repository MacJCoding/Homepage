var isScrolling = false;

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  
  //if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){
	  if(window.innerWidth < 600) { 
	  document.getElementById("mySidebar").style.width = "100%";
  }else{
	document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var dropdown = document.getElementsByClassName("sidebar-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

document.querySelector(".to-top").addEventListener("click", () => {
	if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ){
	isScrolling = true;
	} else {
		document.querySelector("#main").scrollIntoView(true);
	}
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