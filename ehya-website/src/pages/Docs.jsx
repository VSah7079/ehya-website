// components/TestimonialSection.jsx
import React, { useState } from "react";

const testimonials = [
  {
    name: "Jaquon Hart",
    title: "Digital Marketing Executive, Hypebeast",
    image: "https://i.pravatar.cc/100?img=10", // Replace with real image path
    rating: 5,
    text: `“With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”`
  },
  // Add more testimonials here if needed
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            Powering the growth of <br />
            <span className="text-blue-900">100+ business & retailers in Indonesia.</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            From single store, startups, to large multi-store brands.
          </p>
        </div>

        {/* Right Section - Testimonial */}
        <div className="relative bg-white rounded-lg p-6 shadow-sm">
          <div className="text-yellow-500 mb-2">
            {"★".repeat(testimonials[current].rating)}
          </div>
          <p className="italic text-gray-600 mb-6">{testimonials[current].text}</p>
          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-blue-800">{testimonials[current].name}</p>
              <p className="text-sm text-gray-500">{testimonials[current].title}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2 cursor-pointer" onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
            <span className="text-gray-400 hover:text-gray-700 text-xl">&lt;</span>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2 cursor-pointer" onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}>
            <span className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-700">&gt;</span>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
