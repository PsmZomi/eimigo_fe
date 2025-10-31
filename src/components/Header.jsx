import { onAuthStateChanged } from "firebase/auth";
import { ShoppingCart } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import logoImage from "../images/logo1.png";

const Header = () => {
	const [logoError, setLogoError] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [user, setUser] = useState(null);

	const fallbackLogo = "https://via.placeholder.com/150x50?text=EIMIGO";
	const navigate = useNavigate();
	const location = useLocation();

	const navLinks = useMemo(
		() => [
			{ name: "Home", path: "/" },
			{ name: "About Us", path: "/about" },
			{ name: "Products", path: "/products" },
			{ name: "Blogs", path: "/blogs" },
		],
		[],
	);

	const handleLogoError = useCallback(() => setLogoError(true), []);
	const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
	const goHome = useCallback(() => {
		navigate("/");
		window.scrollTo({ top: 0, behavior: "smooth" });
		setIsMenuOpen(false);
	}, [navigate]);

	// const handleCartClick = useCallback(() => {
	//   navigate("/cart");
	//   onCartClick();
	//   setIsMenuOpen(false);
	// }, [navigate, onCartClick]);

	const handleNavigation = useCallback(
		(path) => {
			navigate(path);
			window.scrollTo({ top: 0, behavior: "smooth" });
			setIsMenuOpen(false);
		},
		[navigate],
	);

	const isLinkActive = useCallback(
		(path) => {
			if (path === "/") return location.pathname === "/";
			return location.pathname.startsWith(path);
		},
		[location.pathname],
	);

	// ✅ Firebase auth listener
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
			{/* ================= MOBILE HEADER ================= */}
			<div className="md:hidden">
				<div className="flex items-center justify-between p-2">
					{/* Left: Hamburger */}
					<button
						onClick={toggleMenu}
						className="p-2 rounded-lg text-black hover:bg-gray-100 transition"
					>
						<div className="w-6 h-6 flex flex-col justify-center gap-1">
							<span
								className={`block h-0.5 bg-black transition-all ${
									isMenuOpen ? "rotate-45 translate-y-1.5" : ""
								}`}
							></span>
							<span
								className={`block h-0.5 bg-black transition-all ${
									isMenuOpen ? "opacity-0" : ""
								}`}
							></span>
							<span
								className={`block h-0.5 bg-black transition-all ${
									isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
								}`}
							></span>
						</div>
					</button>

					{/* Middle: Logo */}
					<button
						onClick={goHome}
						className="flex items-center focus:outline-none"
					>
						<img
							src={logoError ? fallbackLogo : logoImage}
							alt="EIMIGO Logo"
							className="h-10 w-auto object-contain"
							onError={handleLogoError}
						/>
						<span className="text-lg font-bold ">IMIGO</span>
					</button>

					{/* Right: Auth / Cart / Profile */}
					{/* <div className="flex items-center gap-3">
            {!user ? (
              <Link
                to="/login"
                className="bg-black text-white text-sm font-normal rounded-lg px-3 py-1.5 hover:bg-gray-800 transition"
              >
                Login
              </Link>
            ) : (
              <>
                
                <button
                  onClick={handleCartClick}
                  className="relative p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <BsCart4 className="text-xl text-gray-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center border border-gray-200">
                      {cartCount > 9 ? "9+" : cartCount}
                    </span>
                  )}
                </button>

           
                <button
                  onClick={() => navigate("/profile")}
                  className="flex flex-col items-center"
                >
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />
                  <span className="text-xs text-gray-700 mt-1 text-center truncate w-12">
                    {user.displayName || "User"}
                  </span>
                </button>
              </>
            )}
          </div> */}
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="bg-[#0D0A0B] border-t border-gray-700 sticky top-14 z-40 animate-in slide-in-from-top duration-300">
						<div className="flex flex-row justify-start items-center gap-2 p-3 overflow-x-auto">
							{navLinks.map((link) => {
								const active = isLinkActive(link.path);
								return (
									<button
										key={link.name}
										onClick={() => handleNavigation(link.path)}
										className={`px-4 py-2 rounded text-sm whitespace-nowrap shrink-0 ${
											active
												? "text-green-400 bg-gray-800"
												: "text-white hover:text-gray-300 hover:bg-gray-900"
										}`}
									>
										{link.name}
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>

			{/* ================= DESKTOP HEADER ================= */}
			<div className="hidden md:flex max-w-7xl-lg mx-auto items-center py-2 px-6 lg:px-10">
				{/* Logo */}
				<button onClick={goHome} className="flex items-center">
					<img
						src={logoError ? fallbackLogo : logoImage}
						alt="EIMIGO Logo"
						className="h-12 w-auto object-contain"
						onError={handleLogoError}
					/>
					<span className="text-2xl font-bold tracking-wide -ml-1">IMIGO</span>
				</button>

				<div className="flex-1"></div>

				<nav className="flex items-center gap-4 text-[16px] font-normal">
					{navLinks.map((link) => {
						const active = isLinkActive(link.path);
						return (
							<button
								key={link.name}
								onClick={() => handleNavigation(link.path)}
								className={`px-3 py-2 rounded-md ${
									active
										? "text-green-600 font-normal"
										: "text-black hover:text-green-600"
								}`}
							>
								{link.name}
							</button>
						);
					})}

					{/* Show only when logged in */}
					{
						user ? (
							<>
								{/* Cart */}
								{/* <button
                onClick={handleCartClick}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <ShoppingCart size={20} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button> */}

		
								{/* <button
                onClick={() => navigate("/profile")}
                className="flex flex-col items-center"
              >
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <span className="text-xs text-gray-700 mt-1 text-center">
                  {user.displayName || "User"}
                </span>
              </button> */}
							</>
						) : null
						// <Link
						// 	to="/login"
						// 	className="bg-black text-white font-normal rounded-sm px-6 py-1.5 hover:bg-gray-800 transition"
						// >
						// 	Login
						// </Link>
					}
				</nav>
			</div>
		</header>
	);
};

export default Header;
