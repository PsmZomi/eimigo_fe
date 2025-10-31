import React from "react";
import Hero from "./Hero";
import ShoeGrid from "./ShoeGrid";
import { shoeData } from "../data/shoeData";

const Home = ({ onCustomizeClick }) => {

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Our Vibe Section */}
      <section className="bg-white text-black py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Crafted for the Trendsetters</h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            EIMIGO is for those who want to reset the mindset and thinking system to stand out in the competition, not just fit in.
            We blend authentic design with next-level comfort to create shoes that are as unique as you are. Each pair tells a story,
            a blend of our roots and your personal journey.
          </p>
          <button className="bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
            Discover Our Story
          </button>
        </div>
      </section>

      {/* Featured Products / ShoeGrid */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">The New Drop</h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Explore our latest styles curated for the bold and authentic.
          </p>
        </div>
        <ShoeGrid shoes={shoeData} onCustomizeClick={onCustomizeClick} />
      </section>

      {/* Join the Movement */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Be a Part of Something Bigger</h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mt-4">
            We're building more than a brand; we're building a community. EIMIGO is open to collaborating with like-minded creators,
            influencers, and retailers. If you believe in our vision, let's talk.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors">
            Partner With Us
          </button>
          <button className="bg-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-colors">
            Become an EIMIGO Ambassador
          </button>
        </div>

        {/* Feedback Carousel */}
        <div className="mt-16 overflow-x-auto flex gap-6 py-4 px-2 sm:px-6">
          {["Incredible shoes!", "Best comfort ever", "Style meets authenticity", "Love the designs"].map((text, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white text-black rounded-2xl p-6 shadow-lg flex-shrink-0"
            >
              {text}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
