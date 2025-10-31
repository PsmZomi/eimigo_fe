// src/pages/Blogs.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogHeaderImage from "../assets/eimigologo1.png";

const categories = [
  "All Articles",
  "Behind the Brand",
  "Style Guides",
  "North East Culture",
  "Community Spotlight",
  "Business Insights"
];

const BlogPage = () => {
  const _navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    description: "",
    author: "",
    content: "",
    email: "",
    image: null
  });

  // 📩 Form Handlers
  const handleSubmitPost = (e) => {
    e.preventDefault();
    alert("Thank you for your submission! Our team will review it before publishing.");
    setNewPost({
      title: "",
      category: "",
      description: "",
      author: "",
      content: "",
      email: "",
      image: null
    });
    setShowSubmissionForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewPost((prev) => ({
        ...prev,
        image: files[0]
      }));
    } else {
      setNewPost((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[40vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-16 bg-no-repeat"
        style={{
          backgroundImage: `url(${blogHeaderImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            The EIMIGO Journal
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Where Culture Meets Creation
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Share Your Story
          </button>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent z-10" />
          <div
            className="flex overflow-x-auto space-x-3 py-4 scrollbar-hide scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 📜 Placeholder Section */}
      <section className="max-w-5xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          We are still creating our stories.
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Stay tuned as we craft inspiring journeys, creative insights, and cultural stories 
          from the heart of the North East. Each piece will celebrate art, identity, and progress — 
          the EIMIGO way.
        </p>
        <div className="mt-10">
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Be Part of Our Story
          </button>
        </div>
      </section>

      {/* 📝 Submission Modal (Active) */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Share Your Story</h2>
                <button
                  onClick={() => setShowSubmissionForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmitPost} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={newPost.author}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newPost.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter article title"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={newPost.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">All</option>
                    <option value="Behind the Brand">Behind the Brand</option>
                    <option value="Style Guides">Style Guides</option>
                    <option value="North East Culture">North East Culture</option>
                    <option value="Community Spotlight">Community Spotlight</option>
                    <option value="Business Insights">Business Insights</option>
                  </select>
                </div>

                {/* Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Article Image *
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    accept="image/*"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description *
                  </label>
                  <textarea
                    name="description"
                    value={newPost.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Brief description of your article"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Article Content *
                  </label>
                  <textarea
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Write your full article here..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    Submit Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
