import Starrating from "../starRating/Starrating";
import "./card.css";

export default function Card({
  category,
  image,
  title,
  stars,
  count,
  price,
  description,
}) {
  const limitedText = ({ text }) => {
    const displayText = text.length > 60 ? text.slice(0, 50) + "..." : text;
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="cardImg" />
      <div className="card__content">
        <h3>{title.length > 50 ? title.slice(0, 40) + "..." : title}</h3>
        <div className="rating">
          <Starrating noOfStars={stars} />
          <p>(${count})</p>
        </div>
        <p className="category">{category}</p>
        <p className="description">
          {description.length > 60
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <h2>${price}</h2>
      </div>
      <div className="card__btns">
        <button className="card__btns--btn">Buy Now</button>
        <button className="card__btns--btn">Add to Cart</button>
      </div>
    </div>
  );
}
