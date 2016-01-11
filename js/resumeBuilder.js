
//Data Section
//bio data
var bio = {
	name : "Brett Freese" , 
	role : "Front End Developer" , 
	contacts : {
		mobile : "xxx-xxx-xxxx",
		email : "Bfreese@nc.rr.com", 
		github : "https://github.com/peleus", 
		twitter : "User twitter",
		location : "Raleigh" 
	} , 
	biopic : "images/jean-victor-balin-coffee.svg" , 
	welcomeMessage : "Front End Development Portfolio" , 
	skills : ["HTML" , " CSS" , " Javascript" , "jQuery", "Bootstrap", "Git Bash"]
};

//Work data
var  work = {
	"jobs" : [{
			"employer": "Vicious Cycle Software, Inc.",
			"title": "Senior Designer",
			"location": "Morrisville, NC",
			"dates" : "2005 - 2015",
			"description": "I designed user experience, scripted UI and game events, tested software, and participated in UX events on 13 shipped products."
		} , 
		{
			"employer": "BBH Design / Insight Animation",
			"title": "Director, Design Visualization Services",
			"location": "Morrisville, NC",
			"dates" : "2002 - 2005",
			"description": "Maintained and modified corporate web sites using HTML and CSS and modified photography and create graphics for web publication"
		} , 
		{
			"employer": "Command Digital Studios",
			"title": "Multimedia Designer",
			"location": "Raleigh, NC",
			"dates" : "2001 - 2002",
			"description": "Scripted interactive software in Director for web, CD, and kiosks. Designed user interfaces with Photoshop and illustrator and created compressed video with audio using Primeire and After Effects"
		}
	]
};

//Project data
var projects = {
	"project" : [{
			"title": "455 Central Park West Interactive Walkthrough",
			"dates": "2001",
			"description": "455 Central Park West presentation intended to market new condominiums in NYC.",
			"images": "images/455cpw192.png"
		} ,
		{
			"title": "Online Resume",
			"dates": "2015",
			"description": "This resume uses Javascript and JQuery to format a skeletal DOM. The project can be viewed on my Git profile.",
			"images": "images/ResumeImage.PNG"
		} 
	]
};

//Education data
var education ={
	"schools" : [{
			"name" : "Pratt Institute",
			"degree" : "Bechelor of Architecture",
			"dates" : "1988 - 1994",
			"location" : "Brooklyn, NY",
			"majors" : ["Architecture"],
			"url" : "https://www.pratt.edu/"
		},
		{
			"name" : "UNC Charlotte",
			"degree" : "Bechelor of Arts",
			"dates" : "1990 - 1992",
			"location" : "Charlotte, NC",
			"majors" : ["Architecture"],
			"url" : "http://www.uncc.edu/"
		}
	]
};


//Set up "Bio" in the DOM
bio.displayBio = function(){
	var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedbiopic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if (bio.skills !== null){
		$("#header").append(HTMLskillsStart);
	
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkills);

		var formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkills);
	}

	//Contact Start and footer
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts, #footerContacts").prepend(formattedLocation);

	var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts, #footerContacts").prepend(formattedGit);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts, #footerContacts").prepend(formattedEmail);

	$("#mapDiv").append(googleMap);

	//Header
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
};
bio.displayBio();

//Setup Employment in DOM
work.display = function (){
	for(var indexCount = 0; indexCount < work.jobs.length; indexCount++){
	//Adds the Work Expereince Block
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[indexCount].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[indexCount].title);
		// Show Employer
		$(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
		//date
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[indexCount].location);
		$(".work-entry:last").append(formattedLocation);
		//show job location
		var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[indexCount].dates);
		$(".work-entry:last").append(formattedWorkDate);
		// Show description
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[indexCount].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
};
work.display();

//Set up Projects in the DOM
projects.display = function(){
	for(var indexCount = 0; indexCount < projects.project.length; indexCount++){
	//Adds the Project block
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[indexCount].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[indexCount].dates);
		$(".project-entry:last").append(formattedProjectDates);
		//show job location
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[indexCount].description);
		$(".project-entry:last").append(formattedProjectDescription);
		// Show description
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[indexCount].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
};
projects.display();

//Set up Education in DOM
education.display = function(){
	for(var indexCount = 0; indexCount < education.schools.length; indexCount++){
	//Education adds the education block
		var educationEntry01 = HTMLschoolStart;
		$("#education").append(educationEntry01);

		var formattedSchoolname = HTMLschoolName.replace("%data%",education.schools[indexCount].name);
		var formattedSchooldegree = HTMLschoolDegree.replace("%data%",education.schools[indexCount].degree);
		
		$(".education-entry:last").append(formattedSchoolname + " " + formattedSchooldegree);

		var formattedSchooldates = HTMLschoolDates.replace("%data%",education.schools[indexCount].dates);
		$(".education-entry:last").append(formattedSchooldates);

		var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.schools[indexCount].location);
		$(".education-entry:last").append(formattedSchoollocation);

		var formattedSchoolmajors = HTMLschoolMajor.replace("%data%",education.schools[indexCount].majors[0]);
		$(".education-entry:last").append(formattedSchoolmajors);
	}
};
education.display();

//Custom Functions
$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

function locationizer(work_obj) {

    var locationsList = [];
    for(var job in work_obj.jobs){
        
        locationsList.push(work_obj.jobs[job].location);
    }
    return locationsList;
}
