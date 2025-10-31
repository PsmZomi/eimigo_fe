import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { shoeData } from "../data/shoeData";
import vibeImage from "../images/shoe1.png";
import { Link } from "react-router-dom";
import about from "../images/about.png";
import shoe3 from "../images/shoe3.png";
import { Truck, Shield, RotateCcw, Award, TrendingUp } from 'lucide-react';

const Homepage = ({ onCustomizeClick }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      text: `"EIMIGO represents the spirit of the North East like no other brand. Proud to be associated!"`,
      author: "- Rii, Fashion Influencer",
    },
    {
      text: `"The quality and design of EIMIGO shoes are exceptional. They truly understand our culture."`,
      author: "- Guite, EIMIGO Ambassador",
    },
    {
      text: `"Finally, a brand that celebrates our roots while looking to the future. EIMIGO is revolutionary!"`,
      author: "- Johnny, Music Artist",
    },
  ];



  // Rotate testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  });

  // Auto-scroll carousel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1; // adjust speed
    const interval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // reset to start
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 20); // smaller = smoother scroll

    return () => clearInterval(interval);
  }, []);

  const ProductCard = ({ shoe, onClick }) => (
    <div 
      className="relative group cursor-pointer bg-white overflow-hidden rounded-md shadow-lg flex-shrink-0 w-64 sm:w-72 md:w-80"
      onClick={() => onClick(shoe.id)}
    >
      {/* Product Image */}
      <div className="relative w-full h-64 sm:h-72 md:h-88 bg-gray-50">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-6"
        />
      </div>

      {/* Text Overlay - Bottom Inset */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white">
          <h3 className="text-md sm:text-lg font-semibold mb-1">
            {shoe.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-green-400 font-bold text-lg">₹{shoe.price}</p>
              <p className="text-gray-300 line-through text-sm">₹{shoe.originalPrice}</p>
            </div>
            <button className="bg-white text-black text-sm font-medium px-3 py-1.5 rounded hover:bg-gray-200 transition-colors">
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Crafted for Trendsetters Section */}
      <section className="bg-white text-black py-4 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 relative inline-block mt-8">
             Crafted for the <span className="text-green-500">Trendsetters</span>
            <span className="absolute left-1/2 bottom-[-10px] transform -translate-x-2/3 block w-24 h-1 bg-green-400 rounded-full"></span>
          </h2>
        </div>

       
          <div className="flex flex-col lg:flex-row items-center gap-10 ">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-md md:text-xl text-gray-600 leading-relaxed text-justify">
                EIMIGO is for those who want to reset the mindset and thinking system to stand out in the competition, not just fit in. We blend authentic design with next-level comfort to create shoes that are as unique as you are.
              </p>
              
              <p className="text-md md:text-xl text-gray-600 leading-relaxed text-justify">
                Each pair tells a story, a blend of our roots and your personal journey. Our designs are inspired by the rich cultural heritage of the North East, reimagined for the contemporary urban lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/about"
                  className="bg-black text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all text-center shadow-sm"
                >
                  Our Story
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-gray-900 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all text-center"
                >
                  Shop Collection
                </Link>
              </div>
            </div>

          {/* Right: Auto-scroll Image Carousel */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div
                ref={carouselRef}
                className="flex overflow-x-auto rounded-2xl snap-x snap-mandatory scrollbar-hide h-96"
              >
                {[vibeImage, about, shoe3].map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <img
                      src={img}
                      alt={`EIMIGO Style ${index + 1}`}
                      className="w-full h-72 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 🆕 The New Drop Section */}
<section className="py-16 px-4 sm:px-6 lg:px-16">
  {/* 🏷️ Header */}
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading">
      The New Drop
    </h2>
    <p
      className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-600 font-sans"
      title="Upcoming designs — bold, authentic, and made for the next Wave."
    >
      Upcoming designs — Bold, Authentic, and made for the Next Wave.
    </p>
  </div>

  {/* 🛍️ Product Grid */}
  <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {Object.keys(shoeData).map((key) => {
      const shoe = { ...shoeData[key], id: key };
      const isUpcoming = true; // 👈 all upcoming for now
      const showPriceAndButton = false; // 👈 Set to true to show price and button

      return (
        <div
          key={key}
          className="relative bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
        >
          {/* 🖼️ Image */}
          <div className="relative overflow-hidden">
            <img
              src={shoe.image}
              alt={shoe.name}
              className={`w-full h-72 object-contain p-6 transition-transform duration-500 group-hover:scale-105 ${
                isUpcoming ? "blur-md brightness-90" : ""
              }`}
            />

            {/* 🏷️ Overlay */}
            {isUpcoming && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-lg bg-black/50">
                <span className="text-xl font-bold tracking-wide drop-shadow-md">
                   In Production
                </span>
                <span className="text-sm text-red-400 mt-1 opacity-90">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* 📄 Info */}
          <div className="p-2 flex-grow text-center">
            <h3 className="font-semibold text-lg text-gray-900 font-heading">
              {shoe.name}
            </h3>
            {/* 🎯 Price Section - Conditionally rendered */}
            {showPriceAndButton && (
              <div className="mt-1 flex justify-center items-center gap-2">
                <span className="text-lg font-bold text-black">₹{shoe.price}</span>
                {shoe.originalPrice && (
                  <span className="text-red-600 line-through text-sm">
                    ₹{shoe.originalPrice}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* 🎨 Button Section - Conditionally rendered */}
          {showPriceAndButton && (
            <div className="p-4 pt-0 text-center">
              <button
                onClick={() => onCustomizeClick(shoe.id)}
                className="w-full bg-black text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg"
              >
                Customize
              </button>
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* 🔗 View All Products */}
  <div className="max-w-7xl mx-auto text-center mt-14">
    <Link
      to="/products"
      className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-900 transition-transform hover:scale-105 shadow-lg"
    >
      <TrendingUp className="w-5 h-5" />
      View All Products
    </Link>
  </div>
</section>

      {/* Join the Movement / Testimonials Section */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 inline-block relative">
            Be a Part of Something Bigger
            {/* Underline */}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] block w-24 h-1 bg-black rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-12">
            We're building more than a brand; we're building a community. EIMIGO
            is open to collaborating with like-minded creators, influencers, and
            retailers. If you believe in our vision, let's talk.
          </p>

          {/* Testimonial */}
          <div className=" p-8 rounded-2xl shadow-xl max-w-3xl mx-auto mb-12 transition-all duration-700">
            <p className="text-lg italic mb-4">
              {testimonials[currentTestimonial].text}
            </p>
            <p className="text-sm font-semibold">
              {testimonials[currentTestimonial].author}
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <button className="bg-white text-black font-bold px-8 py-4 rounded hover:bg-gray-200 transition-colors">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-black transition-colors">
              Become an EIMIGO Ambassador
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto text-center mt-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest articles, style tips,
              and community updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-black bg-white focus:outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-green-600 text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;