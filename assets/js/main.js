// Import Data
import { profileData, workExperienceData, projectsData } from "./data.js";

// Import Functions
import { dateFormatFunc, isLiveFunc, hasGitHubFunc } from "./data.js";

// Display Role, profileName, logoName and Bio data
const role = document.getElementById("role");
const profileName = document.getElementById("profileName");
const bio = document.getElementById("bio");
const logoName = document.getElementById("logoName");

if (role) {
  role.textContent = profileData.role;
}

if (profileName) {
  profileName.textContent = profileData.profileName;
}

if (bio) {
  bio.textContent = profileData.bio;
}

if (logoName) {
  logoName.textContent = profileData.profileName;
}

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
const educationSection = document.getElementById("education");
const certificationSection = document.getElementById("certification");
const skillSection = document.getElementById("skills");
const contactSection = document.getElementById("contact");

// Hamburger Elements
const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerDisplay = document.getElementById("hamburger-display");
const hamburgerLinks = hamburgerDisplay.querySelectorAll("a");
const hamburgerOpenIcon = document.getElementById("ham-open");
const hamburgerCloseIcon = document.getElementById("ham-close");

// Form Elements
const form = document.getElementById("form");
const submitBtn = document.querySelector('button[type="submit"]');

// Theme Toggle Element
const themeToggles = document.querySelectorAll("#theme-toggle");

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
  const lightModeSvg = toggle.querySelector("#light-mode-svg");
  const darkModeSvg = toggle.querySelector("#dark-mode-svg");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    lightModeSvg.classList.toggle("hide");
    darkModeSvg.classList.toggle("hide");
  });
});

// Work Experiences
const workExperiences = document.getElementById("work-experiences");
const workExperiencesArray = workExperienceData.map((workx) => {
  const { startDate, endDate, title, organization, organizationUrl, location, country, description, tags } = workx;

  // Tags
  const tagsArray = tags.map((tag) => {
    return `
            <div class="flex-row justify-center align-center radius-50 bg-flashWhite pxy-4-12"><p class="medium-14 p-color">${tag}</p></div>
        `;
  });

  return ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${dateFormatFunc(startDate)}</span> - <span>${dateFormatFunc(endDate)}</span></p>

        <!-- Job Description -->
        <div class="flex-column align-start gap-16 w-full">

            <!-- Job Description Heading -->
            <div class="flex-column align-start gap-4 w-full">
                <h3>${title}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720">
                    <span><a class="text-underline web-link" href="${organizationUrl}" target="_blank" rel="noopener noreferrer">${organization}</a></span> &#183; 
                    <span>${location}, ${country}</span>
                </p>
            </div>

            <p class="p-color regular-14 regular-16-720 container-narrow">${description}.</p>

            <!-- Job Tags -->
            <div class="flex-row align-start gap-8 container-narrow flex-wrap"> ${tagsArray.join("")} </div>
        </div>
    </div> 
`;
});

// Display Work Experiences
if (workExperiences) {
  workExperiences.innerHTML = workExperiencesArray.join("");
}

// Projects
const projectsEl = document.getElementById("projects-el");
// Live Projects Array
const liveProjectsArr = projectsData.map((project) => {
  const { type, title, description, tags, liveLink, gitHubLink } = project;

  // Tags
  const tagsArray = tags.map((tag) => {
    return `
            <div class="flex-row justify-center align-center pxy-4-12 gray-border radius-50">
                <p class="medium-14 p-color">${tag}</p>
            </div>
        `;
  });

  const isLiveEl = isLiveFunc(liveLink)
    ? `
            <a href="${liveLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 bg-tampa medium-14 btn-hover">View Live</a>
        `
    : "";

  const hasGitHubEl = hasGitHubFunc(gitHubLink)
    ? `
            <a href="${gitHubLink}" target="_blank" class="flex-row justify-center align-center radius-50 white-color pxy-10-20 tampa-color gray-border medium-14 btn-secondary-hover">GitHub</a> `
    : "";

  if (isLiveFunc(liveLink)) {
    return `             
        <div class="flex-column align-start pxy-32 gap-24 bg-white gray-border radius-12 w-full min-h-320">
              <div class="flex-column align-start gap-16 w-full">
                <!-- Status -->
                <div class="flex-row justify-between align-center w-full">
                  <p class="medium-14 medium-16-720 p-color">${type}</p>

                  <div
                    class="flex-row justify-center align-center pxy-4-12 bg-alplineWhite blue-border radius-50">
                    <p class="medium-12 toryBlue-color">${isLiveFunc(liveLink) ? "Live" : "Ongoing"}</p>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="flex-column align-start gap-16 w-full">
                  <h3 class="w-full">${title}</h3>
                  <p class="p-color regular-14 regular-16-720 w-full">${description}</p>
                  <div class="flex-row flex-wrap align-start gap-8">
                    <!-- Tags -->
                    ${tagsArray.join("")}
                  </div>
                </div>
              </div>

              <!-- Link to Project -->
               <div class="flex flex-row align-center gap-8 w-full margin-t-auto">${isLiveEl} ${hasGitHubEl}</div>
        </div>
    `;
  }
});

// Display Projects
console.log(liveProjectsArr);
if (projectsEl) {
  projectsEl.innerHTML = liveProjectsArr.join("");
}

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
if (eduElement) {
  eduElement.innerHTML = eduDisplay;
}

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
for (let cert of certArray) {
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
if (certElement) {
  certElement.innerHTML = certDisplay;
}

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
if (skillElement) {
  skillElement.innerHTML = skillDisplay;
}

// Form Submission Validation
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "3b5b4b5f-7df0-452e-9018-5c86daac4f1d");

    const originalBtnTxt = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const answer = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await answer.json();

      if (answer.ok) {
        alert("Success! I have received your message");
        form.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went Wrong. Try again");
    } finally {
      submitBtn.textContent = originalBtnTxt;
      submitBtn.disabled = false;
    }
  });
}
