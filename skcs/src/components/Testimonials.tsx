import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Reddy",
    content: "The authentic Telugu flavors remind me of my grandmother's cooking. Their meal box service is a lifesaver for busy days!",
    rating: 5
  },
  {
    name: "Raj Kumar",
    content: "As a food critic, I'm impressed by their consistency in maintaining traditional taste while providing modern convenience.",
    rating: 5
  },
  {
    name: "Lakshmi Prasad",
    content: "Their catering service for our office events is exceptional. The variety and quality of food always exceed expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-6">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="relative">
                <Quote className="w-8 h-8 text-orange-200 absolute -top-4 -left-2 transform -scale-x-100" />
                <p className="text-gray-600 italic pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;