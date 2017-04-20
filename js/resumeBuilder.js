
//Objects
var education = {
    "schools": [
        {
            "name" : "Pennsylvania State University",
            "major" : ["Security and Risk Analysis - Information and Cyber Security"],
            "location" : "University Park, PA"
        },
        {
            "name" : "United States Army",
            "major" : ["Signal Support Specialist"],
            "location" : "Fort Gordon, Georgia"
        }
    ],
    "onlineCourse" : [
        {
             "school" : "Udacity",
             "title" : ["Front-End Web Developer Nano-Degree"],
             "dates" : "March - Present",
             "url" : "http://www.udacity.com"
        }
    ]
}

var work = {
    "jobs": [
        {
            "title" : "Freelance Web Designer",
            "employer" : "Self-Employed",
            "location" : "Ishpeming, MI",
            "dates" : "2012 - Present",
            "description" : "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."
        },
        {
            "title" : "Web Administrator / Technical Officer",
            "employer" : "MMAInsider LLC",
            "location" : "Ishpeming, MI",
            "dates" : "2013 - 2017",
            "description" : "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."

        },
        {
            "title" : "Signal Support Specialist",
            "employer" : "Michigan Army National Guard",
            "location" : "Grand Ledge, MI",
            "dates" : "2007 - 2012",
            "description" : "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."
        }
    ],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDescription);

        }
    }
}

var bio = {
    "name" : "Dane Ford",
    "role" : "Web Developer",
    "welcomeMessage" : "Hi!  My name is Dane, and I'm a Web Developer.",
    "skills" : ["Awesomeness", "Javascript", "HTML/CSS3", "Networking", "Information Security Policy"],
    "contacts" : [{
        "mobile" : "906-869-2709",
        "email" : "<a id=linkContact href=\"mailto:dane@daneford.net\">dane@daneford.net</a>",
        "github" : "<a id=linkContact href=\"https:\\github.com\\Life9/ \">Life9</a>",
        "twitter" : "<a id=linkContact href=\"https:\\twitter.com\\Life9ine\">@Life9ine</a>",
        "location": "Ishpeming, MI"
    }],
    "biopic" : "images/dane.jpg",
    display : function() {

        var myName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(myName);

        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioPic);

        var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
        $("#header").append(welcome);

        var topContacts = $("#topContacts");

        var mobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
        topContacts.append(mobile);

        var email = HTMLemail.replace("%data%", bio.contacts[0].email);
        topContacts.append(email);

        var github = HTMLgithub.replace("%data%", bio.contacts[0].github);
        topContacts.append(github)

        var twitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
        topContacts.append(twitter)

        var location = HTMLlocation.replace("%data%", bio.contacts[0].location);
        topContacts.append(location)

        $("#header").append([HTMLskillsStart]);

        for(var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}


var projects = {
    "projects" : [
        {
            "title" : "Javascript Resume",
            "dates" : 2017,
            "description" : "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra.",
            "image" : "images/197x148.gif"
        },
        {
            "title" : "HTML and CSS3 Portfolio",
            "dates" : 2017,
            "description" : "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra.",
            "image" : "images/197x148.gif"
        }
    ],
    display : function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);
            $(".project-entry:last").append(formattedImage);
        }
    }
}


//Singular Variables and Commands



$("#mapDiv").append(googleMap);

//Functions and Loops

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});






// Internationalize Button to capitalize last name
// function inName(name) {
//     var nameArray = name.split(" ");
//     nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);
//     nameArray[1] = nameArray[1].toUpperCase();
//     return (nameArray.join(" "))
// }
//
//
// $("#main").append(internationalizeButton);

work.display();
projects.display();
bio.display();
