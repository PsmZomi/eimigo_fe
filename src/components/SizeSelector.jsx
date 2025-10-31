import React from 'react';
import '../styles/SizeSelector.css';

const SizeSelector = ({ sizes, onSizeSelect, selectedSize }) => {
  return (
    <div className="size-section">
      <h3>Select Size</h3>
      <div className="size-grid">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-btn ${
              selectedSize === size ? 'active' : ''
            }`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
