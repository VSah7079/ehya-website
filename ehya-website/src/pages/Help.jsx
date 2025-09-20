// components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="w-[80%] mx-auto my-10 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="text-white">
          <h2 className="text-3xl font-bold leading-snug mb-4">
            Grow your brand <br />
            presence on social <br />
            media <span>😍</span>
          </h2>
          <p className="text-sm mb-4">Join with more 1200+ happy customers</p>

          {/* Avatars */}
          <div className="flex items-center space-x-2">
            {/* Avatar Images */}
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="User 1"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="User 2"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="User 3"
              />
              <img
                src="https://i.pravatar.cc/40?img=4"
                className="w-8 h-8 rounded-full border-2 border-white"
                alt="User 4"
              />
            </div>

            {/* Others Text */}
            <a href="#" className="text-white underline text-sm">
              and others
            </a>
          </div>
        </div>

        {/* Right Side - Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-white text-cyan-500 font-medium py-3 px-6 rounded-md shadow hover:bg-gray-100 transition">
            Get your trial now
          </button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
       
      </div>
    </div>
  );
};

export default Banner;
