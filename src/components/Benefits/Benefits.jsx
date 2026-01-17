import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        <span className="section-tag">// SYSTEM_ADVANTAGES: MODULE_02</span>
        <h2 className="benefits-title">Why choose CAPacity?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="card-header">
              <span className="card-id">#01</span>
            </div>
            <h3>Premium Material</h3>
            <p>
              High-quality resin hand-poured for maximum durability and tactile
              feedback.
            </p>
          </div>

          <div className="benefit-card">
            <div className="card-header">
              <span className="card-id">#02</span>
            </div>
            <h3>Artisan Craft</h3>
            <p>
              Each piece is a unique artifact, sculpted with precision and
              attention to detail.
            </p>
          </div>

          <div className="benefit-card">
            <div className="card-header">
              <span className="card-id">#03</span>
            </div>
            <h3>Compatibility</h3>
            <p>
              Designed to fit perfectly on most mechanical keyboards with MX
              switches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
