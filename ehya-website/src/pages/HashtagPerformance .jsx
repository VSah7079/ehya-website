
import React from "react";
import { TrendingUp, Users, Star, MapPin } from "lucide-react";

const features = [
  {
    title: "Hashtag Growth",
    description: "Follow a hashtag growth total posts, videos and images.",
    icon: <TrendingUp className="w-12 h-12 text-red-500" />,
  },
  {
    title: "Influencers by Hashtag",
    description:
      "Identify the most influential people posting with your hashtag.",
    icon: <Users className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Most Influential Post",
    description:
      "See the most influential posts on hashtag you are following on.",
    icon: <Star className="w-12 h-12 text-yellow-500" />,
  },
  {
    title: "Hashtag Location",
    description: "Visualize where people are posting using your hashtag made.",
    icon: <MapPin className="w-12 h-12 text-green-500" />,
  },
];

const HashtagPerformance = () => {
  return (
    <div className="px-6 py-16 text-center bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
        Track any hashtag(s) Performance
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Don’t waste time on search manual tasks. Let Automation do it for you.
        <br />
        Simplify workflows, reduce errors, and save time.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
          >
            {/* Icon Box */}
            <div className="w-14 h-14 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg text-blue-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HashtagPerformance;
