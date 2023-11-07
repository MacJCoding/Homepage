class DevlogListing {
	constructor(title, description, url,imageURL){
		this.title = title;
		this.description = description;
		this.url = url;
		this.imageURL = imageURL;
	}
	getTitle() {
		return this.title;
	}
	getDescription() {
		return this.description;
	}
	getURL() {
		return this.url;
	}
	getImageURL() {
		return this.imageURL;
	}
}

const listings = [
	new DevlogListing("Fusara Duelists Devlog #1 - Backstory", "Find the orgins of how Fusara Duelists came to be", "devlogs/fd-devlog1.html", ""),
	new DevlogListing("Fusara Duelists Devlog #2 - Design & Inspiration", "Take a look at some of the inspirations that I used in the early versions of Fusara Duelists and how they are implemented to the game.", "devlogs/fd-devlog2.html", "https://trello.com/1/cards/615b18408ced2675d1073bd5/attachments/615b190d0a263f5eadd30d55/previews/615b190e0a263f5eadd30d78/download/CharacterDesign.png"),
	new DevlogListing("Fusara Duelists Devlog #3 - Comming Soon", "Devlog Under Construction", "index.html","")
]

const list = document.querySelector('.devlog-list');
listings.forEach(devlog => {
	if(devlog.getImageURL()==""){
		list.innerHTML += "<a class=\"devlog-link\" href=\""+devlog.getURL()+"\"><ul><h1>"+devlog.getTitle()+"</h1><p>"+devlog.getDescription()+"</p></ul></a>"
	} else {
		list.innerHTML += "<a class=\"devlog-link\" href=\""+devlog.getURL()+"\"><ul><img src=\""+devlog.getImageURL()+"\" style=\"float:right\" width=20% /><h1>"+devlog.getTitle()+"</h1><p>"+devlog.getDescription()+"</p></ul></a>"
	}
})