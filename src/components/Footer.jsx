import { usePortfolio } from "../PortfolioContext";
 
const Footer = () => {
  const data = usePortfolio();
  const name = data?.footer?.name || data?.home?.name || "sankitdev";

  return (
    <footer className="footer footer-center text-base-content py-5">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - {name}</p>
      </aside>
    </footer>
  );
};

export default Footer;
