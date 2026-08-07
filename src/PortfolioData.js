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
  };

  return portdata;
}

export default getPortfolioData;
