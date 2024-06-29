import "../../cards/solutions/solutions-card.styles.scss";

const SolutionsCard = ({solutions} : {solutions: any}) => {
  return (
    <>
      <div className="solutions-card">
        <img className="solutions-card-img" src={solutions.img} />
        <div className="solutions-card-content">
          <h2 className="solutions-card-title">{solutions.title}</h2>
          <p className="solutions-card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            provident aperiam excepturi et a nulla.
          </p>
        </div>
      </div>
    </>
  );
};

export default SolutionsCard;
