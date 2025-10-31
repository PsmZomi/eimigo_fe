import React from "react";
import { FaRupeeSign, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = ({
  cart = [],
  totalPrice = 0,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  onCheckout,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleQuantityIncrease = (itemId, currentQuantity) => {
    onUpdateQuantity?.(itemId, currentQuantity + 1);
  };

  const handleQuantityDecrease = (itemId, currentQuantity) => {
    if (currentQuantity > 1) onUpdateQuantity?.(itemId, currentQuantity - 1);
  };

  const handleCheckout = () => {
    onCheckout ? onCheckout() : navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate('/products');
    onClose()
  };

  const handleClose = () => onClose?.();

  const calculateItemTotal = (price, quantity) => price * quantity;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Shopping Cart
          </h2>
          <div className="flex items-center gap-3">
            {cart.length > 0 && onClearCart && (
              <button
                onClick={onClearCart}
                className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium flex items-center gap-1"
              >
                <FaTrash className="text-xs" />
                Clear All
              </button>
            )}
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">🛒</div>
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              Your cart is empty
            </p>
            <button
              onClick={handleContinueShopping}
              className="bg-[#86bbd8] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-5">
              {cart.map((item) => (
                <div
                  key={item.cartId || item.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain bg-white rounded-lg border"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-1">
                      {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          handleQuantityDecrease(item.cartId || item.id, item.quantity)
                        }
                        disabled={item.quantity <= 1}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityIncrease(item.cartId || item.id, item.quantity)
                        }
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center justify-end gap-1 font-semibold">
                      <FaRupeeSign className="text-gray-600" />
                      {calculateItemTotal(item.price, item.quantity).toLocaleString()}
                    </div>
                    <button
                      onClick={() =>
                        onRemoveItem && onRemoveItem(item.cartId || item.id)
                      }
                      className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 mt-1"
                    >
                      <FaTrash className="text-xs" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary (no tax) */}
            <div className="border-t pt-3 mb-5 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Subtotal</span>
                <span className="flex items-center gap-1">
                  <FaRupeeSign />
                  {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold border-t pt-2 mt-2">
                <span>Total</span>
                <span className="flex items-center gap-1">
                  <FaRupeeSign />
                  {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={navigate('/products')}
                className="w-full sm:w-auto px-5 py-2.5 bg-gray-300 hover:bg-gray-400 rounded-lg font-medium text-sm transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleCheckout}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#86bbd8] hover:bg-green-700 text-white rounded-lg font-medium text-sm transition flex items-center justify-center gap-1"
              >
                Proceed to Checkout (<FaRupeeSign className="text-xs" />
                {totalPrice.toLocaleString()})
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span>🔒</span> Secure checkout • 256-bit SSL encryption
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
