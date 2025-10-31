import React, { useEffect, useState, useRef, useMemo } from "react";
import ambassadorImage from "../images/muanlal.png";
import ambassadorImage2 from "../images/image.png";
import eimigoLogo from "../assets/eimigologo1.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  const taglines = useMemo(
    () => ["Fly With Pride", "Run & Walk Your Roots", "Transform Attitude"],
    []
  );

  const ambassadorImages = useMemo(
    () => [ambassadorImage, ambassadorImage2],
    []
  );

  const ambassadorAchievements = useMemo(
    () => [
      "The Only Eimi certified as Muaythai Coach",
      "Muay Thai Pro Fighter",
      "Undisputed MMA Flyweight Champion",
      "3X MMA Title Holder | 7-0 Pro MMA",
      "Silver Medallist (Boxing - India)",
      "10× National Gold Medallist in MMA",
    ],
    []
  );

  const scrollingText = useMemo(() => `${taglines.join(" • ")} • `, [taglines]);

  // Auto image slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % ambassadorImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [ambassadorImages.length]);

  // Fade-in on scroll
  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden flex flex-col items-center pt-4"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 w-full">
        {/* ✅ Scrolling tagline */}
        <div className="relative mt-2 mb-4 sm:mb-6 lg:mb-8 overflow-hidden min-h-[28px] sm:min-h-[30px] uppercase">
          <div className="flex whitespace-nowrap">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="animate-marquee flex items-center text-gray-800 text-sm sm:text-lg md:text-md font-semibold tracking-wide"
              >
                {scrollingText.split("").map((char, index) => (
                  <span
                    key={`${n}-${index}`}
                    className={`inline-block mx-[1px] sm:mx-1 ${
                      char === "•"
                        ? "text-green-600 font-bold dot-char"
                        : "tagline-char"
                    }`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Main Hero layout */}
        <div
          className={`flex flex-col lg:flex-row items-stretch justify-between gap-4 sm:gap-6 lg:gap-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/4 text-center lg:text-left flex flex-col justify-center items-center lg:items-center relative z-10 mb-4 sm:mb-6 lg:mb-0">
            <img
              src={eimigoLogo}
              alt="EIMIGO Logo Watermark"
              className="absolute inset-0 w-full h-full object-contain opacity-20 sm:opacity-30 z-0 pointer-events-none"
            />

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-sm relative z-10 text-justify px-2 sm:px-0">
              EIMIGO is a new wave of brand crafted for the industrial evolution
              of the North East
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div className="w-full lg:w-2/4 flex flex-col items-center justify-center relative my-2 sm:my-4 lg:my-0">
            <div className="relative w-full max-w-xs sm:max-w-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              {ambassadorImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Ambassador ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                    currentImage === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/4 flex flex-col justify-center items-start text-left lg:pl-2 mt-4 sm:mt-6 lg:mt-12">
            {/* Achievements */}
            <div className="space-y-1 sm:space-y-1.5 w-full max-w-xs lg:max-w-sm mx-auto lg:mx-0">
              {ambassadorAchievements.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-1 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-extrabold text-black mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-snug whitespace-nowrap">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* ✅ Name + Title */}
            <div className="mt-6 sm:mt-8 border-t border-gray-300 pt-1 sm:pt-1 w-full max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                Thiaumuanlal Guite
              </h4>
              <h3 className="text-xs sm:text-sm lg:text-md font-semibold text-gray-600">
                Brand Ambassador
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* --- Animations --- */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-flex;
        }
        .tagline-char {
          transition: all 0.3s ease;
        }
        .tagline-char:hover {
          color: #16a34a;
          transform: scale(1.1);
        }
        .dot-char {
          animation: dotPulse 2s infinite;
        }
        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;