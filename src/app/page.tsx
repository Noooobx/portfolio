"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <Navbar />
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-extrabold tracking-tight text-center"
      >
        Hello, I am{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Nandu
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg text-gray-300 text-center"
      >
        Full-Stack Developer | Creator | Problem Solver
      </motion.p>

      {/* Portfolio Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {[
          { title: "Projects", desc: "Showcasing my best work", link: "#" },
          { title: "Skills", desc: "Tech Stack & Tools", link: "#" },
          { title: "Experience", desc: "My professional journey", link: "#" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-400">{item.desc}</p>
          </motion.a>
        ))}
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-10 flex space-x-6 text-2xl"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition" />
        </a>
        <a href="mailto:nandu@example.com">
          <FaEnvelope className="hover:text-blue-400 transition" />
        </a>
      </motion.div>
    </div>
  );
}
