import { skillsData } from "./data";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

const skillIcons = {
  React: <FaReact size={40} className="text-blue-400" />,
  NodeJS: <FaNodeJs size={40} className="text-green-500" />,
  MongoDB: <FaDatabase size={40} className="text-green-400" />,
  Python: <FaPython size={40} className="text-yellow-400" />,
  HTML: <FaHtml5 size={40} className="text-orange-500" />,
  CSS: <FaCss3Alt size={40} className="text-blue-500" />,
  JavaScript: <FaJsSquare size={40} className="text-yellow-300" />,
  Git: <FaGitAlt size={40} className="text-red-500" />,
};

export default function Skills() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center min-h-screen px-6">
      <h2 className="text-4xl font-semibold text-white text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-auto p-6 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-110"
          >
            {skillIcons[skill] || <FaReact size={40} className="text-gray-400" />} {/* Fallback Icon */}
            <span className="text-white text-lg mt-2">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
