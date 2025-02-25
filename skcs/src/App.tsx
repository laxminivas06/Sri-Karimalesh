import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryPage from "./components/ CategoryPage";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import MealBox from "./components/MealBox";
import TripPackages from "./components/TripPackages";
import MenuSection from "./components/MenuSection";
import CartPage from "./components/CartPage";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import About from "./components/About"; // ✅ Import the About component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-amber-50">
        {/* 📌 Navbar */}
        <Navbar />

        {/* 🏠 Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Testimonials />
                  <WhatsAppButton floating />
                </>
              }
            />

            {/* 📌 Category Page (Dynamic) */}
            <Route path="/category/:categoryName" element={<CategoryPage />} />

            {/* 📦 Meal Box Page */}
            <Route path="/mealbox" element={<><MealBox /><Contact /></>} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* ✈️ Trip Packages Page */}
            <Route path="/trip-packages" element={<><TripPackages /><Contact /></>} />

            {/* 🍽️ Menu Page */}
            <Route path="/menu" element={<><MenuSection /><Contact /></>} />

            {/* 🛒 Cart Page */}
            <Route path="/cart" element={<><CartPage /><Contact /></>} />

            {/* 📞 Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* ℹ️ About Page */}
            <Route path="/about" element={<><About /><Contact /></>} />
          </Routes>
        </main>

        {/* 📌 Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;