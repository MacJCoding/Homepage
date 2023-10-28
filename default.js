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


document.querySelector(".nav").innerHTML = 
"<image id=\"logo\" onclick=\"openNav()\" src=\"https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372\" style=\"width:70px\"><image>"+
"<ul class=\"tabs\">"+
"<li class=\"tab\"><a class=\"link\" href=\"index.html\">Home</a></li>"+
"<li class=\"tab\"><a class=\"link\" href=\"fusara-duelists.html\">Fusara Duelists</a></li>"+
"<li class=\"tab\"><a class=\"link\" href=\"project-fpf.html\">Project FPF</a></li>"+
"<li class = \"tab-icon\"><a href=\"https://macjcoding.itch.io\"><image src=\"https://assets.ifttt.com/images/channels/586796884/icons/monochrome_large.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://www.youtube.com/@macjcoding\"><image src=\"https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png\" style=\"width:30px\"></a></li>"+
"<li class = \"tab-icon\"><a href=\"https://github.com/MacJCoding\"><image src=\"https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png\" style=\"width:30px\"></a></li></ul>"

document.querySelector(".sidebar").innerHTML = 
"<image id=\"logo\" class=\"closebtn, sidebox\" onclick=\"closeNav()\" src=\"https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372\" style=\"width:80px; padding-left: 10px\"><image>"+
"<a class = \"sidebox\" class=\"link\" href=\"index.html\">Home</a>"+
"<div class=\"dropdown-btn\">Games</div><div class=\"dropdown-container\">"+
	"<a class = \"sidebox\" class=\"link\" href=\"fusara-duelists.html\">Fusara Duelists</a>"+
	"<a class = \"sidebox\" class=\"link\" href=\"project-fpf.html\">Project FPF</a>"+
"</div>"+
"<div class=\"dropdown-btn\">Sites</div><div class=\"dropdown-container\">"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://macjcoding.itch.io\">itch.io</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://www.youtube.com/@macjcoding\">Youtube</a>"+
	"<a class=\"sidebox\" class=\"link\" href=\"https://github.com/MacJCoding\">GitHub</div></a>"

/*document.querySelector(".home-logo").addEventListener("click", () => {
  window.location.href = 'index.html';
});*/

var dropdown = document.getElementsByClassName("dropdown-btn");
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