
//Data Section
var bio = {
	name : "Brett Freese" , 
	role : "Front End Developer" , 
	contactinfo : {email : "bfreese@nc.rr.com" , github : "https://github.com/Peleus" , location : "Raleigh" } , 
	pictureurl : "images/me.jpg" , 
	welcomemessage : "Front End Development Portfolio" , 
	skills : ["HTML" , " CSS" , " Javascript" , " Bootstrap"]
};


var  work = {
	"jobs" : [
		{
			"employer": "Vicious Cycle Software, Inc.",
			"title": "Senior Level Designer",
			"location": "Morrisville, NC",
			"description": "Level design stuff"
		} , 
		{
			"employer": "BBH Desigh / Insight Animation",
			"title": "Director, Design Visualization Services",
			"location": "Morrisville, NC",
			"description": "Architectural illustration and multimedia"
		} , 
		{
			"employer": "Command Digital Studios",
			"title": "Multimedia Designer",
			"location": "Raleigh, NC",
			"description": "Architectural illustration and multimedia"
		}
	]
};

var education = {
	"schools" : [
		{
			"name": "Pratt Institute",
			"city": "Brooklyn, NY",
			"degree": "BArch",
			"major": "Architecture"
		} , 
		{
			"name": "UNC Charlotte",
			"city": "Charlotte, NC",
			"degree": "BA",
			"major": "Architecture"
		}
	]
};

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

	//Contact Start
	var formattedLocation = HTMLlocation.replace("%data%",bio.contactinfo.location);
	$("#topContacts").prepend(formattedLocation);

	var formattedGit = HTMLgithub.replace("%data%",bio.contactinfo.github);
	$("#topContacts").prepend(formattedGit);

	var formattedEmail = HTMLemail.replace("%data%",bio.contactinfo.email);
	$("#topContacts").prepend(formattedEmail);

	//Header
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
}
bio.displayBio();

//Employment
//Adds the Work Expereince Block
function dispayWork(){
	for(job in work.jobs){
	//Adds the Work Expereince Block
	
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		// Show Employer
		$(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
		//show job location
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		// Show description
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
	}
}
dispayWork();

//Set up "Projects" in the DOM
projects.displayProjects = function(){
	for(proj in projects.project){
		console.log(projects.project[proj]);
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


//Start education section

education["name"] = "Pratt Institute";
education["degree"] = "Bechelor of Architecture";
education["location"] = "Brooklyn, NY";
education["major"] = "Architecture";





//Education

var educationEntry01 = HTMLschoolStart;
$("#education").append(educationEntry01);

var formattedSchoolname = HTMLschoolName.replace("%data%",education.schools.name);
$("#education").append(formattedSchoolname);

var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.location);
$("#education").append(formattedSchoollocation);

var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",education.major);
$("#education").append(formattedSchoolmajor);






//Custom Functions

$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);

});

function logClicks(x,y){
	console.log("You hit x = " + x);
	console.log("You hit y = " + y);

}


function locationizer(work_obj) {

    var locationsList = [];
    for(var job in work_obj.jobs){
        
        locationsList.push(work_obj.jobs[job].location);
        
        
    }
    return locationsList;
}


//$("#main").append(internationalizeButton);