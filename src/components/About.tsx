import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <section id='about' className="bg-[#1E293B] py-20">
      {/* Container Centralizado */}
      <div className="container mx-auto px-6 flex justify-center">
        {/* Box Branco */}
        <div className="bg-gray-100 rounded-lg shadow-md p-8 max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Imagem Circular */}
          <div className="relative w-140 h-240">
            <img
              src="https://placehold.co/400x400/" // Substitua pela sua imagem
              alt="Foto de perfil"
              className="w-full h-full rounded-full object-cover border-4 border-dotted border-cyan-500"
            />
          </div>

          {/* Apresentação */}
          <div className="text-center md:text-left">
            {/* Título em Degradê */}
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              Sobre Mim
            </h2>
            {/* Texto de Apresentação */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Olá! Sou desenvolvedora de sistemas, websites e chatbots, além de designer e ilustradora. Meu objetivo é criar soluções inovadoras e experiências digitais incríveis. Trabalho com tecnologia para transformar ideias em realidade, sempre buscando a excelência nos detalhes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};