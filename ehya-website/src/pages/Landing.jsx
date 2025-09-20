// ScheduleSection.jsx
import React from "react";

const Features = () => {
  return (
  <div className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Partner Logos */}
  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-10 sm:mb-16 md:mb-20 opacity-70">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
          alt="slack"
          className="h-8"
        />
        <span className="text-2xl font-semibold">NETFLIX</span>
        <span className="text-2xl font-semibold">Google</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="airbnb"
          className="h-8"
        />
        <span className="text-2xl font-semibold">UBER</span>
      </div>

      {/* Main Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left Side Text */}
  <div className="mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Schedule Your Post <br /> Whenever You Want
          </h2>
          <p className="text-gray-600 mb-6">
            Publish your content automatically to ensure that your content
            reaches the right people. Built-in features such as
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Best Time to Post
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Geolocation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> User Tag
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">✔</span> Others benefit
            </li>
          </ul>

          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline inline-flex items-center"
          >
            Learn about scheduled post →
          </a>
        </div>

        {/* Right Side Laptop Mockup */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
            {/* Laptop screen */}
            <div className="bg-white rounded-t-2xl overflow-hidden">
              {/* Calendar Header */}
              <div className="grid grid-cols-5 text-xs sm:text-sm text-gray-600 border-b">
                <div className="p-2 text-center font-semibold">MO</div>
                <div className="p-2 text-center font-semibold">TU</div>
                <div className="p-2 text-center font-semibold">WE</div>
                <div className="p-2 text-center font-semibold">TH</div>
                <div className="p-2 text-center font-semibold">FR</div>
              </div>
              <div className="grid grid-cols-5 gap-1 sm:gap-2 p-2 sm:p-4">
                <div className="bg-yellow-200 h-12 sm:h-16 rounded"></div>
                <div className="bg-orange-300 h-12 sm:h-16 rounded"></div>
                <div className="bg-pink-300 h-12 sm:h-16 rounded"></div>
                <div className="bg-pink-100 h-12 sm:h-16 rounded"></div>
                <div className="bg-yellow-100 h-12 sm:h-16 rounded"></div>

                <div className="bg-blue-300 h-12 sm:h-16 rounded col-span-2"></div>
                <div className="bg-purple-200 h-12 sm:h-16 rounded"></div>
                <div className="bg-green-200 h-12 sm:h-16 rounded"></div>
                <div className="border-2 border-dashed border-blue-400 h-12 sm:h-16 rounded flex items-center justify-center text-blue-400 font-bold">
                  +
                </div>
              </div>
            </div>
            {/* Laptop base (bottom part) */}
            <div className="h-3 sm:h-4 bg-gray-800 rounded-b-lg"></div>
            {/* Laptop bottom shadow like MacBook */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md md:max-w-lg h-2 sm:h-3 bg-gray-400 rounded-b-full opacity-70 blur-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
