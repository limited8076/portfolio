import getPortfolioData from "../PortfolioData";

const Contact = () => {
  const { contact } = getPortfolioData();
  const email = contact?.email || "sankitdev.official@gmail.com";
  const subject = "Inquiry from Portfolio";
  const body = "Hello, I would like to get in touch regarding..."; // Replace with your email

  return (
    <div className="text-center my-20" id="contact">
      <h1 className="text-4xl font-bold mb-10 text-primary">Lets Connect!</h1>
      <p className="text-lg mb-2">Need to get in touch?</p>
      <p className="text-lg mb-6">
        <span className="wave">👋</span> Say hello or drop a quick
        message—whether its for a project, job opportunity, or just to chat! 🚀
      </p>

      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
      >
        <button className="btn btn-primary">Email Me!</button>
      </a>
    </div>
  );
};

export default Contact;
