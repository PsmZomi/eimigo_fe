// src/pages/About.jsx
import React from "react";
import founderImg from "../images/founder.jpeg";
import team1 from "../images/team1.png";
import team2 from "../images/founderzeal.png";
import shoe from "../images/shoe5.jpeg";
import headerBg from "../assets/eimigologo1.png";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden font-poppins">
      {/* 🌄 Top Heading Section */}
      <section
        className="relative py-16 lg:py-12 px-4 sm:px-6 lg:px-16 text-center bg-black/40 text-white"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Learn about our journey, vision, and the passionate team behind EIMIGO
          </p>
        </div>
      </section>

      {/* 👣 Founder’s Message Section */}
      <section className="bg-white py-14 lg:py-10 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Founder’s Message
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left - Text */}
            <div className="lg:w-1/2 text-gray-800 space-y-5 text-justify">
              <p className="text-lg leading-relaxed">
                As founders, our vision is to build a brand that resonates
                with the bold and dynamic spirit of the North East — and takes
                that energy to the world.
              </p>
              <p className="text-lg leading-relaxed">
                Every stitch, every detail, and every design is a tribute to the
                passion and resilience that define our people and our land.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment is to you. We understand that a shoe is not just
                about comfort — it’s about confidence, identity, and pride.
              </p>
              <p className="text-lg leading-relaxed">
                We will not rest until EIMIGO becomes a symbol of excellence and
                innovation — born in the North East, built for the world-class.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={founderImg}
                alt="Founder"
                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover transition-transform duration-500 hover:scale-105"
                style={{ height: "auto", maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🌱 Our Journey / Vision */}
      <section className="bg-[#f3f9f1] py-14 lg:py-10 px-6 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Journey. Our Vision.
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-8">
          {/* Left: Image */}
          <div className="lg:w-1/2">
            <img
              src={shoe}
              alt="Our Journey"
              className="rounded-xl w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/2 text-gray-800 space-y-8 text-justify">
            <div>
              <strong className="text-lg text-gray-900">The Idea:</strong>
              <p className="text-md leading-relaxed mt-1">
                “EIMIGO was born out of a simple idea — to create footwear that
                captures the spirit of the North East and brings it to the
                global stage. A brand not just about fashion, but about
                identity and purpose.”
              </p>
            </div>

            <div>
              <strong className="text-lg text-gray-900">The Mission:</strong>
              <p className="text-md leading-relaxed mt-1">
                “Our mission is to become the leading footwear brand from the
                North East. By prioritizing quality and style, we will earn the
                trust of our people, expand across India, and ultimately reach
                global markets. World-class can start anywhere.”
              </p>
            </div>

            <div>
              <strong className="text-lg text-gray-900">The Promise:</strong>
              <p className="text-md leading-relaxed mt-1">
                “We promise authenticity and quality in every pair. From colors
                to comfort, each shoe is crafted for the bold, the movers, and
                the dreamers. Welcome to the EIMIGO family.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 👥 Our Team Section */}
      <section className="bg-gray-100 py-14 lg:py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🏷️ Header */}
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-10"></div>

          {/* 👥 Team Grid */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-80">
              <img
                src={team1}
                alt="Kapthianmuan Ngaihte - Founder & CEO"
                className="w-full h-56 object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Kapthianmuan Ngaihte
                </h3>
                <p className="text-red-500 font-semibold text-sm mb-2">
                  Founder & CEO
                </p>
                <p className="text-gray-600 text-sm leading-snug">
                  Visionary leader passionate about bringing North East culture
                  to the global stage.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-80">
              <img
                src={team2}
                alt="Highland - Head of Design"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  Sonmuan
                </h3>
                <p className="text-red-500 font-semibold text-sm mb-2">
                  Head of Design
                </p>
                <p className="text-gray-600 text-sm leading-snug">
                  Specializes in cultural themes and modern aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
