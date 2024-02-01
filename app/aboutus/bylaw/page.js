"use client"

import Navbar from "../../../components/navbar";

import Footer from "../../../components/footer";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <>
        <Navbar />
        <ByLaw />
        <Footer />
        {/* Back to Top Button */}
        {isVisible && (
          <button
          onClick={scrolltoTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
          Back to Top
         </button>
        )}
      </>
    );
  }

export default Home;