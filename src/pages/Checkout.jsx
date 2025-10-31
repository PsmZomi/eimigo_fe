import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // ✅ For now, simulate order placement
    setTimeout(() => {
      alert("Order placed successfully!");
      navigate("/orders");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Checkout
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Info */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Shipping Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="phone"
                value={shippingInfo.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Payment Method
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Credit / Debit Card
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              Order Summary
            </h3>
            <div className="flex justify-between text-gray-600 mb-1">
              <span>Items Total</span>
              <span>₹2,499</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-1">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 text-lg mt-2">
              <span>Total</span>
              <span>₹2,499</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-3 rounded-lg text-white font-medium transition ${
              isProcessing ? "bg-gray-400" : "bg-black hover:bg-gray-800"
            }`}
          >
            {isProcessing ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
