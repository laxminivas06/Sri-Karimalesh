import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 min-h-screen py-16">
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center mb-12"
      >
        <img
          src="https://res.cloudinary.com/dt3effj06/image/upload/v1740291043/ja5nmb3loua6hulbcbgu.svg"
          alt="Sri Karimalesh Caterings Logo"
          className="w-64 h-64 md:w-80 md:h-80 animate-pulse drop-shadow-lg"
        />
      </motion.div>

      {/* Heading */}
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-orange-900 mb-8 drop-shadow-md"
        >
          About Us
        </motion.h2>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/dt3effj06/image/upload/v1740291043/chef_image.svg"
            alt="Chef at Sri Karimalesh Caterings"
            className="rounded-lg shadow-2xl w-full max-w-md border-4 border-orange-300 transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-800 bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-2xl border-l-4 border-orange-600"
        >
          <p className="mb-6 leading-relaxed">
            Welcome to <strong className="text-orange-900 font-semibold">Sri Karimalesh Caterings</strong>, a name synonymous with
            <em> authentic flavors, rich traditions, and exquisite culinary experiences</em>. We are dedicated to bringing the essence of South Indian cuisine to your table, crafted with love and tradition.
          </p>
          <p className="mb-6 leading-relaxed">
            With a legacy spanning over a decade, our expert chefs craft dishes infused with passion, tradition, and the freshest ingredients. Every dish tells a story of our heritage and commitment to excellence.
          </p>
          <p className="mb-6 leading-relaxed">
            From intimate gatherings to grand celebrations, we bring the essence of South Indian cuisine to every plate, ensuring that every meal is more than just food—it's an experience. Our menu is a celebration of flavors, textures, and aromas that transport you to the heart of South India.
          </p>
        </motion.div>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-2xl border-t-4 border-orange-600">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-3xl font-bold text-orange-900 mb-6"
        >
          Our Story
        </motion.h3>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Founded by <strong className="text-orange-900 font-semibold">Rajessh Morishetty & Karimala Morishetty</strong>, our journey started in a humble kitchen with a vision to bring people together through food. What began as a small family endeavor has now blossomed into a renowned catering service, celebrated for its authenticity and warmth.
        </p>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Our founders' passion for cooking and their dedication to preserving traditional recipes have been the driving force behind our success. Today, we continue to honor their legacy by delivering exceptional culinary experiences to our clients.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-2xl border-t-4 border-orange-600">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl font-bold text-orange-900 mb-6"
        >
          Our Mission
        </motion.h3>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          At <strong className="text-orange-900 font-semibold">Sri Karimalesh Caterings</strong>, our mission is to create unforgettable dining experiences by blending traditional recipes with modern culinary techniques. We strive to bring joy to every occasion through our delicious and authentic South Indian cuisine.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-2xl border-t-4 border-orange-600">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-3xl font-bold text-orange-900 mb-6"
        >
          Why Choose Us?
        </motion.h3>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          - <strong>Authentic Flavors:</strong> We use traditional recipes passed down through generations.
          <br />
          - <strong>Fresh Ingredients:</strong> Only the finest and freshest ingredients are used in every dish.
          <br />
          - <strong>Experienced Chefs:</strong> Our chefs bring years of expertise and passion to the table.
          <br />
          - <strong>Customized Menus:</strong> Tailored to suit your preferences and event requirements.
          <br />
          - <strong>Unmatched Hospitality:</strong> We ensure every guest feels special and well taken care of.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-2xl border-t-4 border-orange-600">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-3xl font-bold text-orange-900 mb-6"
        >
          What Our Clients Say
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "The food was absolutely delicious! Every bite took me back to my childhood in South India. Highly recommend!",
              author: "Priya S.",
            },
            {
              quote: "Sri Karimalesh Caterings made our wedding unforgettable. The service was impeccable, and the food was out of this world!",
              author: "Rahul & Anjali",
            },
            {
              quote: "From the appetizers to the desserts, everything was perfect. Thank you for making our event so special!",
              author: "Meena K.",
            },
            {
              quote: "The best catering service I've ever experienced. Authentic, flavorful, and delivered with so much love.",
              author: "Arjun P.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="text-left bg-orange-100 p-6 rounded-lg shadow-md border-l-4 border-orange-500"
            >
              <p className="text-lg text-gray-800 italic">"{testimonial.quote}"</p>
              <p className="mt-4 text-orange-900 font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-20 pb-16 px-6">
        {[
          { title: "15+ Years of Experience", icon: "⏳" },
          { title: "1000+ Happy Customers", icon: "✨" },
          { title: "Award-Winning Recipes", icon: "🏆" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="text-orange-900 text-center bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-lg border-t-4 border-orange-500 flex-1 min-w-[250px] max-w-[300px] transform hover:scale-105 transition-transform duration-300"
          >
            <span className="text-5xl mb-4">{item.icon}</span>
            <p className="mt-2 text-xl font-semibold">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;