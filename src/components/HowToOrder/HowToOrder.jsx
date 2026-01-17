import "./HowToOrder.css";

const HowToOrder = () => {
  return (
    <section className="about-section">
      <div className="how-to-order">
        <span className="section-tag">// PROTOCOL: ORDER_FLOW_04</span>
        <h2 className="order-title">How to order?</h2>

        <div className="steps-grid">
          <div className="step-item">
            <span className="step-number">01</span>
            <h4>Initial Uplink</h4>
            <p>
              Fill out our contact form with your basic concept and color
              scheme.
            </p>
          </div>
          <div className="step-divider">{">>>"}</div>
          <div className="step-item">
            <span className="step-number">02</span>
            <h4>Design Phase</h4>
            <p>
              One of our specialist designers will contact you to draft the
              blueprints.
            </p>
          </div>
          <div className="step-divider">{">>>"}</div>
          <div className="step-item">
            <span className="step-number">03</span>
            <h4>Production</h4>
            <p>
              Once approved, your keycap is hand-poured and polished in our lab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
