import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "../data/productData";

const ProductDetails = ({ addToCart, onBuyNow }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openFeature, setOpenFeature] = useState(null); // ✅ accordion control for mobile

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#86bbd8] text-white px-5 py-2 rounded-lg hover:bg-[#5ea0c5] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const navigateImage = (direction) => {
    const total = product.images.length;
    let newIndex =
      direction === "next"
        ? (selectedImage + 1) % total
        : (selectedImage - 1 + total) % total;
    setRotation((prev) => (prev === 0 ? 180 : 0));
    setSelectedImage(newIndex);
  };

  const handleThumbnailClick = (i) => {
    setSelectedImage(i);
    setRotation(0);
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const calculateSavings = () => product.originalPrice - product.price;
  const calculateSubtotal = () => product.price * quantity;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color first");
      return;
    }
    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      ...product,
      selectedSize,
      selectedColor,
      quantity,
      image: product.images[selectedImage],
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color first");
      return;
    }
    onBuyNow({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      ...product,
      selectedSize,
      selectedColor,
      quantity,
      image: product.images[selectedImage],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🧭 Breadcrumb */}
        <nav className="flex mb-6 text-xs">
          <button
            onClick={() => navigate("/")}
            className="text-[#86bbd8] hover:text-[#5ea0c5] font-medium"
          >
            Home
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <button
            onClick={() => navigate("/products")}
            className="text-[#86bbd8] hover:text-[#5ea0c5] font-medium"
          >
            Products
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 truncate">{product.name}</span>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* 🖼️ Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg h-80 sm:h-96 flex items-center justify-center relative overflow-hidden">
                {isMobile ? (
                  <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    onSlideChange={(swiper) => setSelectedImage(swiper.activeIndex)}
                    modules={[Pagination]}
                    className="w-full h-full"
                  >
                    {product.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`View ${i + 1}`}
                          className="object-contain max-h-full w-full"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <>
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className={`max-h-full max-w-full object-contain transition-transform duration-700 ease-in-out rotate-[${rotation}deg]`}
                    />
                    <button
                      onClick={() => navigateImage("prev")}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => navigateImage("next")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {!isMobile && (
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => handleThumbnailClick(i)}
                      className={`border-2 p-1 rounded-lg bg-white transition-all flex items-center justify-center ${
                        selectedImage === i
                          ? "border-[#86bbd8] scale-105"
                          : "border-gray-200 hover:border-[#86bbd8]"
                      }`}
                    >
                      <img src={img} alt="" className="object-contain w-full h-20" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 🛍️ Info Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#86bbd8] text-sm font-semibold uppercase">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                  <span className="text-gray-600 text-xs ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                {product.name}
              </h1>

              {/* 💰 Price */}
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="line-through text-gray-500 text-sm">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">
                You save ₹{calculateSavings().toLocaleString()}
              </p>

              {/* 📄 Description */}
              <div className="border-t border-gray-100 pt-1">
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* 🧩 Size */}
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-sm font-semibold">Select Size (UK)</h3>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[#86bbd8] text-xs hover:underline"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 border rounded text-sm ${
                        selectedSize === s
                          ? "border-[#86bbd8] bg-[#e0f0f8] text-[#86bbd8]"
                          : "border-gray-300 hover:border-[#86bbd8]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {showSizeGuide && (
                  <div className="mt-2 bg-gray-50 rounded p-3 text-xs">
                    Measure your foot and refer to our size chart for the best fit.
                  </div>
                )}
              </div>

              {/* 🎨 Color */}
              <div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  Select Color:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 border rounded text-sm ${
                        selectedColor === c
                          ? "border-[#86bbd8] bg-[#e0f0f8] text-[#86bbd8]"
                          : "border-gray-300 hover:border-[#86bbd8]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* 🧮 Quantity */}
              <div className="flex justify-between items-center bg-gray-50 rounded p-3 text-sm">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">Qty:</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">
                  ₹{calculateSubtotal().toLocaleString()}
                </p>
              </div>

              {/* 🛒 Buttons */}
              <div className="flex gap-3">
                Live Order coming soon
                {/* <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-[#86bbd8] text-white py-2 rounded font-semibold hover:bg-[#5ea0c5]"
                >
                  🛒 Add to Cart
                </button> */}
                {/* <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600"
                >
                  ⚡ Buy Now
                </button> */}
              </div>
            </div>
          </div>

          {/* 🔑 Key Features */}
          {product.technicalSpecs && (
            <div className="border-t border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🔑 Key Features
              </h3>

              {/* Desktop Table */}
              {!isMobile ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-[#e0f0f8] text-gray-800">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">
                          Component
                        </th>
                        <th className="px-4 py-2 text-left font-semibold">
                          Material / Feature
                        </th>
                        <th className="px-4 py-2 text-left font-semibold">
                          Benefit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {product.technicalSpecs.map((s, i) => (
                        <tr key={i}>
                          <td className="px-4 py-2">{s.component}</td>
                          <td className="px-4 py-2">{s.material}</td>
                          <td className="px-4 py-2">{s.benefit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                // 📱 Accordion for Mobile
                <div className="space-y-3">
                  {product.technicalSpecs.map((s, i) => {
                    const open = openFeature === i;
                    return (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenFeature(open ? null : i)
                          }
                          className="w-full flex justify-between items-center p-3 text-left font-medium text-gray-800"
                        >
                          {s.component}
                          <span
                            className={`transform transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {open && (
                          <div className="px-3 pb-3 text-sm text-gray-600 animate-fadeIn">
                            <p>
                              <span className="font-semibold">
                                Feature:
                              </span>{" "}
                              {s.material}
                            </p>
                            <p>
                              <span className="font-semibold">
                                Benefit:
                              </span>{" "}
                              {s.benefit}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
