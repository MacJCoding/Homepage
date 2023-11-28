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
	
]

const list = document.querySelector('.devlog-list');
listings.forEach(devlog => {
	if(devlog.getImageURL()==""){
		list.innerHTML += "<a class=\"devlog-link\" href=\""+devlog.getURL()+"\"><ul><h1>"+devlog.getTitle()+"</h1><p>"+devlog.getDescription()+"</p></ul></a>"
	} else {
		list.innerHTML += "<a class=\"devlog-link\" href=\""+devlog.getURL()+"\"><ul><img src=\""+devlog.getImageURL()+"\" style=\"float:right\" width=20% /><h1>"+devlog.getTitle()+"</h1><p>"+devlog.getDescription()+"</p></ul></a>"
	}
})