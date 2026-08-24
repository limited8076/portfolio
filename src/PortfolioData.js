import yumrun from "./assets/YumRun.png";
import netflix from "./assets/Netflix.jpg";

function getPortfolioData() {
  const portdata = {
    home: {
      name: "Ankit Singh",
      description:
        "I am an aspiring full-stack developer focused on MERN stack with experience in building responsive, interactive web applications. Passionate about learning new technologies and writing clean, efficient code.",
      resume: "",
      github: "https://github.com/sankitdev",
      avatar: "",
    },

    projects: [
      {
        title: "YumRun",
        description:
          "A food ordering app built with React, Redux, and Tailwind CSS. It offers a clean user interface and seamless user experience for ordering meals.",
        image: yumrun,
        link: "https://yumrun-b81a7.web.app/",
      },
      {
        title: "NetFlix GPT",
        description:
          "Netflix GPT is a single-page web application that allows users to explore movies from the TMDB API, while offering AI-powered content generation through GPT. The app leverages React for the frontend, Redux for state management, and Firebase for authentication.",
        image: netflix,
        link: "https://netflixgpt-b8752.web.app/",
      },
    ],

    tech: {
      Frontend: [
        { name: "HTML", image: "" },
        { name: "CSS", image: "" },
        { name: "JavaScript", imag: "" },
        { name: "TypeScript", imag: "" },
        { name: "React", image: "" },
        { name: "Next.js", image: "" },
        { name: "Tailwind CSS", image: "" },
        { name: "Redux", image: "" },
      ],
      Backend: [
        { name: "Node.js", image: "" },
        { name: "Express", image: "" },
        { name: "MongoDB", image: "" },
      ],
      Technologies: [
        { name: "VS Code", image: "" },
        { name: "Git", image: "" },
      ],
    },

    Contact: {
      Heading : "Need to get in touch?",
      description : " Say hello or drop a quick message—whether its for a project, job opportunity, or just to chat! 🚀",
      socials: [
        {
          platform: "gmail",
          name: "Gmail",
          url: "mailto:sankitdev@gmail.com",
        },
        {
          platform: "twitter",
          name: "Twitter",
          url: "https://twitter.com/sankitdev",
        },
        {
          platform: "linkedin",
          name: "LinkedIn",
          url: "https://linkedin.com/in/sankitdev",
        },
        {
          platform: "instagram",
          name: "Instagram",
          url: "https://instagram.com/sankitdev",
        },
        {
          platform: "youtube",
          name: "YouTube",
          url: "https://youtube.com/@sankitdev",
        },
      ],
    },

    footer: {
      name: "sankitdev",
    },
  };

  return portdata;
}

export default getPortfolioData;
