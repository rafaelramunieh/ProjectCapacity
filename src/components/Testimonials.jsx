import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <span className="section-tag">// DATABASE_QUERY: RECENT_FEEDBACK</span>
        <h2 className="testimonials-title">Client Feedback</h2>

        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="hover"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <TestimonialCard
                avatar="/kaiser.jpeg"
                name="@4nG3l_0f_Th3_n1gHT"
                rating="★★★★★"
                comment="The tactile response is beyond anything I've tested. It feels like typing on a piece of the future. Gave me Chills!"
              />
            </div>

            <div className="carousel-item" data-bs-interval="4000">
              <TestimonialCard
                avatar="/samuel.jpeg"
                name="@d4yl1ght_d3m0n"
                rating="★★★★☆"
                comment="Build quality is industrial-grade. Finally, a keycap that matches my brutalist setup."
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
