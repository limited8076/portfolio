import ProjectCards from "./ProjectCards";
import { usePortfolio } from "../PortfolioContext";

const Project = () => {
  const data = usePortfolio();
  const projects = data?.projects || [];
  return (
    <div id="projects">
      <h1 className="text-center text-4xl text-primary font-semibold">
        PROJECTS
      </h1>
      <div className="flex justify-center items-center flex-wrap mt-10">
        {projects.map((item, index) => (
          <ProjectCards
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
