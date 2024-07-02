import SolutionsCard from "../../cards/solutions/solutions-card.component";
import "../../sections/solutions/solutions-section.styles.scss";

const solutionsCardInfo: {
  img: string;
  title: string;
  description: string;
  link: string;
}[] = [
  {
    img: "/solutions-images/nc-voip-systems-card-img.webp",
    title: "VOIP Systems",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident aperiam excepturi et a nulla.",
    link: "/voip-systems"
  },
  {
    img: "/solutions-images/nc-internet-connections-card-img.webp",
    title: "Internet Connections",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident aperiam excepturi et a nulla.",
    link: "/internet-connections"
  },
  {
    img: "/solutions-images/nc-training-card-img.webp",
    title: "Training",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident aperiam excepturi et a nulla.",
    link: "/training"
  },
  {
    img: "/solutions-images/nc-consultancy-card-img.webp",
    title: "Consultancy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti provident aperiam excepturi et a nulla.",
    link: "/consultancy"
  }
];

const SolutionsSection = () => {
  return (
    <section className="solutions-container">
      <div className="content-padding">
        <div className="solutions-section-intro">
          <h1 className="solutions-section-title">Our Services</h1>
          <p className="solutions-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minus autem, dolor veritatis, delectus ducimus, velit sunt maiores
            fugit eaque fugiat esse mollitia accusantium. Minus labore assumenda
            facere impedit quae!
          </p>
        </div>
      </div>
      <div className="solution-cards-container content-padding">
        <SolutionsCard solutions={solutionsCardInfo[0]} />
        <SolutionsCard solutions={solutionsCardInfo[1]} />
        <SolutionsCard solutions={solutionsCardInfo[2]} />
        <SolutionsCard solutions={solutionsCardInfo[3]} />
      </div>
    </section>
  );
};

export default SolutionsSection;
