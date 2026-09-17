// Import Data
import { projectsData } from "./data.js";

// Import Functions
import { isLiveFunc, hasGitHubFunc } from "./data.js";

const projectsArr = projectsData.map( (project) => {
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
});

document.getElementById("browse-all-projects").innerHTML = projectsArr.join("");



