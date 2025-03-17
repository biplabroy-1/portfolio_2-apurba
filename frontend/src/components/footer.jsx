import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (


    <footer className="bg-black text-yellow-500 py-4 w-full">
      <div className="container mx-auto flex justify-between items-center px-10">
        {/* Left Section: Name */}
        <div className="text-sm font-semibold">
          Apurba Pal
        </div>

        {/* Center Section: Copyright */}
        <div className="text-sm text-gray-400 text-center">
          Developed By Apurba Pal || © {new Date().getFullYear()}
        </div>

        {/* Right Section: Up Arrow */}
        <button
          onClick={scrollToTop}
          className="text-yellow-500 hover:text-orange-500 text-xl"
          title="Go to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
