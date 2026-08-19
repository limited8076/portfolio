import { FaGithub } from "react-icons/fa";
import { usePortfolio } from "../PortfolioContext";

const Hero = () => {
  const data = usePortfolio();
  const { home } = data || {};
  const { name, description, resume, github } = home || {};

  const handleResumeClick = (e) => {
    if (!resume) {
      e.preventDefault();
      return;
    }

    // If resume is passed as a base64 data URL string
    // if (typeof resume === "string" && resume.startsWith("data:")) {
    //   e.preventDefault();
    //   try {
    //     const arr = resume.split(",");
    //     const mimeMatch = arr[0].match(/:(.*?);/);
    //     const mime = mimeMatch ? mimeMatch[1] : "application/pdf";
    //     const bstr = atob(arr[1]);
    //     let n = bstr.length;
    //     const u8arr = new Uint8Array(n);
    //     while (n--) {
    //       u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     const blob = new Blob([u8arr], { type: mime });
    //     const blobUrl = URL.createObjectURL(blob);
    //     window.open(blobUrl, "_blank", "noopener,noreferrer");
    //   } catch {
    //     window.open(resume, "_blank", "noopener,noreferrer");
    //   }
    // }
  };

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
            <a
              href={resume || "#"}
              onClick={handleResumeClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary px-5"
            >
              Resume
            </a>
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

