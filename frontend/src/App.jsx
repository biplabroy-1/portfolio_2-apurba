import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import Modal from "./components/Modal"; // Import the Modal component
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(null);
  const buttonRef = useRef(null);

  const handleOpenModal = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setButtonPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-transparent min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        {/* my info */}
        <div className="text-white flex flex-col items-center mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-40">
            <div className="text-center md:text-left">
              <h1 className="text-lg">👋 Hi, I am</h1>
              <h1 className="text-8xl font-bold">
                <span className="text-white">Apurba</span>{" "}
                <span className="text-yellow-500">Pal</span>
              </h1>
              <button
                ref={buttonRef}
                onClick={handleOpenModal}
                className="mt-6 px-6 py-3 text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-md flex items-center gap-2 bg-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
              >
                About Me <FaArrowRight />
              </button>
            </div>
            <div>
              <img
                src="/myImage2.jpg"
                alt="Apurba Pal"
                className="w-80 h-80 rounded-full border-4 border-yellow-500 object-cover shadow-yellowGlow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} buttonPosition={buttonPosition}>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          Hello! I am Apurba Pal, a passionate developer with a love for
          creating beautiful and functional web applications. I enjoy learning
          new technologies and solving challenging problems.
        </p>
      </Modal>
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a
          href="#experience"
          className="flex flex-col items-center text-yellow-500 hover:text-orange-500 transition-all duration-300"
        >
          <span className="text-lg font-semibold">Experience</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mt-1 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
