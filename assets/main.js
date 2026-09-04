// Work Experience
const workxElement = document.getElementById("workX-el");
const workxArray = [];
let workDisplay = ``;

// Projects
const projectsEl = document.getElementById("projects-el");
const projectsArray = [];
let projectsDisplay = ``;

const browseAllProjects = document.getElementById("browse-all-projects");

// Skills and Tools
const skillElement = document.getElementById("skill-el");
const skillArray = [];
let skillDisplay = ``;

// Education
const eduElement = document.getElementById("edu-el");
const eduArray = [];
let eduDisplay = ``;

// Certification
const certElement = document.getElementById("cert-el");
const certArray = [];
let certDisplay = ``;

// Page Sections
const heroSection = document.getElementById("hero");
const workExperienceSection = document.getElementById("workExperiences");
const projectSection = document.getElementById("projects");
const browseAllSection = document.getElementById("browse-section");
const educationSection = document.getElementById("education");
const certificationSection = document.getElementById("certification");
const skillSection = document.getElementById("skills");
const contactSection = document.getElementById("contact");

// Browse all Nav
const browseBtn = document.getElementById("browse-all-nav");
const backBtn = document.getElementById("back-nav");

// Hamburger Elements
const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerDisplay = document.getElementById("hamburger-display");
const hamburgerLinks = hamburgerDisplay.querySelectorAll("a");
const hamburgerOpenIcon = document.getElementById("ham-open");
const hamburgerCloseIcon = document.getElementById("ham-close");

// Form Elements
const form = document.getElementById('form');
const submitBtn = document.querySelector('button[type="submit"]');

// Theme Toggle Element
const themeToggles = document.querySelectorAll('#theme-toggle');

// Browse Projects Navigation
browseBtn.addEventListener("click", () => {
  heroSection.classList.add("hide");
  workExperienceSection.classList.add("hide");
  projectSection.classList.add("hide");
  educationSection.classList.add("hide");
  certificationSection.classList.add("hide");
  skillSection.classList.add("hide");
  contactSection.classList.add("hide");

  browseAllSection.classList.remove("hide");

  browseAllSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

backBtn.addEventListener("click", () => {
  heroSection.classList.remove("hide");
  workExperienceSection.classList.remove("hide");
  projectSection.classList.remove("hide");
  educationSection.classList.remove("hide");
  certificationSection.classList.remove("hide");
  skillSection.classList.remove("hide");
  contactSection.classList.remove("hide");

  browseAllSection.classList.add("hide");

  projectSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Hamburger Navigation

// Open Hamburger Display
hamburgerOpenIcon.addEventListener("click", () => {
  hamburgerDisplay.classList.remove("hide");

  hamburgerOpenIcon.classList.add("hide");
  hamburgerCloseIcon.classList.remove("hide");
});

// Hamburger Elements Navigation
hamburgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerDisplay.classList.add("hide");

    hamburgerOpenIcon.classList.remove("hide");
    hamburgerCloseIcon.classList.add("hide");
  });
});

// Close Hamburger display
hamburgerCloseIcon.addEventListener("click", () => {
  hamburgerDisplay.classList.add("hide");

  hamburgerOpenIcon.classList.remove("hide");
  hamburgerCloseIcon.classList.add("hide");
});

// Theme Toggle
themeToggles.forEach((toggle) => {
  const lightModeSvg = toggle.querySelector('#light-mode-svg');
  const darkModeSvg = toggle.querySelector('#dark-mode-svg');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    lightModeSvg.classList.toggle('hide');
    darkModeSvg.classList.toggle('hide');
  })
})

// Work Experience Constructor

class WorkExperience {
  constructor(startDate, endDate, title, organization, organizationURL, location, country, desc, tags) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.title = title;
    this.organization = organization;
    this.organizationURL = organizationURL;
    this.location = location;
    this.country = country;
    this.desc = desc;
    this.tags = tags;
  }
}

WorkExperience.prototype.formatDate = function (date) {
  if (date === null) {
    return "Present";
  } else {
    return date.toLocaleDateString("en-Us", { month: "long", year: "numeric" });
  }
};

// Work Experience 1
const workX01 = new WorkExperience(
  new Date(2025, 8),
  null,
  "Design Engineer (National Service)",
  "PITTBIC, SCIS - UTAS",
  "https://pittbic.cktutas.edu.gh/",
  "Navrongo",
  "Ghana",
  "Supporting IT training and business incubation initiatives at PITTBIC. Currently designing the website and brand identity (logo, visual system) for PITTBIC, ahead of development",
  ["HTML", "CSS", "JavaScript", "Git"],
);
// Add Work Experience 1 to Array
workxArray.push(workX01);

