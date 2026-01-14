import "./TestimonialCard.css";

const TestimonialCard = ({ avatar, name, rating, comment }) => {
  const maxLength = 135;
  const limitedComment =
    comment.length > maxLength ? comment.slice(0, maxLength) + "..." : comment;
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="user-photo" />
      <div className="user-info">
        <span className="user-name">{name}</span>
        <span className="user-rating">{rating}</span>
      </div>
      <p className="user-comment">"{limitedComment}"</p>
    </div>
  );
};

export default TestimonialCard;
