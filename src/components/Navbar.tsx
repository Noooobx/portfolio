"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md h-20 flex items-center justify-between px-6 md:py-14 md:px-40">
        {/* Logo or Placeholder */}
        <img className="h-20" src="https://noooobx.github.io/PersonalWebsite/logo.jpg"></img>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-10">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`${item.toLowerCase()}`}
                className="hover:text-blue-400 mx-4 text-lg font-light transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Sidebar and Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="h-full w-72 bg-gray-900 text-white shadow-2xl flex flex-col p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mt-16 space-y-6 text-lg font-light">
              {["About", "Projects", "Contact"].map((item) => (
                <li key={item} className="w-full">
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 hover:bg-gray-800 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
}
