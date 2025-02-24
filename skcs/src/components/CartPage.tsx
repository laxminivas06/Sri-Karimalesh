import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ name: string; price: number; img: string; quantity: number; pack: string }[]>([]);

  // Load cart from localStorage and validate
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
    const validatedCart = savedCart.map((item: any) => ({
      ...item,
      price: parseFloat(item.price) || 0, // Ensure price is a valid number
      quantity: item.quantity || 1, // Default quantity to 1 if missing
      pack: item.pack || "Single Pack", // Default pack type to "Single Pack" if missing
    }));
    setCart(validatedCart);
  }, []);

  // Update LocalStorage when Cart Changes
  const updateCartStorage = (updatedCart: typeof cart) => {
    setCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  // Increase Item Quantity
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCartStorage(updatedCart);
  };

  // Decrease Item Quantity
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCartStorage(updatedCart);
    }
  };

  // Remove Item from Cart
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCartStorage(updatedCart);
  };

  // Calculate Total Price
  const totalPrice = cart
    .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
    .toFixed(2);

  // Handle Checkout via WhatsApp
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const phoneNumber = "61450056387";
    const message = cart
      .map((item, index) => `${index + 1}. ${item.name} (${item.pack}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");

    const whatsappMessage = encodeURIComponent(
      `Hello, I'd like to order:\n\n${message}\n\nTotal: $${totalPrice}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">Shopping Cart</h2>

      {cart.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                    <p className="text-gray-700">${item.price.toFixed(2)} ({item.pack})</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Live Total Price Update */}
          <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Total: ${totalPrice}</h3>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-6">
          <p className="text-lg font-semibold">Your cart is empty.</p>
          <p className="text-sm">Start adding items to your cart.</p>
        </div>
      )}

      {/* Cart Summary & Checkout */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          ← Continue Shopping
        </button>
        {cart.length > 0 && (
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;