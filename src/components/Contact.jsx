import { usePortfolio } from "../PortfolioContext";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const icons = {
  gmail: <SiGmail />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
};

const Contact = () => {
  const data = usePortfolio();
  const { Heading, description } = data?.Contact || {};

  // Priority: socials from inputdata (sent by main site via postMessage at root level)
  // Fallback: hardcoded socials in PortfolioData.js -> Contact.socials
  const socials =
    data?.socials !== undefined
      ? data.socials
      : data?.Contact?.socials ?? [];

  return (
    <div className="text-center my-20" id="contact">
      <h1 className="text-4xl font-bold mb-10 text-primary">Lets Connect!</h1>
      {Heading && <p className="text-lg mb-2">{Heading}</p>}
      {description && (
        <p className="text-lg mb-6">
          <span className="wave">👋</span>{description}
        </p>
      )}

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary text-xl"
            title={item.name || item.platform}
          >
            {icons[item.platform?.toLowerCase()] || item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
