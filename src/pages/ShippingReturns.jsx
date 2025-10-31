import React from "react";

const ShippingReturns = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Shipping & Returns
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We want you to love your Eimigo experience — from order to doorstep.
        </p>

        {/* Shipping Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>
              • <strong>Processing Time:</strong> Orders are processed within{" "}
              <span className="font-medium">1–2 business days</span> after payment confirmation.
            </li>
            <li>
              • <strong>Delivery Time:</strong> Standard shipping takes{" "}
              <span className="font-medium">3–7 business days</span> depending on your location.
            </li>
            <li>
              • <strong>Shipping Partners:</strong> We work with trusted logistics partners
              to ensure timely delivery across India.
            </li>
            <li>
              • <strong>Tracking:</strong> Once your order ships, you’ll receive an email with a tracking link.
            </li>
            <li>
              • <strong>Shipping Charges:</strong> Free shipping on orders above ₹1,999.
              For orders below, a flat rate of ₹99 applies.
            </li>
          </ul>
        </div>

        {/* Returns Policy */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Return & Exchange Policy</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>
              • You may return or exchange unworn items within{" "}
              <span className="font-medium">7 days</span> of delivery.
            </li>
            <li>
              • Products must be in their original condition with tags and packaging intact.
            </li>
            <li>
              • Returns are accepted only for products purchased through the official Eimigo website.
            </li>
            <li>
              • Refunds will be issued to your original payment method within{" "}
              <span className="font-medium">5–7 business days</span> after we receive your return.
            </li>
            <li>
              • Exchanges are processed once the returned item passes our quality check.
            </li>
          </ul>
        </div>

        {/* Return Steps */}
        <div className="">
          <h3 className="text-2xl font-semibold mb-3">How to Initiate a Return</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Contact us at <span className="font-medium">support@eimigo.com</span> with your order number.</li>
            <li>Our team will review and share the return instructions.</li>
            <li>Pack your item securely and ship it using the provided return label.</li>
            <li>Once received, we’ll process your refund or exchange promptly.</li>
          </ol>
        </div>

        {/* Last Section */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>
            For any concerns, reach out to us at{" "}
            <a href="mailto:support@eimigo.com" className="text-black font-medium underline">
              support@eimigo.com
            </a>
          </p>
          <p className="mt-2">We’re here to make your Eimigo experience smooth and satisfying.</p>
        </div>
      </div>
    </section>
  );
};

export default ShippingReturns;
