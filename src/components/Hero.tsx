import React, { useState, useEffect } from "react";

export const Hero: React.FC = () => {
  const roles = [
    "Desenvolvedora de sistemas",
    "Desenvolvedora de websites",
    "Desenvolvedora de chatbots",
    "Designer",
    "Ilustração",
    "Tradução"
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Velocidade de digitação

  useEffect(() => {
    const handleTyping = () => {
      const currentText = roles[currentIndex];
      if (!isDeleting) {
        // Digitação
        setCurrentRole(currentText.substring(0, currentRole.length + 1));
        if (currentRole === currentText) {
          // Texto completo, espera um pouco e começa a apagar
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setTypingSpeed(50); // Velocidade de digitação
        }
      } else {
        // Apagando
        setCurrentRole(currentText.substring(0, currentRole.length - 1));
        if (currentRole === "") {
          // Texto completamente apagado, passa para o próximo cargo
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(50); // Reseta a velocidade de digitação
        } else {
          setTypingSpeed(50); // Velocidade de apagamento
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, currentIndex, roles, typingSpeed]);

  return (
    <div className="bg-[#1E293B] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">edy<span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>pnog</span></div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">
              Sobre
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projetos
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="container mx-auto px-6 py-20 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Olá, eu sou a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Edy!
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          <span key={currentIndex} className="relative inline-block">
            {currentRole}
            <span className="absolute right-0 top-0 text-gray-500 animate-blink">|</span>
          </span>
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-cyan-600 transition"
          >
            Ver Projetos
          </a>
        </div>
      </section>
    </div>
  );
};