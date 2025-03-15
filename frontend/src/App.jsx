import React, { useState, useRef } from "react";
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import Modal from "./components/Modal";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Experience from "./components/pages/experience";
import AnimatedCursor from "react-animated-cursor";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

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

  const handleScrollToExperience = (e) => {
    e.preventDefault();
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-transparent min-h-screen">
      <AnimatedCursor
        innerSize={12}
        outerSize={24}
        color="255, 255, 0" // RGB for yellow
        outerAlpha={0.4}
        innerScale={1}
        outerScale={1.5}
        clickables={[
          "a",
          "button",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          ".link",
        ]}
      />
      <ParticlesBackground />
      <div className="relative z-10 min-h-screen">
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
              <div className="flex gap-4 mt-6">
                <button
                  ref={buttonRef}
                  onClick={handleOpenModal}
                  className="px-6 py-3 text-lg font-semibold text-black bg-yellow-500 border border-yellow-500 rounded-md flex items-center gap-2 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
                >
                  About Me <FaArrowRight />
                </button>
                <a
                  href="/Apurba Pal web dev.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-md flex items-center gap-2 bg-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                >
                  View Resume
                </a>
              </div>
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
        {/* Experience Button */}
        <div className="flex justify-center items-center mt-10">
          <a
            href="#experience"
            onClick={handleScrollToExperience}
            className="flex flex-col items-center text-yellow-500 hover:text-orange-500 transition-all duration-300"
          >
            <span className="text-lg font-semibold">Experience</span>
            <FaAngleDown className="w-6 h-6 mt-1 animate-bounce" />
          </a>
        </div>
      </div>
      <div className="relative">
        <Experience />
      </div>
      <div className="relative">
        <Projects/>
      </div>
      <div className="relative">
        <Contact/>
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
    </div>
  );
};

export default App;
