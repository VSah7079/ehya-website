import React from "react";

const statuses = [
  "Active",
  "Need action",
  "Allocated",
  "Inactive",
  "Suspended",
  "Allocated",
];

export default function Home() {
  return (
    <div className="bg-cyan-400 min-h-screen px-4 sm:px-6 md:px-8 py-8 md:py-12 flex items-center overflow-x-hidden">
      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        {/* Left Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <h1 className="text-white text-5xl font-bold mb-6 leading-tight">
            We help you <br /> grow your bus <br /> faster
          </h1>
          <p className="text-white text-lg mb-8 max-w-md">
            Ehya is the Instagram analytics platform focused on the goals, track engagement and grow your business .
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 rounded px-6 py-3 font-semibold hover:shadow-lg transition">
              See how it works
            </button>
            <button className="text-white font-semibold flex items-center">
              Get a free demo &rarr;
            </button>
          </div>
        </div>
        {/* Right Section: Dashboard Mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 w-full max-w-xs sm:max-w-md md:max-w-xl">
            {/* Ads Statuses */}
            <div className="absolute -top-12 right-4 sm:right-10 bg-white shadow rounded-lg px-3 sm:px-6 py-2 flex flex-wrap gap-2">
              {statuses.map((status, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-500 text-xs px-3 py-1 rounded-full"
                >
                  {status}
                </span>
              ))}
            </div>
            {/* Overview Title */}
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
              <div className="h-10 bg-blue-100 rounded"></div>
              <div className="h-10 bg-blue-300 rounded"></div>
              <div className="h-10 bg-blue-100 rounded"></div>
            </div>
            {/* Charts */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 items-start mb-6 gap-4 sm:gap-0">
              <div className="bg-white shadow-xl rounded-lg p-3 w-full sm:w-1/2 mb-4 sm:mb-0">
                <h3 className="font-semibold text-sm mb-2">20 Days</h3>
                <p className="text-xs text-gray-500 mb-2">Average likes gained</p>
                <span className="text-xs text-blue-500 bg-blue-100 px-2 rounded">↑ 10.5%</span>
                <div className="mt-2 flex space-x-2 items-end h-16">
                  {[15, 20, 24, 10].map((val, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${val+20}px` }}
                      className={`w-4 bg-blue-400 rounded`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-lg px-4 py-5 flex flex-col items-center w-full sm:w-1/2">
                <div className="text-blue-500 text-2xl mb-1"><span role="img" aria-label="like">👍</span></div>
                <div className="text-xl font-bold text-gray-800">398K</div>
                <div className="text-xs text-gray-500">Total Likes</div>
              </div>
            </div>
            {/* Bar & Pie Charts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="h-24 flex items-end space-x-2">
                {[30,43,38,32,41,37].map((val, i) => (
                  <div key={i} className={`w-4 rounded bg-yellow-400`} style={{ height: `${val}px` }} />
                ))}
              </div>
              <div className="h-24 flex justify-center items-center">
                <div className="w-16 h-16 rounded-full border-8 border-blue-400 border-b-transparent"></div>
              </div>
            </div>
            {/* Last row mini charts */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
              <div className="h-12 bg-gray-100 rounded flex items-center px-2">
                <div className="w-full border-b border-gray-400"></div>
              </div>
              <div className="h-12 bg-gray-100 rounded flex items-center px-2 space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-16 h-2 rounded bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="h-12 bg-gray-100 rounded flex items-center px-2">
                <div className="w-full border-b border-gray-400 border-dashed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
