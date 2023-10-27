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
"<image id=\"logo\" class=\"to-top-home\" src=\"https://i.ytimg.com/an/zHPvj3O1IYbQdNSfePnWQg/featured_channel.jpg?v=5dc42372\" style=\"width:70px\"><image><ul class=\"tabs\"><li class=\"tab\"><a class=\"link\" href=\"index.html\">Home</a></li><li class=\"tab\"><a class=\"link\" href=\"fusara-duelists.html\">Fusara Duelists</a></li><li class=\"tab\">Project FPF</li><li class = \"tab-icon\"><a href=\"https://macjcoding.itch.io\"><image src=\"https://assets.ifttt.com/images/channels/586796884/icons/monochrome_large.png\" style=\"width:30px\"></a>\</li>\<li class = \"tab-icon\"><a href=\"https://www.youtube.com/@macjcoding\"><image src=\"https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png\" style=\"width:30px\">\</a>\</li>\<li class = \"tab-icon\"><a href=\"https://github.com/MacJCoding\">\<image src=\"https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png\" style=\"width:30px\"></a></li></ul>"

/*document.querySelector(".home-logo").addEventListener("click", () => {
  window.location.href = 'index.html';
});*/