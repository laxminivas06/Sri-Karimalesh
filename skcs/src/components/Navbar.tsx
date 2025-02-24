import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [cartNotification, setCartNotification] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Function to update cart count & notification
  const updateCart = (action = "") => {
    const cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
    setCartCount(cart.length);
    setCartItems(cart);

    if (action === "add") {
      setCartNotification(`Added 1`);
    } else if (action === "remove") {
      setCartNotification(`Removed 1`);
    }

    setTimeout(() => setCartNotification(""), 2000);
  };

  useEffect(() => {
    updateCart();
    const handleStorageChange = () => updateCart();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="bg-white text-gray-800 fixed w-full z-50 shadow-md"> 
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dt3effj06/image/upload/v1740226250/z9uvdmnabd59omvybrnu.svg"
              alt="Sri Karimalesh Caterings Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/menu" className="hover:text-orange-500 transition">Menu</Link>
            <Link to="/mealbox" className="hover:text-orange-500 transition">Meal Box</Link>
            <Link to="/trip-packages" className="hover:text-orange-500 transition">Trip Packages</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="hover:text-orange-500 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 text-gray-800 py-2 rounded-md shadow-md">
            <div className="px-4 space-y-2">
              <button onClick={() => navigate("/menu")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Menu
              </button>
              <button onClick={() => navigate("/mealbox")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Meal Box
              </button>
              <button onClick={() => navigate("/trip-packages")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Trip Packages
              </button>
              <button onClick={() => navigate("/about")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                About Us
              </button>
              <button onClick={() => navigate("/contact")} className="block px-3 py-2 rounded-md hover:bg-gray-200 w-full text-left">
                Contact Us
              </button>
              <button onClick={() => navigate("/cart")} className="block px-3 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-200 w-full">
                <ShoppingCart size={20} /> <span>Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        )}

        {/* Cart Notification */}
        {cartNotification && (
          <div className="fixed top-16 right-4 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade">
            {cartNotification}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;