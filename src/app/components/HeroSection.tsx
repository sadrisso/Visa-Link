import React from "react";
import Navbar from "./Navbar";


function HeroSection() {
  return (
    <div
      className="relative h-[100vh] flex flex-col items-start justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/HfPPD1VC/visa-banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 w-full max-w-5xl">
        {/* Navigation Links */}
        <Navbar/>

        {/* Hero Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to our Website
        </h1>
        <p className="text-gray-300 text-md mb-6 max-w-2xl">
          Here you can explore visa services, learn the visa process steps, and track your application progress easily.
        </p>
        <button className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-sm sm:text-base md:text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
