import yumrun from "./assets/YumRun.png";
import netflix from "./assets/Netflix.jpg";

function getPortfolioData() {
  const portdata = {
    header: {
      homepage: "",
      title: "Ankit Singh",
    },
    about: {
      name: "Ankit Singh",
      role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer"],
      description:
        "I am an aspiring full-stack developer focused on MERN stack with experience in building responsive, interactive web applications. Passionate about learning new technologies and writing clean, efficient code.",
      resume: "",
      social: {
        github: "https://github.com/sankitdev",
      },
    },
    projects: [
      {
        name: "YumRun",
        description:
          "A food ordering app built with React, Redux, and Tailwind CSS. It offers a clean user interface and seamless user experience for ordering meals.",
        stack: ["React", "Redux", "Tailwind CSS"],
        image: yumrun,
        sourceCode: "https://github.com/sankitdev/YumRun",
        livePreview: "https://yumrun-b81a7.web.app/",
      },
      {
        name: "NetFlix GPT",
        description:
          "Netflix GPT is a single-page web application that allows users to explore movies from the TMDB API, while offering AI-powered content generation through GPT. The app leverages React for the frontend, Redux for state management, and Firebase for authentication.",
        stack: ["React", "Redux", "Tailwind CSS"],
        image: netflix,
        sourceCode: "https://github.com/sankitdev/YumRun",
        livePreview: "https://netflixgpt-b8752.web.app/",
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "CI/CD",
      "Jest",
      "Enzyme",
    ],
    contact: {
      email: "sankitdev.official@gmail.com",
    },
  };

  return portdata;
}

export default getPortfolioData;


