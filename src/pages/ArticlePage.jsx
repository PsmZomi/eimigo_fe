// src/pages/ArticlePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import article1Img from "../images/edit.jpg";
import article2Img from "../images/edit2.webp";
import article3Img from "../images/edit1.png";

// Short articles data
const fullArticles = {
  "sustainable-sneaker-design": {
    id: 1,
    category: "Behind the Brand",
    date: "May 15, 2023",
    title: "The Art of Sustainable Sneaker Design",
    author: "Rahul Sharma",
    authorRole: "Head of Design at EIMIGO",
    description: "Discover how we source eco-friendly materials and create sneakers that are both stylish and sustainable.",
    image: article1Img,
    readTime: "3 min read",
    content: `
      <p>At EIMIGO, we believe fashion should be sustainable. Our sneakers combine style with eco-friendly practices.</p>
      
      <h3>Eco-Friendly Materials</h3>
      <p>We use organic cotton, recycled rubber, and natural dyes from Northeast India. Each material is carefully selected for minimal environmental impact.</p>
      
      <h3>Local Craftsmanship</h3>
      <p>Our artisans in Assam bring traditional techniques to modern footwear design, creating unique pieces that tell a story.</p>
      
      <p>Join us in building a more sustainable fashion future.</p>
    `
  },
  "summer-style-guide": {
    id: 2,
    category: "Style Guides",
    date: "June 2, 2023",
    title: "5 Ways to Style Your EIMIGO Sneakers",
    author: "Ananya Patel",
    authorRole: "Fashion Director",
    description: "From casual outings to special events, learn how to make our sneakers the centerpiece of your wardrobe.",
    image: article2Img,
    readTime: "2 min read",
    content: `
      <p>Your EIMIGO sneakers are versatile enough for any occasion. Here are 5 easy styling tips:</p>
      
      <h3>1. Casual Day Out</h3>
      <p>Pair with linen trousers and a simple t-shirt for effortless style.</p>
      
      <h3>2. Smart Casual</h3>
      <p>Combine with dark denim and a blazer for dinner dates.</p>
      
      <h3>3. Summer Ready</h3>
      <p>Wear with shorts and a breathable button-down shirt.</p>
      
      <p>Mix and match to create your perfect look!</p>
    `
  },
  "artist-priya-spotlight": {
    id: 3,
    category: "Community Spotlight",
    date: "June 10, 2023",
    title: "Meet Priya: The Artist Blending Traditions",
    author: "EIMIGO Team",
    authorRole: "Community Manager",
    description: "Discover how this talented artist from Assam is making waves in the contemporary art scene.",
    image: article3Img,
    readTime: "2 min read",
    content: `
      <p>Priya Sharma combines traditional Assamese art with modern expressions, creating stunning contemporary pieces.</p>
      
      <h3>Cultural Heritage</h3>
      <p>Her work draws inspiration from traditional textiles and patterns of Northeast India.</p>
      
      <h3>Modern Twist</h3>
      <p>She brings these ancient techniques to contemporary art forms, making them relevant for today's audience.</p>
      
      <p>Priya's collaboration with EIMIGO brings these beautiful patterns to our limited edition sneaker collection.</p>
    `
  }
};

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = fullArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => navigate('/blogs')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Journal</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category and Metadata */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">{article.date}</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-500 text-sm">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
          {article.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {article.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{article.author}</p>
            <p className="text-gray-500 text-sm">{article.authorRole}</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Back to Blog Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/blogs')}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Back to All Articles
          </button>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;