// Work Experience 2
const workX02 = new WorkExperience(
  new Date(2025, 6),
  null,
  "Marketing Intern (Unpaid)",
  "AECINEMAX",
  "https://aecinemax.com/",
  "Remote",
  "Ghana",
  "Contributing to marketing efforts for a creative venture as part of the  Intern-with-a-Creative-Venture Program, working directly with the team  on content creation and social media design assets to support outreach and brand visibility",
  ["Figma", "Adobe Illustrator"],
);

// Add Work Experience 2 to Array
workxArray.push(workX02);

// Loop through Work Experiences Array
for (let workx of workxArray) {
  let tagsEl = ``;
  for (let tag of workx.tags) {
    tagsEl += `
            <div class="flex-row justify-center align-center radius-50 bg-flashWhite pxy-4-12"><p class="medium-14 p-color">${tag}</p></div>
        `;
  }

  workDisplay += ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${workx.formatDate(workx.startDate)}</span> - <span>${workx.formatDate(workx.endDate)}</span></p>

        <!-- Job Description -->
        <div class="flex-column align-start gap-16 w-full">

            <!-- Job Description Heading -->
            <div class="flex-column align-start gap-4 w-full">
                <h3>${workx.title}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720">
                    <span><a class="text-underline web-link" href="${workx.organizationURL}" target="_blank" rel="noopener noreferrer">${workx.organization}</a></span> &#183; 
                    <span>${workx.location}, ${workx.country}</span>
                </p>
            </div>

            <p class="p-color regular-14 regular-16-720 container-narrow">${workx.desc}.</p>

            <!-- Job Tags -->
            <div class="flex-row align-start gap-8 container-narrow flex-wrap"> ${tagsEl} </div>
        </div>
    </div> 
`;
}

// Display Experiences
workxElement.innerHTML = workDisplay;

// Projects Constructor
class Projects {
  constructor(type, title, desc, tags, liveLink, gitHubLink) {
    this.type = type;
    this.title = title;
    this.desc = desc;
    this.tags = tags;
    this.liveLink = liveLink;
    this.gitHubLink = gitHubLink;
  }

  isLive() {
    return this.liveLink !== "";
  }

  gitHubLive() {
    return this.gitHubLink !== "";
  }
}

// Project
const prj07 = new Projects(
  "E-Commerce App",
  "Printalise",
  "Contributing to the frontend development of a print-on-demand platform that helps creators sell custom products online",
  ["HTML", "CSS", "JavaScript", "React"],
  "https://printalise.com/",
  "",
);
// Add Project to array
projectsArray.push(prj07);

// Project 1
const prj01 = new Projects(
  "Frontend App",
  "Frontend Practice Clone",
  "Recreating frontendpractice.com as a hands-on build exercise, focused  on matching real-world layout and responsive behavior",
  ["HTML", "CSS", "JavaScript"],
  "http://edmundkpebah-portfolio.vercel.app/",
  "https://github.com/edmundkpebah/edmundkpebah_portfolio",
);
// Add Project 1 to array
projectsArray.push(prj01);

//Project 2
const prj02 = new Projects(
  "Frontend App",
  "Ready.dev Clone",
  "Rebuilding ready.dev from scratch, translating its layout, spacing,  and interactions",
  ["HTML", "CSS", "JavaScript"],
  "",
  "",
);
// Add Project 2 to array
projectsArray.push(prj02);

//Project 3
const prj03 = new Projects(
  "Frontend App",
  "Portfolio V2",
  "Currently designing the next version of my personal portfolio;  development begins once the design is finalized",
  ["HTML", "CSS", "JavaScript"],
  "#",
  "",
);
// Add Project 3 to array
projectsArray.push(prj03);

//Project 4
const prj04 = new Projects(
  "Fullstack App",
  "St. Augustine Catholic Chaplaincy Website",
  "A concept site for my parish chaplaincy in Navrongo, inspired by  Elevation Church's web presence",
  ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  "",
  "",
);
// Add Project 4 to array
projectsArray.push(prj04);

//Project 5
const prj05 = new Projects("Fullstack App", "PITTBIC Website", "A concept website for PITTBIC, to be designed and developed", [], "", "");
// Add Project 5 to array
projectsArray.push(prj05);

//Project 6
const prj06 = new Projects(
  "Fullstack App",
  "InternAfrica Website",
  "Redeveloping the site for InternAfrica, where I previously completed  an internship",
  [],
  "",
  "",
);
// Add Project 6 to array
projectsArray.push(prj06);

// Loop for projectsEl
for (let project of projectsArray) {
  let tagsEl = ``;
  for (let tag of project.tags) {
    tagsEl += `
            <div class="flex-row justify-center align-center pxy-4-12 gray-border radius-50">
                <p class="medium-14 p-color">${tag}</p>
            </div>
        `;
  }

  // GitHub Link
  let gitHubLinkEl = ``;
  if (project.gitHubLive() === true) {
    gitHubLinkEl = `
    <a href="${project.gitHubLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 tampa-color gray-border">GitHub</a>
        `;
  } else {
    gitHubLinkEl = ``;
  }

  if (project.isLive() === true) {
    projectsDisplay += `             
        <div class="flex-column align-start pxy-32 gap-24 bg-white gray-border radius-12 w-full min-h-320">
              <div class="flex-column align-start gap-16 w-full">
                <!-- Status -->
                <div class="flex-row justify-between align-center w-full">
                  <p class="medium-14 medium-16-720 p-color">${project.type}</p>

                  <div
                    class="flex-row justify-center align-center pxy-4-12 bg-alplineWhite blue-border radius-50">
                    <p class="medium-12 toryBlue-color">${project.isLive() ? "Live" : "Ongoing"}</p>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="flex-column align-start gap-16 w-full">
                  <h3 class="w-full">${project.title}</h3>
                  <p class="p-color regular-14 regular-16-720 w-full">${project.desc}</p>
                  <div class="flex-row flex-wrap align-start gap-8">
                    <!-- Tags -->
                    ${tagsEl}
                  </div>
                </div>
              </div>

              <!-- Link to Project -->
               <div class="flex flex-row align-center gap-8 w-full margin-t-auto">
                  <a href="${project.liveLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 bg-tampa">View Live</a> 
                  ${gitHubLinkEl}
               </div>
        </div>
    `;
  }
}

//Display in projectsEl
projectsEl.innerHTML = projectsDisplay;

// Loop for Browse All
for (let project of projectsArray) {
  let tagsEl = ``;
  for (let tag of project.tags) {
    tagsEl += `
            <div class="flex-row justify-center align-center pxy-4-12 gray-border radius-50">
                <p class="medium-14 p-color">${tag}</p>
            </div>
        `;
  }

  // Project Link
  let liveLinkEl = ``;
  if (project.isLive() === true) {
    liveLinkEl = `
            <a href="${project.liveLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 bg-tampa">View Live</a>
        `;
  } else {
    liveLinkEl = ``;
  }

  // GitHub Link
  let gitHubLinkEl = ``;
  if (project.gitHubLive() === true) {
    gitHubLinkEl = `
            <a href="${project.gitHubLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 tampa-color gray-border">GitHub</a>
        `;
  } else {
    gitHubLinkEl = ``;
  }

  projectsDisplay += `             
        <div class="flex-column align-start pxy-32 gap-24 bg-white gray-border radius-12 w-full min-h-320">
              <div class="flex-column align-start gap-16 w-full">
                <!-- Status -->
                <div class="flex-row justify-between align-center w-full">
                  <p class="medium-14 medium-16-720 p-color">${project.type}</p>

                  <div
                    class="flex-row justify-center align-center pxy-4-12 bg-alplineWhite blue-border radius-50">
                    <p class="medium-12 toryBlue-color">${project.isLive() ? "Live" : "Ongoing"}</p>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="flex-column align-start gap-16 w-full">
                  <h3 class="w-full">${project.title}</h3>
                  <p class="p-color regular-14 regular-16-720 w-full">${project.desc}</p>
                  <div class="flex-row flex-wrap align-start gap-8">
                    <!-- Tags -->
                    ${tagsEl}
                  </div>
                </div>
              </div>

              <!-- Link to Project -->
               <div class="flex flex-row align-center gap-8 w-full margin-t-auto">${liveLinkEl} ${gitHubLinkEl}</div>
        </div>
    `;
}

//Display in BrowseAll
browseAllProjects.innerHTML = projectsDisplay;

// Education Constructor

class Education {
  constructor(startDate, endDate, program, school, schoolURL, location, country, desc) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.program = program;
    this.school = school;
    this.schoolURL = schoolURL;
    this.location = location;
    this.country = country;
    this.desc = desc;
  }

  formatDate(date) {
    if (date === null) {
      return "Present";
    } else {
      return date.toLocaleDateString("en-Us", {
        month: "long",
        year: "numeric",
      });
    }
  }
}

// Education 1
const edu01 = new Education(
  new Date(2022, 0),
  new Date(2025, 11),
  "Bachelor of Science in Computer Science",
  "University of Technology and Applied Sciences",
  "https://utas.edu.gh/",
  "Navrongo",
  "Ghana",
  "Undergraduate program in Computer Science, covering foundational and  applied areas including data structures, database systems, software  engineering, and algorithm design and analysis",
);
// Add edu 1 to Array
eduArray.push(edu01);

// Loop through edu Array
for (let edu of eduArray) {
  eduDisplay += ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${edu.formatDate(edu.startDate)}</span> - <span>${edu.formatDate(edu.endDate)}</span></p>

        <div class="flex-column align-start gap-16 w-full">

            <div class="flex-column align-start gap-4 w-full">
                <h3>${edu.program}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720">
                    <span><a class="text-underline web-link" href="${edu.schoolURL}" target="_blank" rel="noopener noreferrer">${edu.school}</a></span> &#183; 
                    <span>${edu.location}, ${edu.country}</span>
                </p>
            </div>

            <p class="p-color regular-14 container-narrow regular-16-720">${edu.desc}.</p>
        </div>
    </div> 
`;
}

