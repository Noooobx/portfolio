import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socials } from "@/config/socials";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center mt-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright Text */}
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Nandu. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href={socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="text-xl text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
