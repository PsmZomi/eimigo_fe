import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomizationModal from "./components/CustomizationModal";
import Cart from "./components/Cart";
import { shoeData } from "./data/shoeData";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import NewDrop from "./components/NewDrop";
import ArticlePage from "./pages/ArticlePage";
import MyOrders from "./pages/MyOrders";
import MyWishlist from "./pages/MyWishlist";
import SizeGuide from "./pages/SizeGuide";
import ShippingReturns from "./pages/ShippingReturns";
import HelpCenter from "./pages/HelpCenter";

// ✅ ScrollToTop inside App
function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);

  return null;
}

function App() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [user, setUser] = useState(null);

  // User authentication
  const handleLogin = (userData) => {
    setUser(userData);
    setToastMessage(`Welcome back, ${userData.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    setToastMessage("Logged out successfully");
  };

  const handleSignup = (userData) => {
    setUser(userData);
    setToastMessage(`Account created successfully! Welcome, ${userData.name}`);
  };

  // Cart functions
  const openCustomizer = (shoeType) => {
    setCurrentShoe(shoeType);
    setIsCustomizerOpen(true);
  };

  const closeCustomizer = () => {
    setIsCustomizerOpen(false);
    setCurrentShoe(null);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.selectedSize === item.selectedSize &&
        cartItem.selectedColor === item.selectedColor
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
      setToastMessage(`${item.name} quantity updated in cart!`);
    } else {
      setCart([...cart, { ...item, cartId: Date.now() }]);
      setToastMessage(`${item.name} added to cart!`);
    }

    closeCustomizer();
    setTimeout(() => setToastMessage(""), 3000);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.cartId !== id));
    setToastMessage("Item removed from cart!");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.cartId === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setToastMessage("Cart cleared!");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    setTimeout(() => {
      setIsCartOpen(true);
    }, 500);
  };

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App relative min-h-screen flex flex-col">
      <Header
        user={user}
        onLogout={handleLogout}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="grow">
        {/* ✅ Scroll to top when route changes */}
        <ScrollToTop />

        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={<Homepage onCustomizeClick={openCustomizer} />}
          />
          <Route path="/newdrop" element={<NewDrop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/wishlist" element={<MyWishlist />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/help-center" element={<HelpCenter />} />

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetails addToCart={addToCart} onBuyNow={handleBuyNow} />
            }
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={
              user ? (
                <Cart
                  cart={cart}
                  totalPrice={cartTotal}
                  onRemoveItem={removeFromCart}
                  onUpdateQuantity={updateCartItemQuantity}
                  onClearCart={clearCart}
                  onCheckout={() => navigate("/checkout")}
                />
              ) : (
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">
                      Live Purchase Coming Soon
                    </h2>
                  </div>
                </div>
              )
            }
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Still in Maintenance. Sorry for the inconvenience.
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                  >
                    Go Home
                  </button>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Customization Modal */}
      {isCustomizerOpen && currentShoe !== null && (
        <CustomizationModal
          shoe={shoeData[currentShoe]}
          shoeType={currentShoe}
          onClose={closeCustomizer}
          onAddToCart={addToCart}
        />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <Cart
          cart={cart}
          totalPrice={cartTotal}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateCartItemQuantity}
          onClearCart={clearCart}
          onCheckout={() => {
            setIsCartOpen(false);
            navigate("/checkout");
          }}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn flex items-center gap-2">
          <span className="text-lg">✓</span>
          {toastMessage}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
