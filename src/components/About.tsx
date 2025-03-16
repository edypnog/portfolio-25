import React from "react";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="bg-[#1E293B] py-20">
      {/* Container Centralizado */}
      <div className="container mx-auto px-6 flex justify-center">
        {/* Box Branco */}
        <div className="bg-gray-100 rounded-lg shadow-md p-8 max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Imagem Circular */}
          <div className="relative w-40 h-40 md:w-96 md:h-28 m-5">
            <img
              src="https://avatars.githubusercontent.com/u/73756874?v=4" // Substitua pela sua imagem
              alt="Foto de perfil"
              className="w-full h-full rounded-full object-cover aspect-square border-4 border-dotted border-cyan-500"
            />
          </div>

          {/* Apresentação */}
          <div className="text-center md:text-left">
            {/* Título em Degradê */}
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              About Me
            </h2>
            {/* Texto de Apresentação */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Hello! I'm a developer from Brazil with a love for creating web applications, chatbots and very interested in Cyber Security. I also enjoy UI/UX and drawing. Naturally curious and always eager to learn, I've taught myself programming and can understand and speak nearly six languages, all through self-study!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};