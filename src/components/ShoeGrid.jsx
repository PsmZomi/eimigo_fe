import React from 'react';
import ShoeCard from './ShoeCard';
import '../styles/ShoeGrid.css';

const ShoeGrid = ({ shoes, onCustomizeClick }) => {
  return (
    <section className="shoe-grid-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Base Shoe</h2>
          <p>Select a shoe model to start customizing</p>
        </div>
        <div className="shoe-grid">
          {Object.entries(shoes).map(([shoeType, shoe]) => (
            <ShoeCard
              key={shoeType}
              shoeType={shoeType}
              shoe={shoe}
              onCustomizeClick={onCustomizeClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoeGrid;
