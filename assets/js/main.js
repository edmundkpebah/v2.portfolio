// Import Data
import { profileData, workExperienceData, projectsData, educationData, certificationData, skillsData } from "./data.js";

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

// Display Live Projects
if (projectsEl) {
  projectsEl.innerHTML = liveProjectsArr.join("");
}

// Education
const eduElement = document.getElementById("edu-el");
const eduArray = educationData.map( (edu) => {

  const {startDate, endDate, program, school, schoolURL, location, country, description } = edu;

  return ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${dateFormatFunc(startDate)}</span> - <span>${dateFormatFunc(endDate)}</span></p>

        <div class="flex-column align-start gap-16 w-full">

            <div class="flex-column align-start gap-4 w-full">
                <h3>${program}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720">
                    <span><a class="text-underline web-link" href="${schoolURL}" target="_blank" rel="noopener noreferrer">${school}</a></span> &#183; 
                    <span>${location}, ${country}</span>
                </p>
            </div>

            <p class="p-color regular-14 container-narrow regular-16-720">${description}.</p>
        </div>
    </div> 
`;
});

//Display Education
if (eduElement) {
  eduElement.innerHTML = eduArray.join("");
}

// Certification
const certElement = document.getElementById("cert-el");
const certArray = certificationData.map( (cert) => {
  const { startDate, endDate, course, platform, platformURL, description, isOnline, country} = cert;
  
  return ` 
    <div class="flex-column align-start gap-16 py-32 gray-border-top w-full flex-row-1024 gap-32-1024">
        <p class="p-duration regular-14 p-color min-w-256-1024"><span>${dateFormatFunc(startDate)}</span> - <span>${dateFormatFunc(endDate)}</span></p>

        <div class="flex-column align-start gap-16 w-full">

            <div class="flex-column align-start gap-4 w-full">
                <h3>${course}</h3>
                <p class="p-color regular-14 regular-16-720 margin-t-8-720 ">
                    <span><a class="text-underline web-link" href="${platformURL}" target="_blank" rel="noopener noreferrer">${platform}</a></span>  &#183; 
                    <span>${isOnline ? "Online" : country || ""}</span>
                </p>
            </div>

            <p class="p-color regular-14 container-narrow regular-16-720">${description}.</p>
        </div>
    </div> 
`;
})

//Display Certification
if (certElement) {
  certElement.innerHTML = certArray;
}

// Skills and Tools
const skillElement = document.getElementById("skill-el");
const skillArray = skillsData.map( (skill) => {
  const { category, skillTags } = skill;

  const tagsArray = skillTags.map( (tag) => {
    return `
            <div class="flex-row justify-center align-center pxy-4-12 gray-border2 radius-50">
                <p class="medium-14 p-color">${tag}</p>
            </div>
        `;
  }).join("");

  return `
    <div class="flex-column align-start gap-16 w-full">
        <h3 class="medium-16">${category}</h3>

        <div class="flex-row flex-wrap align-content-center gap-8">
            ${tagsArray}
        </div>
    </div>
    `;
});

//Display Skills and Tools
if (skillElement) {
  skillElement.innerHTML = skillArray.join("");
}

// Form Elements
const form = document.getElementById("form");
const submitBtn = document.querySelector('button[type="submit"]');

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
};
