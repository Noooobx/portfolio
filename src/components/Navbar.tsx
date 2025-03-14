"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center h-20 px-8 py-4 bg-black/30 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-30">
        <li>
          <Link href="#about" className="hover:text-blue-400 text-xl font-light transition">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-blue-400 text-xl font-light transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-400 text-xl font-light transition">
            Contact
          </Link>
        </li>
      </ul>
      
    </nav>
  );
}
