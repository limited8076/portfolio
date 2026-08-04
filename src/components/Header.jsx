import ThemeToggle from "./ThemeToggle";
import getPortfolioData from "../PortfolioData";

const Header = () => {
  const { header } = getPortfolioData();
  const title = header?.title || "Ankit Singh";
  const initials = title
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex justify-between py-8 sm:py-12">
      <h1 className="text-3xl text-primary font-semibold">{initials}</h1>
      <ul className="gap-5 hidden text-xl sm:flex">
        <a
          href="#projects"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Projects</li>
        </a>
        <a
          href="#skills"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Skills</li>
        </a>
        <a
          href="#contact"
          className="hover:text-primary hover:scale-105 font-medium transition-all duration-200 ease-in"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ThemeToggle />
      {/* <DarkModeToggle /> */}
    </div>
  );
};
export default Header;
