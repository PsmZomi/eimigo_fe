import React from "react";

const SizeGuide = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Size Guide
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Find your perfect Eimigo fit. Use the chart below to match your foot
          length with the correct size.
        </p>

        {/* Size Chart */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3">EU Size</th>
                <th className="border border-gray-300 p-3">UK Size</th>
                <th className="border border-gray-300 p-3">US Size</th>
                <th className="border border-gray-300 p-3">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { eu: 39, uk: 6, us: 7, cm: "24.5–25" },
                { eu: 40, uk: 6.5, us: 7.5, cm: "25–25.5" },
                { eu: 41, uk: 7, us: 8, cm: "25.5–26" },
                { eu: 42, uk: 8, us: 9, cm: "26–26.5" },
                { eu: 43, uk: 9, us: 10, cm: "27–27.5" },
                { eu: 44, uk: 10, us: 11, cm: "28–28.5" },
                { eu: 45, uk: 11, us: 12, cm: "29–29.5" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{row.eu}</td>
                  <td className="border border-gray-300 p-3">{row.uk}</td>
                  <td className="border border-gray-300 p-3">{row.us}</td>
                  <td className="border border-gray-300 p-3">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Instructions */}
        <div className="mt-16 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">How to Measure Your Foot</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li>Place your foot on a sheet of paper against a wall.</li>
            <li>Mark the tip of your longest toe and the back of your heel.</li>
            <li>Measure the distance between the two points in centimeters.</li>
            <li>Use the chart above to find your closest Eimigo size.</li>
          </ol>
        </div>

        {/* Tip Section */}
        <div className="mt-12 bg-gray-100 p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-center">Eimigo Fit Tip</h3>
          <p className="text-gray-600">
            Our shoes are designed for a true-to-size fit. If you’re between
            sizes or prefer a relaxed feel, we recommend going one size up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
