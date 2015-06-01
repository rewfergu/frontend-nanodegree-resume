var replacement = '%data%';

var bio = {
  name: 'Robert Ferguson',
  role: 'Web Developer',
  contacts: {
    mobile: '512-555-555',
    email: 'rob@rewferguson.com',
    github: 'rewfergu',
    twitter: 'rewfergu',
    location: 'Austin'
  },
  welcomeMessage: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolor, maiores maxime dolores officiis perspiciatis quam et delectus non eveniet dolorem pariatur nulla nesciunt hic provident laudantium. In, aperiam, maiores.',
  skills: [
    'one skill',
    'two skill',
    'red skill',
    'blue skill'
  ],
  biopic: 'http://i.giphy.com/lZ8F4YrRuFqog.gif',
  display: function() {
    var header = $('#header');

    header.prepend(HTMLheaderRole.replace(replacement, this.role)).prepend(HTMLheaderName.replace(replacement, this.name));

    var temp = '';
    temp += HTMLmobile.replace(replacement, this.contacts.mobile);
    temp += HTMLemail.replace(replacement, this.contacts.email);
    temp += HTMLgithub.replace(replacement, this.contacts.github);
    temp += HTMLtwitter.replace(replacement, this.contacts.twitter);
    temp += HTMLlocation.replace(replacement, this.contacts.location);
    $('#topContacts').append(temp);
    $('#footerContacts').append(temp);

    header.append(HTMLbioPic.replace(replacement, this.biopic));
    header.append(HTMLwelcomeMsg.replace(replacement, this.welcomeMessage));

    if (this.skills) {
      header.append(HTMLskillsStart);
      for (var i in this.skills) {
        $('#skills').append(HTMLskills.replace(replacement, this.skills[i]));
      }
    }
  }
};

bio.display();

var education = {
  schools: [
    {
      name: 'Chapman University',
      location: 'Orange, CA',
      degree: 'B.F.A',
      major: 'Film and Television',
      dates: '2002',
      url: 'chapman.edu'
    },
    {
      name: 'Savannah College of Art and Design',
      location: 'Savannah, GA',
      degree: 'M.F.A',
      major: 'Interactive Design and Game Development',
      dates: '2006',
      url: 'scad.edu'
    }
  ],
  onlineCourses: [
    {
      title: '',
      school: '',
      date: '',
      url: ''
    }
  ],
  display: function() {
    var schoolList = $('#education');
    for (var i in this.schools) {
      var temp = '';
      schoolList.append(HTMLschoolStart);
      temp += HTMLschoolName.replace(replacement, this.schools[i].name);
      temp += HTMLschoolDegree.replace(replacement, this.schools[i].degree);
      temp += HTMLschoolDates.replace(replacement, this.schools[i].dates);
      temp += HTMLschoolLocation.replace(replacement, this.schools[i].location);
      temp += HTMLschoolMajor.replace(replacement, this.schools[i].major);
      $(temp).appendTo('.education-entry:last');
    }
  }
};

education.display();

var work = {
  jobs: [
    {
      employer: 'Employer 1',
      title: 'Job Title 1',
      location: 'Los Angeles, CA',
      dates: '1990 - 2000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iure, aperiam minus? Sequi ipsum totam, accusantium exercitationem eveniet in facere facilis libero nobis voluptatum deleniti fugit minus eos quaerat dolorum!'
    },
    {
      employer: 'Employer 2',
      title: 'Job Title 2',
      location: 'Austin, TX',
      dates: '2000 - 2010',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fugit quas adipisci nam aliquam, dicta neque voluptatem unde est doloribus iusto culpa blanditiis placeat vitae qui natus, iure aut ad.'
    }
  ],
  display: function() {
    var workList = $('#workExperience');
    for (var i in this.jobs) {
      var temp = '';
      workList.append(HTMLworkStart);
      temp += HTMLworkEmployer.replace(replacement, this.jobs[i].employer);
      temp += HTMLworkTitle.replace(replacement, this.jobs[i].title);
      temp += HTMLworkDates.replace(replacement, this.jobs[i].dates);
      temp += HTMLworkLocation.replace(replacement, this.jobs[i].location);
      temp += HTMLworkDescription.replace(replacement, this.jobs[i].description);
      $(temp).appendTo('.work-entry:last');
    }
  }
};

work.display();

var projects = {
  projects: [
    {
      title: 'Project 1 Title',
      dates: 'Jan 2010 - Dec 2010',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus accusamus facilis hic vel nihil aliquid iusto nam error quas, temporibus sequi excepturi voluptatem minima aut natus eligendi nulla esse cum.',
      images: [
        'http://placehold.it/200&amp;text=image+1',
        'http://placehold.it/200&amp;text=image+2',
        'http://placehold.it/200&amp;text=image+3'
      ]
    },
    {
      title: 'Project 2 Title',
      dates: 'Jan 2011 - Dec 2011',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus accusamus facilis hic vel nihil aliquid iusto nam error quas, temporibus sequi excepturi voluptatem minima aut natus eligendi nulla esse cum.',
      images: [
        'http://placehold.it/200&amp;text=image+1',
        'http://placehold.it/200&amp;text=image+2',
        'http://placehold.it/200&amp;text=image+3'
      ]
    },
    {
      title: 'Project 3 Title',
      dates: 'Jan 2012 - Dec 2012',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus accusamus facilis hic vel nihil aliquid iusto nam error quas, temporibus sequi excepturi voluptatem minima aut natus eligendi nulla esse cum.',
      images: [
        'http://placehold.it/200&amp;text=image+1',
        'http://placehold.it/200&amp;text=image+2',
        'http://placehold.it/200&amp;text=image+3'
      ]
    }
  ],
  display: function() {
    var projList = $('#projects');
    for (var i in this.projects) {
      var temp = '';
      projList.append(HTMLprojectStart);
      temp += HTMLprojectTitle.replace(replacement, this.projects[i].title);
      temp += HTMLprojectDates.replace(replacement, this.projects[i].dates);
      temp += HTMLprojectDescription.replace(replacement, this.projects[i].description);
      if (this.projects[i].images) {
        for (var j in this.projects[i].images) {
          temp += HTMLprojectImage.replace(replacement, this.projects[i].images[j]);
        }
      }

      $(temp).appendTo('.project-entry:last');
    }
  }
};

projects.display();

$('#mapDiv').append(googleMap);

if (document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('topContacts').style.display = 'none';
}

if (document.getElementsByTagName('h1').length === 0) {
  document.getElementById('header').style.display = 'none';
}

if (document.getElementsByClassName('work-entry').length === 0) {
  document.getElementById('workExperience').style.display = 'none';
}

if (document.getElementsByClassName('project-entry').length === 0) {
  document.getElementById('projects').style.display = 'none';
}

if (document.getElementsByClassName('education-entry').length === 0) {
  document.getElementById('education').style.display = 'none';
}

if (document.getElementsByClassName('flex-item').length === 0) {
  document.getElementById('letsConnect').style.display = 'none';
}

if (document.getElementById('map') === null) {
  document.getElementById('mapDiv').style.display = 'none';
}
