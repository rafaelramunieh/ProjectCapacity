import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="scan-wrapper">
            <div className="reveal-mask">
              <img
                src="/KEYCAP.png"
                alt="Custom Keycap"
                className="scanned-image"
              />
            </div>
          </div>
        </div>
        <div className="about-text">
          <span className="section-tag">// DATA_RECORDS: 001</span>
          <h2>Crafting the tactile future.</h2>
          <p>
            At CAPacity, we merge the precision of industrial engineering with
            the soul of artisan craftsmanship. Every keycap is a unique
            artifact, hand-poured and meticulously polished to transform your
            workspace into a tactical command center. More than just
            accessories, our pieces are designed to bridge the gap between
            high-end hardware and human touch.
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
