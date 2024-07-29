import "../../sections/about/about-section.styles.scss";

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container content-padding">
          <div className="about-section-content">
            <h2 className="about-section-title">About Us</h2>
            <p className="about-section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              dolore natus esse. Voluptas ab aliquam animi deserunt et
              accusantium quae, eius nisi enim, voluptate odit!
            </p>
          </div>
          <div className="about-section-img-bg">
            <img
              className="about-section-img"
              src="/office-tour-myob-nz-1000x677-2021-office-area_1.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
