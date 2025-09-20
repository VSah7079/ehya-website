
import Home from "../pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../pages/Landing";
import HashtagPerformance from "../pages/HashtagPerformance ";
import Docs from "../pages/Docs";
import Help from "../pages/Help";

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/hashtags" element={<HashtagPerformance />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
