import React from "react";
import "../styles/ShoeCard.css";

const ShoeCard = ({ shoeType, shoe, onCustomizeClick }) => {
  return (
    <div className="shoe-card" data-shoe={shoeType}>
      {/* ✅ Shoe image section */}
      <div className="shoe-image-container">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="shoe-image"
          loading="lazy"
        />
      </div>

      {/* ✅ Shoe info section */}
      <div className="shoe-info">
        <h3 className="shoe-name">{shoe.name}</h3>
        <p className="shoe-description">{shoe.description}</p>

        <div className="shoe-pricing">
          <span className="current-price">₹{shoe.price}</span>
          {shoe.originalPrice && (
            <span className="original-price">₹{shoe.originalPrice}</span>
          )}
        </div>

        <button
          className="customize-btn"
          onClick={() => onCustomizeClick(shoeType)}
        >
          Customize Now
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
