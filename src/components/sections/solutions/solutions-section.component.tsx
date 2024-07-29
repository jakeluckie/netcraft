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
      "A comprehensive communication solution with advanced features to meet the demands of modern businesses.",
    link: "/voip-systems"
  },
  {
    img: "/solutions-images/nc-internet-connections-card-img.webp",
    title: "Business Broadband",
    description:
      "High-performance, dependable internet connection tailored to the unique demands of New Zealand businesses.",
    link: "/business-broadband"
  },
  {
    img: "/solutions-images/nc-training-card-img.webp",
    title: "Training",
    description:
      "We offer in-depth training to ensure staff proficiency in operating new systems and equipment.",
    link: "/training"
  },
  {
    img: "/solutions-images/nc-consultancy-card-img.webp",
    title: "Consultancy",
    description:
      "We offer consultancy services to businesses selling VOIP capabilities.",
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
            Our VoIP phone systems delivers crystal-clear calls,
            scalability, advanced features, and easy management. We pair this
            with high-speed, reliable fibre broadband to optimise cloud services
            and remote work. And to ensure seamless integration, we provide expert
            training and consultancy services, helping businesses maximise their
            IT investments and achieve operational excellence.
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
