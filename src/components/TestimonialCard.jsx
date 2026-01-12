import "./TestimonialCard.css";

const TestimonialCard = ({ avatar, name, rating, comment }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="user-photo" />
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-rating">{rating}</span>
      </div>
      <p className="user-comment">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;
