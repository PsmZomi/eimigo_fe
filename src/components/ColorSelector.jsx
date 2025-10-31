import React from 'react';
import { colorFilters } from '../data/shoeData';
import '../styles/ColorSelector.css';

const ColorSelector = ({ onColorSelect, selectedFilter }) => {
  return (
    <div className="color-section">
      <h3>Choose Color</h3>
      <div className="color-grid">
        {Object.entries(colorFilters).map(([filterKey, filter]) => (
          <div
            key={filterKey}
            className={`color-option ${
              selectedFilter === filter.filter ? 'active' : ''
            }`}
            style={{
              background: filter.background,
              border: filter.border || 'none'
            }}
            onClick={() => onColorSelect(filterKey)}
            title={filter.name}
          >
            <span className="color-name">{filter.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
