import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useGLTF, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { FiArrowRight } from "react-icons/fi";

const ModelWithAnimation = () => {
  const group = useRef();
  const { scene } = useGLTF("/model/6770ec28b536bee7e16f371a.glb");
  const animation = useFBX("/animation/Talking On A Cell Phone.fbx");
  const mixer = useRef(null);

  useEffect(() => {
    if (group.current && animation.animations.length) {
      mixer.current = new THREE.AnimationMixer(group.current);
      mixer.current.clipAction(animation.animations[0]).play();
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [animation]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive ref={group} object={scene} scale={3.5} position={[0, -3, 0]} />;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    navigate("/thank-you");
    // Handle form submission logic (e.g., send email, save data, etc.)
  };

  return (
    <motion.div className="flex ">
      <Canvas style={{ width: "30%", height: "100vh" }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[1, -3, 0]} intensity={2.5} />
        <ModelWithAnimation />
        <OrbitControls
          minDistance={7}
          maxDistance={7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableRotate={false} // Disable rotation
        />
      </Canvas>
      <motion.div
        className="text-yellow-500 min-h-screen flex flex-col items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">Let's Talk !!</h1>
        <p className="text-lg leading-relaxed mb-6"></p>
        <div className="flex gap-10">
          <div className="bg-transparent backdrop-blur-md bg-opacity-30 p-5 rounded-md shadow-lg border border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black p-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
