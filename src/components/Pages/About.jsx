import React from "react";
import "../styles/About.css"; // Make sure to create a corresponding CSS file if needed.

const About = () => {
  return (
    <div className="about-page bg-white text-gray-900">
      
      {/* Hero Section - Blisse Company Image */}
      <div className="relative w-full h-[60vh]">
        {/* <img
          src="./assets/candleLogo.jpg" // Update with your actual image path
          alt="Blisse Company"  
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Blisse</h1>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Story Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">OUR STORY</h2>
          <p className="text-gray-700 leading-relaxed">
            Inspired by life’s simple moments, APOTHEKE believes that scent can transform a house into a home, elevate every mood, and help keep memories alive.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            What began in 2011 as a personal exploration of scent formulation and soap making in the Brooklyn, New York, kitchen of founder Chrissy Fichte, has grown into a widely recognized and beloved luxury lifestyle fragrance brand. True to its Brooklyn roots and contemporary ethos, APOTHEKE believes that simplicity is the ultimate expression of luxury.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Appreciate and celebrate life’s simplest yet most special moments every day with APOTHEKE’s ever-expanding collection of home and personal fragrances and products.
          </p>
        </div>

        {/* Owner Image & Signature */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            // src="/images/owner-photo.jpg" // Update with your actual image path
            // alt="Owner"
            // className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
          <p className="mt-4 font-semibold text-lg">Purnima Sharma</p>
          <img
            // src="/images/signature.png" // Update with your actual image path
            // alt="Signature"
            // className="w-40 mt-2"
          />
        </div>
      </div>

      {/* Our Commitments Section */}
      <div className="bg-amber-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">OUR COMMITMENTS</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are committed to using high-quality ingredients, sustainable packaging, and ethical sourcing in every product we make.
          </p>
        </div>
      </div>

      {/* Achievements Gallery */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* <img src="/images/achievement1.jpg" alt="Achievement 1" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="/images/achievement2.jpg" alt="Achievement 2" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="/images/achievement3.jpg" alt="Achievement 3" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          <img src="/images/achievement4.jpg" alt="Achievement 4" className="w-full h-48 object-cover rounded-lg shadow-lg" /> */}
        </div>
      </div>

    </div>
  );
};

export default About;
