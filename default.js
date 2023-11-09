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

if(document.querySelector(".nav")!=null)
document.querySelector(".nav").innerHTML = 
"<img class=\"open-tab\" onclick=\"openNav()\"src=\"media/menu-icon.png\"></img>"+
"<img id=\"logo\" class='home-logo' src=\"https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372\" style=\"width:70px\"></img>"+
"<ul class=\"tabs\">"+
"<li class=\"tab\"><a class=\"link\" href=\"index.html\">Home</a></li>"+
"<li class=\"tab, dropdown\">"+
	"<div  class=\"dropbtn\">Fusara Duelist</div>"+
	"<div class=\"dropdown-content\">"+
		"<a class=\"link\" href=\"fusara-duelists.html\">What is Fusara Duelists?</a>"+
		"<a class=\"link\" href=\"fusara-duelists-devlogs.html\">Devlogs</a>"+
	"</div>"+
"</li>"+
"<li class=\"tab, dropdown\">"+
	"<div  class=\"dropbtn\">Project FPF</div>"+
	"<div class=\"dropdown-content\">"+
		"<a class=\"link\" href=\"project-fpf.html\">What is Project FPF?</a>"+
		"<a class=\"link\">Devlogs</a>"+
	"</div>"+
"</li>"+
"<li class = \"tab-icon\"><a href=\"https://macjcoding.itch.io\"><image src=\"https://assets.ifttt.com/images/channels/586796884/icons/monochrome_large.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://www.youtube.com/@macjcoding\"><image src=\"https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://github.com/MacJCoding\"><image src=\"https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png\" style=\"width:30px\"></a></li></ul>"

if(document.querySelector(".sidebar")!=null)
document.querySelector(".sidebar").innerHTML = 
"<h1 class=\"closebtn, sidebox\" class=\"open-tab\" onclick=\"closeNav()\">&times</h1>"+
"<a class = \"sidebox\" class=\"link\" href=\"index.html\">Home</a>"+
"<div class=\"sidebar-dropdown-btn\">Fusara&nbsp;Duelists</div><div class=\"sidebar-dropdown-container\">"+
	"<a class = \"sidebox\" class=\"link\" href=\"fusara-duelists.html\">What&nbsp;is&nbsp;Fusara&nbsp;Duelists?</a>"+
	"<a class = \"sidebox\" class=\"link\" href=\"fusara-duelists-devlogs.html\">Devlogs</a>"+
"</div>"+
"<div class=\"sidebar-dropdown-btn\">Project&nbsp;FPF</div><div class=\"sidebar-dropdown-container\">"+
	"<a class = \"sidebox\" class=\"link\" href=\"project-fpf.html\">What&nbsp;is&nbsp;Project&nbsp;FPF?</a>"+
	"<a class = \"sidebox\" class=\"link\" href=\"\">Devlogs</a>"+
"</div>"+
"<div class=\"sidebar-dropdown-btn\">Sites</div><div class=\"sidebar-dropdown-container\">"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://macjcoding.itch.io\">itch.io</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://www.youtube.com/@macjcoding\">Youtube</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://github.com/MacJCoding\">GitHub</div></a>"

if(document.querySelector(".navDevlog")!=null)
document.querySelector(".navDevlog").innerHTML = 
"<img class=\"open-tab\" onclick=\"openNav()\"src=\"../media/menu-icon.png\"></img>"+
"<img id=\"logo\" class='home-logo-devlog' src=\"https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372\" style=\"width:70px\"></img>"+
"<ul class=\"tabs\">"+
"<li class=\"tab\"><a class=\"link\" href=\"../index.html\">Home</a></li>"+
"<li class=\"tab, dropdown\">"+
	"<div  class=\"dropbtn\">Fusara Duelist</div>"+
	"<div class=\"dropdown-content\">"+
		"<a class=\"link\" href=\"../fusara-duelists.html\">What is Fusara Duelists?</a>"+
		"<a class=\"link\" href=\"../fusara-duelists-devlogs.html\">Devlogs</a>"+
	"</div>"+
"</li>"+
"<li class=\"tab, dropdown\">"+
	"<div  class=\"dropbtn\">Project FPF</div>"+
	"<div class=\"dropdown-content\">"+
		"<a class=\"link\" href=\"../project-fpf.html\">What is Project FPF?</a>"+
		"<a class=\"link\">Devlogs</a>"+
	"</div>"+
"</li>"+
"<li class = \"tab-icon\"><a href=\"https://macjcoding.itch.io\"><image src=\"https://assets.ifttt.com/images/channels/586796884/icons/monochrome_large.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://www.youtube.com/@macjcoding\"><image src=\"https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://github.com/MacJCoding\"><image src=\"https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png\" style=\"width:30px\"></a></li></ul>"

if(document.querySelector(".sidebarDevlog")!=null)
document.querySelector(".sidebarDevlog").innerHTML = 
"<h1 class=\"closebtn, sidebox\" class=\"open-tab\" onclick=\"closeNav()\">&times</h1>"+
"<a class = \"sidebox\" class=\"link\" href=\"../index.html\">Home</a>"+
"<div class=\"sidebar-dropdown-btn\">Fusara&nbsp;Duelists</div><div class=\"sidebar-dropdown-container\">"+
	"<a class = \"sidebox\" class=\"link\" href=\"../fusara-duelists.html\">What&nbsp;is&nbsp;Fusara&nbsp;Duelists?</a>"+
	"<a class = \"sidebox\" class=\"link\" href=\"../fusara-duelists-devlogs.html\">Devlogs</a>"+
"</div>"+
"<div class=\"sidebar-dropdown-btn\">Project&nbsp;FPF</div><div class=\"sidebar-dropdown-container\">"+
	"<a class = \"sidebox\" class=\"link\" href=\"../project-fpf.html\">What&nbsp;is&nbsp;Project&nbsp;FPF?</a>"+
	"<a class = \"sidebox\" class=\"link\" href=\"\">Devlogs</a>"+
"</div>"+
"<div class=\"sidebar-dropdown-btn\">Sites</div><div class=\"sidebar-dropdown-container\">"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://macjcoding.itch.io\">itch.io</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://www.youtube.com/@macjcoding\">Youtube</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://github.com/MacJCoding\">GitHub</div></a>"

if(document.querySelector(".home-logo")!=null)
document.querySelector(".home-logo").addEventListener("click", () => {
  window.location.href = 'index.html';
});

if(document.querySelector(".home-logo-devlog")!=null)
document.querySelector(".home-logo-devlog").addEventListener("click", () => {
  window.location.href = '../index.html';
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