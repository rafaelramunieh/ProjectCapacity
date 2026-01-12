import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            <span className="scanner-line"></span>
          </div>
        </div>
        <div className="about-text">
          <span className="section-tag">// DATA_RECORDS: 001</span>
          <h2>Crafting the tactile future</h2>
          <p>
            At CAPacity, we merge the precision of industrial engineering with
            the soul of artisan craftsmanship. Every keycap is a unique
            artifact, hand-poured and polished to transform your workspace into
            a command center.
          </p>
          <p>
            Our mission is to build what doesn't exist yet: pieces that tell a
            story under your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
