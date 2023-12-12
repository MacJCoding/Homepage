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
	new PatchNotes("0.7.2 - Deck Balancing", "December 12, 2023", "project-fpf-0-7-2.html",""),
	new PatchNotes("0.7.1 - Deck Code Hotfix", "November 20, 2023", "project-fpf-0-7-1.html",""),
	new PatchNotes("0.7.0 - User Experience Modifications", "November 19, 2023", "project-fpf-0-7-0.html",""),
	new PatchNotes("0.6.0 - Blitz Mode", "October 24, 2023", "project-fpf-0-6-0.html",""),
	new PatchNotes("0.5.0 - Ilia and Events", "September 2, 2023", "project-fpf-0-5-0.html",""),
	new PatchNotes("0.4.1 - New Cards and Mechanics", "May 1, 2023", "project-fpf-0-4-1.html",""),
	new PatchNotes("0.4.0 - Deck Builder & Chronos", "April 21, 2023", "project-fpf-0-4-0.html",""),
	new PatchNotes("0.3.4 - Animation End Hotfix", "March 31, 2023", "project-fpf-0-3-4.html",""),
	new PatchNotes("0.3.3 - Hammer Time", "March 31, 2023", "project-fpf-0-3-3.html",""),
	new PatchNotes("0.3.2 - Deck Obsetileo", "March 30, 2023", "project-fpf-0-3-2.html",""),
	new PatchNotes("0.3.1 - Deck Separona", "March 29, 2023", "project-fpf-0-3-1.html",""),
	new PatchNotes("0.3.0 - Summon and Destroy", "March 27, 2023", "project-fpf-0-3-0.html",""),
	new PatchNotes("0.2.1 - Give Boost Hotfix", "March 26, 2023", "project-fpf-0-2-1.html",""),
	new PatchNotes("0.2.0 - Burst: Give Boost", "March 26, 2023", "project-fpf-0-2-0.html",""),
	new PatchNotes("0.1.3 - Summon Viewer", "March 23, 2023", "project-fpf-0-1-3.html",""),
	new PatchNotes("0.1.2 - Deck Saving Addition", "March 22, 2023", "project-fpf-0-1-2.html",""),
	new PatchNotes("0.1.1 - Private Room Fix", "March 21, 2023", "project-fpf-0-1-1.html",""),
	new PatchNotes("0.1.0 - Initial Commit", "March 20, 2023", "project-fpf-0-1-0.html","")
]

const list = document.querySelector('.notes-list');
listings.forEach(notes => {
	if(notes.getImageURL()==""){
		list.innerHTML += "<a class=\"notes-link\" href=\"patch-notes/"+notes.getURL()+"\"><ul><h1>"+notes.getTitle()+"</h1><p>"+notes.getDescription()+"</p></ul></a>"
	} else {
		list.innerHTML += "<a class=\"notes-link\" href=\"patch-notes/"+notes.getURL()+"\"><ul><img src=\""+notes.getImageURL()+"\" style=\"float:right\" width=20% /><h1>"+notes.getTitle()+"</h1><p>"+notes.getDescription()+"</p></ul></a>"
	}
})