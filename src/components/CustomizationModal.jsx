import React, { useState } from "react";
import { colorFilters, shoeSizes } from "../data/shoeData";

const CustomizationModal = ({ shoe, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState("original");
  const [selectedSize, setSelectedSize] = useState(shoeSizes[0]);

  const handleAddToCart = () => {
    onAddToCart({ ...shoe, color: selectedColor, size: selectedSize });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-[95%] md:w-full p-6 sm:p-8 relative animate-scaleIn">
        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black font-bold text-2xl transition-transform hover:scale-110"
          onClick={onClose}
          aria-label="Close customization"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* 🖼️ Shoe Preview */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-auto rounded-2xl shadow-lg object-contain transition-all duration-500"
              style={{
                filter: colorFilters[selectedColor].filter,
              }}
            />
          </div>

          {/* 🎨 Customization Options */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold">{shoe.name}</h2>
              <p className="text-gray-500 line-through">${shoe.originalPrice}</p>
              <p className="text-xl font-semibold text-black">${shoe.price}</p>
            </div>

            {/* 🟢 Color Picker */}
            <div>
              <h3 className="font-semibold mb-2">Choose Color:</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(colorFilters).map(([colorKey, color]) => (
                  <button
                    key={colorKey}
                    onClick={() => setSelectedColor(colorKey)}
                    className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 
                      ${
                        selectedColor === colorKey
                          ? "ring-2 ring-black border-black"
                          : "border-gray-300"
                      }`}
                    style={{
                      background: color.background,
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* 👟 Size Picker */}
            <div>
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black transition-all"
              >
                {shoeSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* 🛒 Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-900 transition-all shadow-lg mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;
