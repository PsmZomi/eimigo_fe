// src/data/productData.js
import shoe1 from "../images/product.jpeg";
import shoe2 from "../images/shoe2.png";
import shoe3 from "../images/shoe3.png";
import shoe4 from "../images/shoe4.png";
import shoe5 from "../images/shoe5.jpeg";
import shoe42 from "../images/shoe42.jpeg";
import shoe43 from "../images/shoe43.jpeg";
import shoe6 from "../images/shoe6.jpeg";
import shoe61 from "../images/shoe61.jpeg";
import shoe62 from "../images/shoe62.jpeg";
import shoe21 from "../images/shoe21.jpeg";
import shoe22 from "../images/shoe22.jpeg";
import shoe24 from "../images/shoe24.jpeg";
import shoe7 from "../images/shoe7.jpeg";
import shoe71 from "../images/shoe71.jpeg";
import shoe11 from "../images/shoe1.png";
import shoe20 from "../images/shoe23.jpg";
import highlander from "../images/highlander.png";
import highlander2 from "../images/highlander2.png";
import highlander3 from "../images/highlander3.png";
import highlander4 from "../images/highlander4.png";
import hornbill1 from "../images/hornbill1.jpg";
import ne14 from "../images/ne14.png";
import ne17 from "../images/ne17.png";
import ne18 from "../images/ne18.png";
import ne19 from "../images/ne19.png";
import eimigo1 from "../images/eimigo1.png";
import ne20 from "../images/ne20.png";
import highback from "../images/highback.png";
import ne16 from "../images/ne16.png";
import neright from "../images/neright.png"
export const products = [
  {
    id: 1,
    name: "THE EIMIGO",
    category: "Fashion / Casual Wears",
    price: 2000,
    originalPrice: 2500,
    discount: 20,
    images: [shoe20, shoe2, eimigo1,shoe21],
    description:
      "Experience ultimate comfort with our Highlander sneakers. Perfect for casual wear and light activities.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Black", "White", "Navy Blue", "Gray"],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    brand: "Eimigo",
    material: "Mesh & Synthetic Leather",
    warranty: "6 months manufacturing warranty",
    careInstructions: "Wipe with a dry cloth. Do not machine wash.",
    shipping: "Free shipping on orders above ₹1999. Delivery in 3–5 business days.",
    sku: "NE17-SnB-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit:
          "Offers a durable, structured feel with excellent water resistance, ensuring long-lasting performance and a premium finish.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit:
          "Provides superior shock absorption and comfort that lasts all day. Semi-ortho sponge material ideal for long-duration wear.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Features a newly launched, best-quality TPR for exceptional durability, flexibility, and high-traction grip on varied surfaces.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Non-restrictive, low-cut fit for enhanced ankle mobility.",
      },
    ],
  },
  {
    id: 2,
    name: "CHIEF-7",
    category: "Sports Shoes",
    price: 2000,
    originalPrice: 2500,
    discount: 20,
    images: [shoe4, shoe42, shoe43],
    description:
      "Step into all-day comfort with Chief-7. Designed for effortless style and lightweight performance wherever you go",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.7,
    reviews: 2,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry. Avoid direct sunlight.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnW-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit:
          "Durable and water-resistant for long-lasting performance and a premium finish.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit:
          "Superior shock absorption and comfort for extended wear.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Durable, flexible, and provides strong traction and rebound support.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Enhanced ankle mobility with a running-shoe feel.",
      },
    ],
  },
  {
    id: 3,
    name: "THE RHINO",
    category: "Sport Wear",
    price: 2000,
    originalPrice: 2500,
    discount: 20,
    images: [shoe3, shoe24, shoe5, shoe1],
    description:
      "Built to endure. Rhino combines rugged durability with everyday comfort — perfect for those who move with purpose and style.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.8,
    reviews: 67,
    inStock: true,
    brand: "Eimigo",
    material: "Synthetic Leather & TPU",
    warranty: "8 months manufacturing warranty",
    careInstructions: "Brush off mud after use. Store in a dry place.",
    shipping: "Free shipping. Express delivery available.",
    sku: "NE17-SnW-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit:
          "Durable, structured, and water-resistant with a premium finish.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "Shock-absorbing and comfortable for long matches.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Durable and high-traction for varied surfaces.",
      },
      {
        component: "Fit",
        material: "Higher Ankle Design",
        benefit: "Secure, high-ankle fit for support and modern look.",
      },
    ],
  },
  {
    id: 4,
    name: "NE-17 (White)",
    category: "Fashion / Casual Wears",
    price: 3000,
    originalPrice: 3500,
    discount: 26,
    images: [ne20, shoe6, shoe62, shoe61, ne17,],
    description:
      "Built for those who move with style — combining everyday comfort and athletic performance.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.9,
    reviews: 3,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnW-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit: "Durable and water-resistant with premium feel.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "Shock absorption and long-lasting comfort.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Durable, flexible, and provides superior grip and rebound.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Low-cut fit for enhanced ankle mobility.",
      },
    ],
  },
  {
    id: 8,
    name: "NE-17 (Black)",
    category: "Fashion / Casual Wears",
    price: 3000,
    originalPrice: 3500,
    discount: 26,
    images: [neright, ne14, ne16, ne18, ne19],
    description:
      "Where comfort meets confidence — made for those who live in style.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.9,
    reviews: 3,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnW-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit: "Durable and water-resistant with premium feel.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "Shock absorption and long-lasting comfort.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Durable, flexible, and provides superior grip and rebound.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Low-cut fit for enhanced ankle mobility.",
      },
    ],
  },
  {
    id: 5,
    name: "Hornbill",
    category: "Fashion / Casual Wears",
    price: 2200,
    originalPrice: 2500,
    discount: 26,
    images: [ hornbill1,shoe71, shoe42, shoe7],
    description:
      "Inspired by the grace and strength of the Hornbill, this pair blends lightweight comfort with bold design — made for those who stand tall and move freely.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.9,
    reviews: 3,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnO-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit: "Durable and structured with water resistance.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "All-day comfort and shock absorption.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit: "Durable, flexible, and high-traction grip.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Low-cut fit for better movement.",
      },
    ],
  },
  {
    id: 6,
    name: "THE GUARDIAN",
    category: "Fashion / Casual Wears",
    price: 2200,
    originalPrice: 2500,
    discount: 20,
    images: [shoe11, shoe21, shoe22],
    description:
    "Designed for the streets and beyond, The Guardian merges urban style with lasting resilience — your go-to for confident moves every day.",
    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.9,
    reviews: 3,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnB-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit: "Durable, structured, and water-resistant.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "Superior comfort and shock absorption.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit:
          "Durable, flexible, and provides high-traction grip.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Low-cut fit for free ankle movement.",
      },
    ],
  },
  {
    id: 7,
    name: "THE HIGHLANDER",
    category: "Fashion / Casual Wears",
    price: 3000,
    originalPrice: 3500,
    discount: 20,
    images: [highlander, highlander4, highlander2, highlander3, highback],
    description:
    "Drawing from the spirit of resilience, Highlander reflects strength in every step — crafted for those who never stop exploring.",    sizes: [5, 6, 7, 8, 9, 10],
    colors: ["Midnight Black", "White"],
    rating: 4.9,
    reviews: 3,
    inStock: true,
    brand: "Eimigo",
    material: "Knit Fabric & Rubber",
    warranty: "1 year manufacturing warranty",
    careInstructions: "Clean with mild soap and air dry.",
    shipping: "Free shipping on all orders. Delivery in 2–4 business days.",
    sku: "NE17-SnB-01",
    styleCategory: "Fashion / Casual Wears",
    priceRange: "₹2000 – ₹2500",
    technicalSpecs: [
      {
        component: "Upper",
        material: "PU Leather",
        benefit: "Durable, water-resistant, premium finish.",
      },
      {
        component: "Insole",
        material: "Foam and Fiber Cushioning",
        benefit: "Superior shock absorption and lasting comfort.",
      },
      {
        component: "Outsole",
        material: "Premium TPR Compound",
        benefit: "Durable, flexible, and high-traction performance.",
      },
      {
        component: "Fit",
        material: "Shortened Ankle & Padded Tongue",
        benefit: "Low-cut fit with enhanced mobility.",
      },
    ],
  },
];
