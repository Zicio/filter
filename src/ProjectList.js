import PropTypes from "prop-types";

const ProjectList = (props) => {
  const { projects } = props;
  return (
    <div className="portfolio__cards-wrapper">
      {projects.map((p, index) => (
        <div
          className={`card ${p.category.replace(" ", "-").toLowerCase()}`}
          key={index}
        >
          {""}
          <img src={p.img} alt="Изображение" className="card__image" />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
