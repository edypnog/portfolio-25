import React from "react";

export const Projects: React.FC = () => {
  // Lista de projetos com nome, descrição, imagem e link
  const projects = [
    {
      title: "Landing Page",
      description: "React, TypeScript, TailwindCSS.",
      image: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", // Substitua pela URL da sua imagem
      link: "https://github.com/edypnog/landing-grafica", // Certifique-se de que o link é válido
    },
    {
      title: "Texas Bike (Mobile)",
      description: "React Native, JavaScript",
      image: "https://user-images.githubusercontent.com/73756874/222537477-0304a7c6-1f70-4f39-82b1-1b5b1c0c6fe4.png", // Substitua pela URL da sua imagem
      link: "https://github.com/edypnog/texas-bike-rn", // Certifique-se de que o link é válido
    },
    {
      title: "Espaço Crochet",
      description: "Figma, React, JavaScript",
      image: "https://user-images.githubusercontent.com/73756874/220186979-2d7cdcca-ce4b-47ba-8db6-7a45f20a4609.png", // Substitua pela URL da sua imagem
      link: "https://github.com/edypnog/espaco-crochet", // Certifique-se de que o link é válido
    },
  ];

  return (
    <section id='projects' className="bg-[#1E293B] py-20">
      {/* Container */}
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-12">
          PROJECTS
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Imagem do Projeto */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Conteúdo do Card */}
              <div className="p-6 bg-gray-800 flex flex-col justify-between h-40">
                {/* Título */}
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {/* Descrição */}
                <p className="text-gray-300 text-sm mt-2 flex-grow">{project.description}</p>
                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:text-cyan-300 transition mt-4"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Botão "Click Here" */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/edypnog" // Substitua pelo link do seu GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition"
          >
            Click here to see my GitHub projects
          </a>
        </div>
      </div>
    </section>
  );
};