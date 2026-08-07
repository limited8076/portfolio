import { FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCards = ({ title, description, image, link }) => {
  return (
    <div className="card card-bordered w-full lg:h-96 bg-base-100 lg:flex-row shadow-xl my-5 mx-5 hover:scale-95 transition-all duration-300 ease-in">
      <figure className="px-2">
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover hover:scale-110 transition-all duration-300 ease-in"
        />
      </figure>
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title text-primary text-3xl mt-5">{title}</h2>
        <h3 className="md:w-4/5">{description}</h3>
        <div className="card-actions">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-circle">
                <FaExternalLinkAlt />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectCards;
