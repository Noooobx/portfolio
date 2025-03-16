"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socials } from "@/config/socials"; // Import social links

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="flex-grow flex flex-col h-screen items-center justify-center px-6">
        {/* Animated Heading with Bounce Effect */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center"
        >
          Hello, I am{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-gray-400 bg-clip-text text-transparent">
            Nandakishor
          </span>
        </motion.h1>

        {/* Social Links with Staggered Entry and Hover Scaling */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.8, staggerChildren: 0.2 },
            },
          }}
          className="mt-10 flex space-x-5 sm:space-x-6 text-xl sm:text-2xl"
        >
          {[
            { icon: FaGithub, link: socials.github },
            { icon: FaLinkedin, link: socials.linkedIn },
            { icon: FaEnvelope, link: socials.email },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: "easeOut", duration: 0.5 },
                },
              }}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-blue-400 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer Now Sticks to Bottom */}
      <Footer />
    </div>
  );
}
