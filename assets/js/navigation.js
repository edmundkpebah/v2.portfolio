// Hamburger Elements
const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerDisplay = document.getElementById("hamburger-display");
const hamburgerLinks = hamburgerDisplay.querySelectorAll("a");
const hamburgerOpenIcon = document.getElementById("ham-open");
const hamburgerCloseIcon = document.getElementById("ham-close");

// Page Sections
const workExperienceSection = document.getElementById("workExperiences");
const projectSection = document.getElementById("projects");
const educationSection = document.getElementById("education");
const certificationSection = document.getElementById("certification");
const skillSection = document.getElementById("skills");
const contactSection = document.getElementById("contact");

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

// Theme Toggle Element
const themeToggles = document.querySelectorAll("#theme-toggle");

// Theme Toggle
themeToggles.forEach((toggle) => {
  const lightModeSvg = toggle.querySelector("#light-mode-svg");
  const darkModeSvg = toggle.querySelector("#dark-mode-svg");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    lightModeSvg.classList.toggle("hide");
    darkModeSvg.classList.toggle("hide");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.toggle("dark-mode");

  themeToggles.forEach((toggle) => {
    const lightModeSvg = toggle.querySelector("#light-mode-svg");
    const darkModeSvg = toggle.querySelector("#dark-mode-svg");

    lightModeSvg.classList.toggle("hide");
    darkModeSvg.classList.toggle("hide");
  });
}
