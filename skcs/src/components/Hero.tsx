import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const quotes = [
  {
    telugu: "అన్నమే పరబ్రహ్మ స్వరూపం",
    english: "Food is the embodiment of the divine",
  },
  {
    telugu: "అన్నదానం మహాదానం",
    english: "Offering food is the greatest charity",
  },
  {
    telugu: "ఆత్మీయతతో వడ్డించే విందు",
    english: "A feast served with love",
  },
];

const backgroundImages = [
  "https://www.shutterstock.com/image-photo/andhra-special-vegetarian-tasty-meals-600nw-1811725393.jpg",
  "https://b.zmtcdn.com/data/pictures/1/20149871/c51138261fc0d0627f03a5cd27e3ac25.jpg?fit=around%7C960:500&crop=960:500;*,*",
  "https://cdn0.weddingwire.in/article/4333/3_2/960/jpg/123334-maharaja-bhog-2.jpeg",
  "https://savithrammas.com/site/image/cache/catalog/A-Guide-to-Savithrammas-Exotic-Pickles-and-Spices-1080x540.jpg",
  "https://www.shutterstock.com/image-photo/andhra-pradesh-traditional-thali-india-600nw-2172140155.jpg",
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    const backgroundTimer = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // Change background every 7 seconds

    return () => {
      clearInterval(quoteTimer);
      clearInterval(backgroundTimer);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dt3effj06/image/upload/v1740291043/ja5nmb3loua6hulbcbgu.svg"
          alt="Sri Karimalesh Caterings Logo"
          className="w-200 h-auto mx-auto mb-6" // Adjust size as needed
        />

       

        {/* Quotes */}
        <div className="space-y-3">
          <p className="text-2xl md:text-3xl font-semibold text-orange-300">
            {quotes[currentQuote].telugu}
          </p>
          <p className="text-lg md:text-2xl italic">{quotes[currentQuote].english}</p>
        </div>

        {/* Explore Menu Link */}
        <div className="mt-10">
          <Link
            to="/menu"
            className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg"
          >
            Explore Our Menu 🍽️
          </Link>
        </div>
      </div>

      {/* Advertisement Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-orange-900 bg-opacity-90 text-white py-3">
        <div className="container mx-auto text-center">
          <p className="text-lg font-medium animate-pulse">
            🎉 Special Offer: 20% off on all Trip Packages this weekend! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;