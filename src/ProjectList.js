const ProjectList = (props) => {
  const { projects } = props;
  return (
    <div className="cards-wrapper">
      {projects.map((p, index) => (
        <div className={`card ${p.category}`} key={index}>
          {""}
          <img src={p.img} alt="Изображение" className="card__image" />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
