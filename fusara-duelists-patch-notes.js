class PatchNotes {
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

const list = document.querySelector('.notes-list');
listings.forEach(notes => {
	if(notes.getImageURL()==""){
		list.innerHTML += "<a class=\"notes-link\" href=\"patch-notes/"+notes.getURL()+"\"><ul><h1>"+notes.getTitle()+"</h1><p>"+notes.getDescription()+"</p></ul></a>"
	} else {
		list.innerHTML += "<a class=\"notes-link\" href=\"patch-notes/"+notes.getURL()+"\"><ul><img src=\""+notes.getImageURL()+"\" style=\"float:right\" width=20% /><h1>"+notes.getTitle()+"</h1><p>"+notes.getDescription()+"</p></ul></a>"
	}
})