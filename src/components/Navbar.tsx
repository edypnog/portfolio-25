import React, { useState } from "react";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-white font-bold text-2xl ml-5">
            edy<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">pnog</span>
            </div>

            {/* Links (Desktop) */}
            <div className="hidden md:flex space-x-6">
            <a
                href="#about"
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
            >
                About Me
            </a>
            <a
                href="#skills"
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
            >
                Skills
            </a>
            <a
                href="#projects"
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
            >
                Projects
            </a>
            <a
                href="#contact"
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
            >
                Contact
            </a>
            </div>

            {/* Menu Hamburguer (Mobile) */}
            <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
            </div>

            {/* Menu Dropdown (Mobile) */}
            {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#1E293B] py-4">
                <a
                href="#about"
                className="block px-6 py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
                onClick={() => setIsOpen(false)}
                >
                About Me
                </a>
                <a
                href="#skills"
                className="block px-6 py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
                onClick={() => setIsOpen(false)}
                >
                Skils
                </a>
                <a
                href="#projects"
                className="block px-6 py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
                onClick={() => setIsOpen(false)}
                >
                Projects
                </a>
                <a
                href="#contact"
                className="block px-6 py-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 transition"
                onClick={() => setIsOpen(false)}
                >
                Contact
                </a>
            </div>
            )}
        </div>
        </nav>
    );
};