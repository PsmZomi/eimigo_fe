import React, { useState } from "react";
import { shoeData } from "../data/shoeData";
import CustomizationModal from "../components/CustomizationModal";

const NewDrop = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);

  const handleCustomizeClick = (shoeId) => {
    const shoe = shoeData[shoeId];
    setSelectedShoe(shoe);
  };

  const handleCloseModal = () => setSelectedShoe(null);
  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    handleCloseModal();
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          The New Drop Collection
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-600">
          Discover the latest arrivals crafted for those who lead with style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.keys(shoeData).map((key) => {
          const shoe = { ...shoeData[key], id: key };
          return (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-72 object-contain p-6 transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5 flex-grow text-center">
                <h3 className="font-semibold text-lg text-gray-900">
                  {shoe.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {shoe.description}
                </p>
                <div className="mt-3 flex justify-center items-center gap-2">
                  <span className="text-lg font-bold text-black">
                    ₹{shoe.price}
                  </span>
                  {shoe.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{shoe.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 pt-0 text-center">
                <button
                  onClick={() => handleCustomizeClick(shoe.id)}
                  className="w-full bg-black text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg"
                >
                  Customize
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Customization Modal */}
      {selectedShoe && (
        <CustomizationModal
          shoe={selectedShoe}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};

export default NewDrop;
