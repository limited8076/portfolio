import { FaGithub } from "react-icons/fa";
import { usePortfolio } from "../PortfolioContext";

const Hero = () => {
  const data = usePortfolio();
  const { home } = data || {};
  const { name, description, resume, github } = home || {};
  return (
    <div className="hero min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)]">
      <div className="hero-content text-center flex-col">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2">
            Hii, I am <span className="text-primary">{name}</span>{" "}
            <span className="wave">👋</span>
          </h1>
          <p className="py-6 md:w-4/5 mx-auto sm:text-xl">{description}</p>
          <div className="flex justify-center items-center">
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary px-5"
              >
                Resume
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mx-2 text-xl"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