//Display Education
eduElement.innerHTML = eduDisplay;

// Certificatioin Constructor
class Certification {
  constructor(startDate, endDate, course, platform, platformUrl, desc, isOnline, location, country) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.course = course;
    this.platform = platform;
    this.platformUrl = platformUrl;
    this.desc = desc;
    this.isOnline = isOnline;
    this.country = country;
  }

  formatDate(date) {
    if (date === null) {
      return "Present";
    } else {
      return date.toLocaleDateString("en-Us", {
        month: "long",
        year: "numeric",
      });
    }
  }
}

// Certification 1
const cert01 = new Certification(
  new Date(2025, 11),
  null,
  "Frontend Developer Career Path",
  "Scrimba",
  "https://scrimba.com/frontend-path-c0j",
  "Project-based course covering the full frontend path in Web Dev Basics,  Making Websites Interactive, Accessible Development, and Essential CSS  Concepts fully completed, with JavaScript, React, and API integration",
  true,
  null,
);
// Add Certification 1 to Array
certArray.push(cert01);

// Loop through Certification Array
for (cert of certArray) {
  certDisplay += ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${cert.formatDate(cert.startDate)}</span> - <span>${cert.formatDate(cert.endDate)}</span></p>

        <div class="flex-column align-start gap-16 w-full">

            <div class="flex-column align-start gap-4 w-full">
                <h3>${cert.course}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720 ">
                    <span><a class="text-underline web-link" href="${cert.platformUrl}" target="_blank" rel="noopener noreferrer">${cert.platform}</a></span>  &#183; 
                    <span>${cert.isOnline ? "Online" : cert.location || ""}</span>
                </p>
            </div>

            <p class="p-color regular-14 container-narrow regular-16-720">${cert.desc}.</p>
        </div>
    </div> 
`;
}

//Display Certification
certElement.innerHTML = certDisplay;

// Skills Constructor
class Skills {
  constructor(category, skilltags) {
    this.category = category;
    this.skilltags = skilltags;
  }
}

// Skill 1
const skill01 = new Skills("Languages", ["HTML", "CSS", "JavaScript", "TypeScript"]);
// Add Skill to skillsArray
skillArray.push(skill01);

// Skill 2
const skill02 = new Skills("Frontend", ["React"]);
// Add Skill to skillsArray
skillArray.push(skill02);

// Skill 3
const skill03 = new Skills("Design", ["Figma", "Adobe Illustrator"]);
// Add Skill to skillsArray
skillArray.push(skill03);

// Skill 4
const skill04 = new Skills("Tools", ["Git", "GitHub", "Vercel"]);
// Add Skill to skillsArray
skillArray.push(skill04);

// Skill 5
const skill05 = new Skills("OS", ["Microsoft Windows"]);
// Add Skill to skillsArray
skillArray.push(skill05);

// Loop through Skills Array
for (let skill of skillArray) {
  let skilltags_el = ``;

  for (let tag of skill.skilltags) {
    skilltags_el += `
            <div class="flex-row justify-center align-center pxy-4-12 gray-border radius-50">
                <p class="medium-14 p-color">${tag}</p>
            </div>
        `;
  }

  skillDisplay += `
    <div class="flex-column align-start gap-16 w-full">
        <h3 class="medium-16">${skill.category}</h3>

        <div class="flex-row flex-wrap align-content-center gap-8">
            ${skilltags_el}
        </div>
    </div>
    `;
}

//Display Skills
skillElement.innerHTML = skillDisplay;

// Form Submission Validation

form.addEventListener("submit", async(e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "3b5b4b5f-7df0-452e-9018-5c86daac4f1d");

  const originalBtnTxt = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const answer = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await answer.json();

    if (answer.ok) {
      alert("Success! I have received your message");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }

  } catch(error) {
    alert("Something went Wrong. Try again");
  } finally {
    submitBtn.textContent = originalBtnTxt;
    submitBtn.disabled = false;
  }
})



