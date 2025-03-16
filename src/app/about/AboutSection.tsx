"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../../public/profile.jpg"; // Replace with your actual image path

export function AboutSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly min-h-screen w-full bg-black text-white px-4 sm:px-8 md:px-12 py-12 sm:py-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-md sm:max-w-lg lg:max-w-2xl px-10 text-gray-600 text-left"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Hey, I'm <span className="text-white">Nandakishor.</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed "
        >
          A{" "} student
          with a focus on building scalable, high-performance applications.
          Experienced in developing robust backend systems and intuitive
          front-end interfaces, I strive to create seamless digital experiences
          that drive efficiency and usability.
        </motion.p>

        {/* Subtle Underline Animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-20 sm:w-24 h-1 bg-blue-500 mt-3 sm:mt-4 origin-left transform scale-x-0"
        />
      </motion.div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mt-8 sm:mt-12 lg:mt-0 lg:ml-12"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={profilePic}
            alt="Nandu's Profile"
            width={300}
            height={300}
            className="rounded-2xl md:h-96 md:w-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
