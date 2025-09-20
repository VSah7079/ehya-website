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
        <section id="home">
          <Home />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="hashtags">
          <HashtagPerformance />
        </section>
        <section id="docs">
          <Docs />
        </section>
        <section id="help">
          <Help />
        </section>
      </div>
      <Footer />
    </div>
  );
}
