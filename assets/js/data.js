
// Profile Data 
const profileData = {
  role: "Frontend Developer",
  profileName: "Edmund S. Kpebah",
  bio: "Frontend Developer with hands-on experience building responsive, user-focused web experiences with HTML, CSS, JavaScript, and React. I combine strong attention to detail with a problem-solving mindset to turn ideas and real-world challenges into clean, intuitive, and reliable digital experiences. I’m driven to learn quickly, take ownership, and contribute meaningfully to every project I work on.",
};

// Work Experiences Data 
const workExperienceData = [
  {
    startDate: new Date(2025, 8),
    endDate: null,
    title: 'Design Engineer (National Service)',
    organization: 'PITTBIC, SCIS - UTAS',
    organizationUrl: 'https://pittbic.cktutas.edu.gh/',
    location: 'Navrongo',
    country: 'Ghana',
    description:
      'Supporting IT training and business incubation initiatives at PITTBIC. Currently designing the website and brand identity (logo, visual system) for PITTBIC, ahead of development.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },

  {
    startDate: new Date(2025, 6),
    endDate: null,
    title: 'Marketing Intern (Unpaid)',
    organization: 'AECINEMAX',
    organizationUrl: 'https://aecinemax.com/',
    location: 'Remote',
    country: 'Ghana',
    description:
      'Contributing to marketing efforts for a creative venture as part of the Intern-with-a-Creative-Venture Program, working directly with the team on content creation and social media design assets to support outreach and brand visibility.',
    tags: ['Figma', 'Adobe Illustrator'],
  },
];

function dateFormatFunc(date) {
  if (date === null) {
    return "Present";
  } else {
    return date.toLocaleDateString("en-Us", { month: "long", year: "numeric" });
  }
};

const projectsData = [
  {
    type: 'E-Commerce App',
    title: 'Printalise',
    description:
      'Contributing to the frontend development of a print-on-demand platform that helps creators sell custom products online',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://printalise.com/',
    gitHubLink: '',
  },
  {
    type: 'Frontend App',
    title: 'Frontend Practice Clone',
    description:
      'Recreating frontendpractice.com as a hands-on build exercise, focused on matching real-world layout and responsive behavior',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'http://edmundkpebah-portfolio.vercel.app/',
    gitHubLink: 'https://github.com/edmundkpebah/edmundkpebah_portfolio',
  },
  {
    type: 'Frontend App',
    title: 'Ready.dev Clone',
    description:
      'Rebuilding ready.dev from scratch, translating its layout, spacing, and interactions',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    gitHubLink: '',
  },
  {
    type: 'Frontend App',
    title: 'Portfolio V2',
    description:
      'Currently designing the next version of my personal portfolio; development begins once the design is finalized',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    gitHubLink: '',
  },
  {
    type: 'Fullstack App',
    title: 'St. Augustine Catholic Chaplaincy Website',
    description:
      "A concept site for my parish chaplaincy in Navrongo, inspired by Elevation Church's web presence",
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    liveLink: '',
    gitHubLink: '',
  },
  {
    type: 'Fullstack App',
    title: 'PITTBIC Website',
    description:
      'A concept website for PITTBIC, to be designed and developed',
    tags: [],
    liveLink: '',
    gitHubLink: '',
  },
  {
    type: 'Fullstack App',
    title: 'InternAfrica Website',
    description:
      'Redeveloping the site for InternAfrica, where I previously completed an internship',
    tags: [],
    liveLink: '',
    gitHubLink: '',
  },
];

function isLiveFunc(liveLink) {
    return liveLink !== "";
};

function hasGitHubFunc(gitHubLink) {
    return gitHubLink !== "";
};

// Education Data
const educationData = [
  {
    startDate: new Date(2022, 0),
    endDate: new Date(2025, 11),
    program: "Bachelor of Science in Computer Science",
    school: "University of Technology and Applied Sciences",
    schoolURL: "https://utas.edu.gh/",
    location: "Navrongo",
    country: "Ghana",
    description: "Undergraduate program in Computer Science, covering foundational and  applied areas including data structures, database systems, software  engineering, and algorithm design and analysis"
  }
];

// Certification Data
const certificationData = [
  {
    startDate: new Date(2025, 11),
    endDate: null,
    course: "Frontend Developer Career Path",
    platform: "Scrimba",
    platformURL: "https://scrimba.com/frontend-path-c0j",
    isOnline: true,
    country: null,
    description: "Project-based course covering the full frontend path in Web Dev Basics,  Making Websites Interactive, Accessible Development, and Essential CSS  Concepts fully completed, with JavaScript, React, and API integration"
  }
];

// Skills Data
const skillsData = [
  {
    category: "Languages",
    skillTags: ["HTML", "CSS", "JavaScript"]
  },
  {
    category: "Frontend",
    skillTags: ["React"]
  },
  {
    category: "Design",
    skillTags: ["Figma", "Adobe Illustrator"]
  },
  {
    category: "Tools",
    skillTags: ["Git", "GitHub"]
  },
  {
    category: "OS",
    skillTags: ["Microsoft Windows", "Linux"]
  }
];
 
// Exporting Data
export { profileData, workExperienceData, projectsData, educationData, certificationData, skillsData };

// Exporting Functions
export { dateFormatFunc, isLiveFunc, hasGitHubFunc };
