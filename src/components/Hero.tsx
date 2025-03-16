import React, { useState, useEffect } from "react";
import { Navbar } from './Navbar';
import './Hero.css';

export const Hero: React.FC = () => {
  const roles = [
    "Web Developer",
    "Automation",
    "Designer",
    "Illustrator",
    "Chatbots",
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
    <div className="relative bg-[#1E293B] flex flex-col overflow-hidden">
      {/* Fundo Animado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center relative z-10">
        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, i'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Edy!
          </span>
        </h1>
        {/* Texto com Efeito de Máquina de Escrever */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          <span key={currentIndex} className="relative inline-block">
            {currentRole}
            <span className="absolute right-0 top-0 text-gray-500 animate-blink">|</span>
          </span>
        </p>
        {/* Botão */}
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-cyan-600 transition"
          >
            See Projects
          </a>
        </div>
      </section>
    </div>
  );
};