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
            <div className="relative w-full pt-4 pb-2 md:pt-12 md:pb-4  bg-gradient-to-br from-green-100 to-red-100  overflow-hidden">
                {/* Spiral Background Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Spiral path container */}
                    <div className="relative w-full h-full">
                        {/* Spiral dots - creating a spiral pattern */}
                        
                      
                        <div className="absolute top-10 left-4 w-2 h-2 bg-black rounded-full animate-spiral-4"></div>
                       
                     
                        <div className="absolute top-28 left-2 w-2 h-2 bg-yellow-500 rounded-full animate-spiral-7"></div>
                      
                        <div className="absolute top-40 left-4 w-2 h-2 bg-green-500 rounded-full animate-spiral-9"></div>
                        <div className="absolute top-48 left-10 w-2 h-2 bg-red-500 rounded-full animate-spiral-10"></div>
                        
                        {/* Right side spiral continuation */}
                        <div className="absolute top-56 right-8 w-8 h-2 bg-yellow-500 rounded-full animate-spiral-11"></div>
                        <div className="absolute top-48 right-4 w-2 h-2 bg-black rounded-full animate-spiral-12"></div>
                     
                        <div className="absolute top-32 right-6 w-2 h-2 bg-red-500 rounded-full animate-spiral-14"></div>
                       
                        
                        {/* Bottom spiral */}
                        <div className="absolute bottom-32 left-12 w-2 h-2 bg-black rounded-full animate-spiral-16"></div>
                        <div className="absolute bottom-24 left-16 w-2 h-2 bg-green-500 rounded-full animate-spiral-17"></div>
                        <div className="absolute bottom-16 left-20 w-2 h-2 bg-red-500 rounded-full animate-spiral-18"></div>
          
                       
                        
                        {/* Final spiral going up to login area */}
                        <div className="absolute bottom-2 right-32 w-2 h-2 bg-green-500 rounded-full animate-spiral-21"></div>
                        <div className="absolute bottom-8 right-28 w-2 h-2 bg-red-500 rounded-full animate-spiral-22"></div>
                        <div className="absolute bottom-16 right-24 w-2 h-2 bg-yellow-500 rounded-full animate-spiral-23"></div>
                        <div className="absolute bottom-24 right-20 w-2 h-2 bg-black rounded-full animate-spiral-24"></div>
                    </div>
                </div>

                {/* Content */}
<div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center gap-1 md:gap-2 mb-2">
  <img
    src={logo}
    alt="EIMIGO Logo"
    className="w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mt-3 md:-mt-1"
  />
  <h1 className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-black tracking-tighter leading-tight md:leading-normal">
    STEP INTO EIMIGO TRENDS
  </h1>
</div>

{/* Menu Box */}
<div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 py-2">
  <div className="flex gap-1.5 md:gap-5 overflow-x-auto pb-2 -mx-2 sm:mx-0 scrollbar-hide px-2 sm:px-0">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`flex-shrink-0 px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-md font-medium rounded-md transition-all duration-150 whitespace-nowrap border ${
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

            {/* Add CSS for spiral animations */}
            <style jsx>{`
                @keyframes spiral-1 {
                    0% { transform: translate(0, 0) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-2 {
                    0% { transform: translate(-10px, -10px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-3 {
                    0% { transform: translate(20px, -20px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-4 {
                    0% { transform: translate(-15px, 15px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-5 {
                    0% { transform: translate(25px, 25px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-6 {
                    0% { transform: translate(-30px, -30px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-7 {
                    0% { transform: translate(35px, -35px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-8 {
                    0% { transform: translate(-40px, 40px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-9 {
                    0% { transform: translate(45px, 45px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-10 {
                    0% { transform: translate(-50px, -50px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-11 {
                    0% { transform: translate(55px, -55px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-12 {
                    0% { transform: translate(-60px, 60px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-13 {
                    0% { transform: translate(65px, 65px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-14 {
                    0% { transform: translate(-70px, -70px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-15 {
                    0% { transform: translate(75px, -75px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-16 {
                    0% { transform: translate(-80px, 80px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-17 {
                    0% { transform: translate(85px, 85px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-18 {
                    0% { transform: translate(-90px, -90px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-19 {
                    0% { transform: translate(95px, -95px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-20 {
                    0% { transform: translate(-100px, 100px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-21 {
                    0% { transform: translate(105px, 105px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-22 {
                    0% { transform: translate(-110px, -110px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-23 {
                    0% { transform: translate(115px, -115px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }
                @keyframes spiral-24 {
                    0% { transform: translate(-120px, 120px) scale(0); opacity: 0; }
                    100% { transform: translate(0, 0) scale(1); opacity: 1; }
                }

                .animate-spiral-1 { animation: spiral-1 0.5s ease-out forwards; }
                .animate-spiral-2 { animation: spiral-2 0.6s ease-out 0.1s forwards; }
                .animate-spiral-3 { animation: spiral-3 0.7s ease-out 0.2s forwards; }
                .animate-spiral-4 { animation: spiral-4 0.8s ease-out 0.3s forwards; }
                .animate-spiral-5 { animation: spiral-5 0.9s ease-out 0.4s forwards; }
                .animate-spiral-6 { animation: spiral-6 1.0s ease-out 0.5s forwards; }
                .animate-spiral-7 { animation: spiral-7 1.1s ease-out 0.6s forwards; }
                .animate-spiral-8 { animation: spiral-8 1.2s ease-out 0.7s forwards; }
                .animate-spiral-9 { animation: spiral-9 1.3s ease-out 0.8s forwards; }
                .animate-spiral-10 { animation: spiral-10 1.4s ease-out 0.9s forwards; }
                .animate-spiral-11 { animation: spiral-11 1.5s ease-out 1.0s forwards; }
                .animate-spiral-12 { animation: spiral-12 1.6s ease-out 1.1s forwards; }
                .animate-spiral-13 { animation: spiral-13 1.7s ease-out 1.2s forwards; }
                .animate-spiral-14 { animation: spiral-14 1.8s ease-out 1.3s forwards; }
                .animate-spiral-15 { animation: spiral-15 1.9s ease-out 1.4s forwards; }
                .animate-spiral-16 { animation: spiral-16 2.0s ease-out 1.5s forwards; }
                .animate-spiral-17 { animation: spiral-17 2.1s ease-out 1.6s forwards; }
                .animate-spiral-18 { animation: spiral-18 2.2s ease-out 1.7s forwards; }
                .animate-spiral-19 { animation: spiral-19 2.3s ease-out 1.8s forwards; }
                .animate-spiral-20 { animation: spiral-20 2.4s ease-out 1.9s forwards; }
                .animate-spiral-21 { animation: spiral-21 2.5s ease-out 2.0s forwards; }
                .animate-spiral-22 { animation: spiral-22 2.6s ease-out 2.1s forwards; }
                .animate-spiral-23 { animation: spiral-23 2.7s ease-out 2.2s forwards; }
                .animate-spiral-24 { animation: spiral-24 2.8s ease-out 2.3s forwards; }
            `}</style>
        </div>
    );
};

export default Products;