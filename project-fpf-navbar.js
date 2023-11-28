if(document.querySelector(".nav")!=null)
document.querySelector(".nav").innerHTML = 
'<img class="open-tab" onclick="openNav()"src="media/menu-icon.png"></img>'+
'<img id="logo" class="home-logo" src="https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372" style="width:70px"></img>'+
'<ul class="tabs">'+
'<li class="tab"><a class="link" href="index.html">Home</a></li>'+
'<li class="tab, dropdown">'+
	'<div  class="dropbtn">All&nbsp;Games</div>'+
	'<div class="dropdown-content">'+
		'<a class="link" href="fusara-duelists.html">Fusara Duelists</a>'+
		'<a class="link" href="project-fpf.html">Project FPF</a>'+
	'</div>'+
'</li>'+
'<li class="tab"><a class="link" href="./project-fpf-devlogs.html">Devlogs</a></li>'+
'<li class="tab"><a class="link" href="./project-fpf-patch-notes.html">Patch Notes</a></li>'+
'<li class = "tab-icon"><a href="https://macjcoding.itch.io"><image src="https://assets.ifttt.com/images/channels/586796884/icons/monochrome_large.png" style="width:30px"></a></li>'+
'<li class = "tab-icon"><a href="https://www.youtube.com/@macjcoding"><image src="https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png" style="width:30px"></a></li>'+
'<li class = "tab-icon"><a href="https://github.com/MacJCoding"><image src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" style="width:30px"></a></li></ul>'

if(document.querySelector(".sidebar")!=null)
document.querySelector(".sidebar").innerHTML = 
'<h1 class="closebtn, sidebox" class="open-tab" onclick="closeNav()">&times</h1>'+
'<a class = "sidebox" class="link" href="index.html">Home</a>'+
'<div class="sidebar-dropdown-btn">All&nbsp;Games</div><div class="sidebar-dropdown-container">'+
	'<a class = "sidebox" class="link" href="fusara-duelists.html">Fusara&nbsp;Duelists</a>'+
	'<a class = "sidebox" class="link" href="project-fpf.html">Project&nbsp;FPF</a>'+
'</div>'+
'<a class = "sidebox" class="link" href="./project-fpf-devlogs.html">Devlogs</a>'+
'<a class = "sidebox" class="link" href="./project-fpf-patch-notes.html">Patch&nbsp;Notes</a>'+
'</div>'+
'<div class="sidebar-dropdown-btn">Sites</div><div class="sidebar-dropdown-container">'+
	'<a class="sidebox" class="link" href="https://macjcoding.itch.io">itch.io</a>'+
	'<a class="sidebox" class="link" href="https://www.youtube.com/@macjcoding">Youtube</a>'+
	'<a class="sidebox" class="link" href="https://github.com/MacJCoding">GitHub</div></a>'

if(document.querySelector(".home-logo")!=null)
document.querySelector(".home-logo").addEventListener("click", () => {
  window.location.href = 'index.html';
});
