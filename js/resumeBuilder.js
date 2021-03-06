//Objects with loops
var education = {
    "schools": [{
            "name": "Pennsylvania State University",
            "degree": "",
            "majors": ["Security and Risk Analysis - Information and Cyber Security"],
            "location": "University Park, PA",
            "dates": "2015 - Present"
        },
        {
            "name": "United States Army",
            "degree": "",
            "majors": ["Signal Support Specialist"],
            "location": "Fort Gordon, GA",
            "dates": "2007"
        }
    ],
    "onlineCourses": [{
        "school": "Udacity",
        "title": ["Front-End Web Developer Nanodegree"],
        "dates": "March - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedDegree = HTMLschoolLocation.replace("%data%", education.schools[i].degree);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedLocation);
        }
        for (var s = 0; s < education.onlineCourses.length; s++) {
            $("#education").append(HTMLonlineClasses);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[s].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[s].school);
            var formattedSchoolTitle = formattedTitle + formattedSchool;

            $(".online-entry:last").append(formattedSchoolTitle);
            $(".online-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[s].dates));
            $(".online-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[s].url));

        }
    }
};

var work = {
    "jobs": [{
            "title": "Freelance Web Designer",
            "employer": "Self-Employed",
            "location": "Ishpeming, MI",
            "dates": "2012 - Present",
            "description": "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."
        },
        {
            "title": "Web Administrator / Technical Officer",
            "employer": "MMAInsider LLC",
            "location": "Ishpeming, MI",
            "dates": "2013 - 2017",
            "description": "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."

        },
        {
            "title": "Signal Support Specialist",
            "employer": "Michigan Army National Guard",
            "location": "Grand Ledge, MI",
            "dates": "2007 - 2012",
            "description": "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra. T-bone prosciutto ground round capicola venison cow pork. Tongue brisket salami short ribs turkey doner rump. Drumstick beef ribs burgdoggen, rump brisket alcatra sirloin tenderloin. Shank ham kielbasa alcatra fatback. Flank beef ribs pig tenderloin pork loin jowl pancetta frankfurter drumstick ribeye. Shankle salami ball tip rump meatball. Kielbasa cupim chicken, beef ribs hamburger biltong jerky picanha. Pork pork belly picanha ham hock turkey ham."
        }
    ],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var job = work.jobs[i];
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDescription);

        }
    }
};

var bio = {
    "name": "Dane Ford",
    "role": "Web Developer",
    "welcomeMessage": "Hi!  My name is Dane, and I'm a Web Developer.",
    "skills": ["Awesomeness", "Javascript", "HTML/CSS3", "Networking", "Information Security Policy"],
    "contacts": {
        "mobile": "906-869-2709",
        "email": "<a id=linkContact href=\"mailto:dane@daneford.net\">dane@daneford.net</a>",
        "github": "<a id=linkContact href=\"https:\\github.com\\Life9/ \">Life9</a>",
        "twitter": "<a id=linkContact href=\"https:\\twitter.com\\Life9ine\">@Life9ine</a>",
        "location": "Ishpeming, MI"
    },
    "biopic": "images/dane.jpg",
    display: function() {

        var myName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(myName);

        var role = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(role);

        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioPic);

        var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcome);

        var topContacts = $("#topContacts");
        var footerContacts = $("#footerContacts");

        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        topContacts.append(mobile);
        footerContacts.append(mobile);

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        topContacts.append(email);
        footerContacts.append(email);

        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        topContacts.append(github);
        footerContacts.append(github);

        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        topContacts.append(twitter);
        footerContacts.append(twitter);

        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        topContacts.append(location);
        footerContacts.append(location);

        $("#header").append([HTMLskillsStart]);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Javascript Resume",
            "dates": 2017,
            "description": "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra.",
            "images": ["images/197x148.gif"]
        },
        {
            "title": "HTML and CSS3 Portfolio",
            "dates": 2017,
            "description": "Bacon ipsum dolor amet jowl andouille pork chop, pork picanha frankfurter ham ground round jerky shoulder fatback. Short loin filet mignon pig sausage, biltong ribeye tenderloin pork loin drumstick tri-tip chuck jowl beef swine picanha. Doner ground round brisket hamburger pastrami, beef ribs burgdoggen fatback ball tip tenderloin alcatra.",
            "images": ["images/197x148.gif"]
        }
    ],
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

// Google Map
$("#mapDiv").append(googleMap);

education.display();
work.display();
projects.display();
bio.display();
