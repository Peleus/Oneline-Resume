
//Data Section
//bio data
var bio = {
	name : "Brett Freese" , 
	role : "Front End Developer" , 
	contacts : {email : "bfreese@nc.rr.com" , github : "https://github.com/Peleus" , location : "Raleigh" } , 
	pictureurl : "images/me.jpg" , 
	welcomemessage : "Front End Development Portfolio" , 
	skills : ["HTML" , " CSS" , " Javascript" , "jQuery", " Bootstrap"]
};

//Work data
var  work = {
	"jobs" : [
		{
			"employer": "Vicious Cycle Software, Inc.",
			"title": "Senior Level Designer",
			"location": "Morrisville, NC",
			"dates" : "2005 - 2015",
			"description": "Level design stuff"
		} , 
		{
			"employer": "BBH Desigh / Insight Animation",
			"title": "Director, Design Visualization Services",
			"location": "Morrisville, NC",
			"dates" : "2002 - 2005",
			"description": "Architectural illustration and multimedia"
		} , 
		{
			"employer": "Command Digital Studios",
			"title": "Multimedia Designer",
			"location": "Raleigh, NC",
			"dates" : "2001 - 2002",
			"description": "Architectural illustration and multimedia"
		}
	]
};

//Project data
var projects = {
	"project" : [
		{
			"title": "455 Central park West Interactive Walkthrough",
			"dates": "2001",
			"description": "455 Central Park West was a multimedia presentation about new condominiums in NYC",
			"images": "images/197x148.gif"
		} ,
		{
			"title": "Online Resume",
			"dates": "2015",
			"description": "This resume uses Javascript and JQuery to format a skeletal DOM. The project can be viewed on my Git profile.",
			"images": "images/197x148.gif"
		} 
	]
};

//Education data
var education ={
	"schools" : [
		{
			"name" : "Pratt Institute",
			"degree" : "Bechelor of Architecture",
			"dates" : "1988 - 1994",
			"location" : "Brooklyn, NY",
			"major" : "Architecture"
		},
		{
			"name" : "UNC Charlotte",
			"degree" : "Bechelor of Arts",
			"dates" : "1990 - 1992",
			"location" : "Charlotte, NC",
			"major" : "Architecture"
		}
	]
}


//Set up "Bio" in the DOM
bio.displayBio = function(){
	var formattedPictureURL = HTMLbioPic.replace("%data%",bio.pictureurl);
	$("#header").append(formattedPictureURL);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
	$("#header").append(formattedWelcome);

	if (bio.skills != null){
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


}
bio.displayBio();

//Setup Employment in DOM
work.displayWork = function (){
	for(job in work.jobs){
	//Adds the Work Expereince Block
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		// Show Employer
		$(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
		//date
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		//show job location
		var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDate);
		// Show description
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
}
work.displayWork();

//Set up Projects in the DOM
projects.displayProjects = function(){
	for(proj in projects.project){
	//Adds the Project block
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[proj].dates);
		$(".project-entry:last").append(formattedProjectDates);
		//show job location
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);
		$(".project-entry:last").append(formattedProjectDescription);
		// Show description
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[proj].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}
projects.displayProjects()

//Set up Education in DOM
education.displayEducation = function(){
	for(school in education.schools){
		//Education
		var educationEntry01 = HTMLschoolStart;
		$("#education").append(educationEntry01);

		var formattedSchoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchooldegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		
		$(".education-entry:last").append(formattedSchoolname + " " + formattedSchooldegree);

		var formattedSchooldates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchooldates);

		var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoollocation);

		var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolmajor);
	}
}
education.displayEducation();

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
