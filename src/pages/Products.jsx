import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Image imports
import logo from "../assets/eimigologo1.png";
import shoe22 from "../images/shoe1.png";
import shoe2 from "../images/shoe2.png";
import shoe3 from "../images/shoe3.png";
import shoe4 from "../images/shoe4.png";
import shoe5 from "../images/shoe43.png";
import shoe6 from "../images/ne20.png";
import shoe7 from "../images/hornbill1.png";
import shoe21 from "../images/shoe.png";
import shoe42 from "../images/hornbill3.png";
import shoe240 from "../images/shoe240.png";
import shoe62 from "../images/shoe62.png";
import shoe23 from "../images/shoe23.png";
import highlander from "../images/highlander.png";
import highlander2 from "../images/highlander2.png";
import ne16 from "../images/ne16.png";
import neright from "../images/neright.png"
// --- Product Data ---
const products = [
    {
        id: 1,
        name: "EIMIGO",
        category: "Casual Wear",
        price: 2000,
        originalPrice: 2500,
        images: [shoe23, shoe2],
        description: "Lightweight and versatile, built for urban agility and all-day comfort.",
        inStock: true,
        isNew: false,
    },
    {
        id: 2,
        name: "CHIEF-7",
        category: "Casual Wears",
        price: 2000,
        originalPrice: 2500,
        images: [shoe4, shoe5],
        description: "Engineered for speed and performance with a sleek, low-profile design.",
        inStock: true,
        isNew: false,
    },
    {
        id: 3,
        name: "THE RHINO MAX",
        category: "Sport Wear",
        price: 2000,
        originalPrice: 2500,
        images: [shoe3, shoe240],
        description: "Superior cushioning and stability for your longest runs and toughest workouts.",
        inStock: true,
        isNew: true,
    },
    {
        id: 4,
        name: "THE NE-17 (White)",
        category: "Sport Wear", 
        price: 3000,
        originalPrice: 3500,
        images: [shoe6, shoe62],
        description: "Breathable mesh construction for maximum airflow and flexibility.",
        inStock: true,
        isNew: false,
    },
    {
        id: 8,
        name: "THE NE-17 (Black)",
        category: "Sport Wear", 
        price: 3000,
        originalPrice: 3500,
        images: [neright, ne16],
        description: "Breathable mesh construction for maximum airflow and flexibility.",
        inStock: true,
        isNew: false,
    },
    {
        id: 5,
        name: "HORNBILL",
        category: "Sneakers",
        price: 2200,
        originalPrice: 2500,
        images: [shoe7, shoe42],
        description: "The perfect blend of heritage style and modern, street-ready materials.",
        inStock: true,
        isNew: false,
    },
    {
        id: 6,
        name: "THE GUARDIAN",
        category: "Casual Wears", 
        price: 2200,
        originalPrice: 2500,
        images: [shoe22, shoe21],
        description: "A durable and rugged trainer designed to handle all types of terrain.",
        inStock: true,
        isNew: true,
    },
    {
        id: 7,
        name: "THE HIGHLANDER",
        category: "Casual Wears", 
        price: 3000,
        originalPrice: 3500,
        images: [highlander, highlander2],
        description: "A durable and rugged trainer designed to handle all types of terrain.",
        inStock: true,
        isNew: true,
    },
];

// Simplified categories
const categories = ["All", "Sneakers", "Casual Wears", "Sport Wear",];

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const getDiscount = (price, originalPrice) => {
        if (!originalPrice || originalPrice <= price) return null;
        return Math.round(((originalPrice - price) / originalPrice) * 100);
    };

    return (
        <div className="w-full min-h-screen">
            
            {/* --- Hero/Header Section with Spiral Background --- */}
            <div className="relative w-full pt-3 pb-2 md:pt-12 md:pb-4  bg-linear-to-br from-green-100 to-red-100  overflow-hidden">

                {/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center gap-1 md:gap-2 mb-2">
  <img
    src={logo}
    alt="EIMIGO Logo"
    className="w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-20 object-contain mt-1 md:-mt-1"
  />
  <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-black tracking-tighter leading-tight md:leading-normal">
    STEP INTO EIMIGO TRENDS
  </h1>
</div>

{/* Menu Box */}
<div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 py-2">
  <div className="flex gap-1.5 md:gap-5 overflow-x-auto pb-2 -mx-2 sm:mx-0 scrollbar-hide px-2 sm:px-0">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`shrink-0 px-3 py-1.5 md:px-5 md:py-2 text-md md:text-md font-medium rounded-md transition-all duration-150 whitespace-nowrap border ${
          selectedCategory === cat
            ? "bg-black text-white border-black"
            : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>
</div>
 {/* --- Notice Line --- */}
      <div className="w-full text-center py-3 md:py-4 bg-yellow-100 text-black font-semibold text-sm md:text-base lg:text-xl">
        🕒 Live order will be available from <span className="underline text-rose-600">2nd week of November</span>
      </div>

            {/* --- Products Grid --- */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 md:py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-6 md:gap-y-8">
                {filteredProducts.map((product) => {
                    const discount = getDiscount(product.price, product.originalPrice);

                    return (
                        <div
                            key={product.id}
                            className="group relative cursor-pointer border border-transparent hover:border-black transition-all duration-300 rounded-md overflow-hidden"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            {/* Product Image Container */}
                            <div className="w-full aspect-square bg-gray-200 flex items-center justify-center overflow-hidden transition-all duration-300 relative">
                                {/* First Image */}
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-3 md:p-4 transition-transform group-hover:scale-105 group-hover:opacity-0"
                                />
                                {/* Second Image */}
                                {product.images[1] && (
                                    <img
                                        src={product.images[1]}
                                        alt={`${product.name} hover`}
                                        className="w-full h-full object-contain p-3 md:p-4 absolute top-0 left-0 opacity-0 transition-opacity duration-1500 group-hover:opacity-100"
                                    />
                                )}

                                {/* NEW ARRIVAL Tag */}
                                {product.isNew && !discount && (
                                    <span className="absolute top-1 right-1 md:top-2 md:right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-sm shadow-md z-10">
                                        NEW
                                    </span>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-2 md:p-3 flex flex-col">
                                <h3 className="text-sm md:text-lg text-gray-900 font-semibold leading-tight line-clamp-2">
                                    {product.name}
                                </h3>
                                <p className="text-xs text-gray-500 capitalize mt-0.5 md:mt-1">
                                    {product.category}
                                </p>
                                <div className="mt-1 md:mt-2 flex items-center gap-1 md:gap-2">
                                    <p className="text-sm md:text-base font-bold text-black">
                                        ₹{product.price.toLocaleString()}
                                    </p>
                                    {discount && (
                                        <p className="text-xs md:text-sm text-red-500 line-through">
                                            ₹{product.originalPrice.toLocaleString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty state */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-8 md:py-12">
                    <p className="text-gray-500 text-lg md:text-xl font-medium">No products found for **{selectedCategory}**.</p>
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className="mt-3 md:mt-4 text-sm font-semibold text-black underline hover:no-underline"
                    >
                        View All Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;