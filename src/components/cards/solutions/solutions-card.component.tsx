import { Link } from "react-router-dom";

import "../../cards/solutions/solutions-card.styles.scss";

const SolutionsCard = ({ solutions }: { solutions: any }) => {
  return (
    <>
      <Link className="solutions-card" to={solutions.link}>
        <img className="solutions-card-img" src={solutions.img} />
        <div className="solutions-card-content">
          <h2 className="solutions-card-title">{solutions.title}</h2>
          <p className="solutions-card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            provident aperiam excepturi et a nulla.
          </p>
        </div>
      </Link>
    </>
  );
};

export default SolutionsCard;
