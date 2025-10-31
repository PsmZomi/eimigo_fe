// Import shoe images from src/images
import shoe1Img from '../images/WB1.png';
import shoe2Img from '../images/C1.png';
import shoe3Img from '../images/w2.png';
import shoe4Img from '../images/shoe4.png';
// Shoe data
export const shoeData = {
  shoe1: {
    name: "TRIBAL WAY",
    price: 2000,
    originalPrice: 2500,
    image: shoe1Img,
    defaultFilter: "none",
    description: "Modern red athletic sports shoe with transparent background"
  },
  shoe2: {
    name: "EL-TUSK",
    price: 2000,
    originalPrice: 2500,
    image: shoe2Img,
    defaultFilter: "none",
    description: "Blue casual sneaker perfect for everyday wear"
  },
  shoe3: {
    name: "Cloud-Hill White",
    price: 2499,
    originalPrice: 3999,
    image: shoe3Img,
    defaultFilter: "none",
    description: "Stylish purple high-top sneaker with modern design"
  },
  shoe4: {
    name: "CHIEF-7",
    price: 2000,
    originalPrice: 2999,
    image: shoe4Img,
    defaultFilter: "none",
  }
};

// Color filters
export const colorFilters = {
  original: {
    name: "Original",
    filter: "none",
    background: "linear-gradient(45deg, #f8f9fa, #e9ecef)",
    border: "1px solid #ddd"
  },
  red: {
    name: "Red",
    filter: "sepia(80%) saturate(180%) hue-rotate(320deg) brightness(0.85) contrast(1.1)",
    background: "#e74c3c"
  },
  blue: {
    name: "Blue",
    filter: "sepia(80%) saturate(180%) hue-rotate(200deg) brightness(0.95) contrast(1.05)",
    background: "#3498db"
  },
  green: {
    name: "Green",
    filter: "sepia(80%) saturate(180%) hue-rotate(80deg) brightness(0.95) contrast(1.05)",
    background: "#2ecc71"
  },
  purple: {
    name: "Purple",
    filter: "sepia(80%) saturate(180%) hue-rotate(280deg) brightness(0.85) contrast(1.1)",
    background: "#9b59b6"
  },
  orange: {
    name: "Orange",
    filter: "sepia(80%) saturate(180%) hue-rotate(30deg) brightness(0.95) contrast(1.05)",
    background: "#f39c12"
  },
  yellow: {
    name: "Yellow",
    filter: "sepia(80%) saturate(180%) hue-rotate(50deg) brightness(1.15) contrast(1.05)",
    background: "#f1c40f"
  },
  black: {
    name: "Black",
    filter: "grayscale(100%) brightness(0.4) contrast(1.2)",
    background: "#2c3e50"
  },
  bright: {
    name: "Bright",
    filter: "brightness(1.2) contrast(1.1)",
    background: "radial-gradient(circle, #fff, #f8f9fa)",
    border: "1px solid #ddd"
  },
  dark: {
    name: "Dark",
    filter: "brightness(0.7) contrast(1.2)",
    background: "radial-gradient(circle, #495057, #212529)"
  },
  vibrant: {
    name: "Vibrant",
    filter: "saturate(150%) contrast(1.1)",
    background: "conic-gradient(from 45deg, #e74c3c, #f1c40f, #2ecc71, #3498db, #9b59b6, #e74c3c)"
  },
  vintage: {
    name: "Vintage",
    filter: "sepia(30%) contrast(1.1) brightness(1.1)",
    background: "linear-gradient(45deg, #d4a574, #c19a6b)"
  },
  mono: {
    name: "Mono",
    filter: "grayscale(100%) contrast(1.2)",
    background: "linear-gradient(45deg, #fff, #000)"
  },
  neon: {
    name: "Neon",
    filter: "hue-rotate(180deg) saturate(120%)",
    background: "linear-gradient(45deg, #ff006e, #00f5ff)"
  }
};

// Shoe sizes
export const shoeSizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];
