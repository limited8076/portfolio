import ThemeToggle from "./ThemeToggle";
import { usePortfolio } from "../PortfolioContext";

const Header = () => {
  const data = usePortfolio();
  const name = data?.home?.name || "Portfolio";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const avatar = data?.home?.avatar;

  return (
    <div className="flex justify-between items-center py-8 sm:py-12">
      <div className="flex items-center gap-3">
        {avatar ? (
          <div className="avatar">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden shadow-md">
              <img
                src={avatar}
                alt={name || "Avatar"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="avatar placeholder">
            <div className="bg-primary/20 text-primary border border-primary/40 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl shadow-md">
              <span>{initials}</span>
            </div>
          </div>
        )}
      </div>
      <ul className="gap-12 hidden text-xl sm:flex">
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
