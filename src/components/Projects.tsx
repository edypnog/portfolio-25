import React from "react";

export const Projects: React.FC = () => {
  // Lista de projetos com nome, descrição, imagem e link
  const projects = [
    {
      title: "Projeto 1",
      description: "Tecnologias usadas: React, TypeScript, TailwindCSS.",
      image: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", // Substitua pela URL da sua imagem
      link: "https://github.com/edypnog/landing-grafica", // Certifique-se de que o link é válido
    },
    {
      title: "Projeto 2",
      description: "Descrição breve do projeto 2. Tecnologias usadas: Node.js, Express, MongoDB.",
      image: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", // Substitua pela URL da sua imagem
      link: "https://github.com", // Certifique-se de que o link é válido
    },
    {
      title: "Projeto 3",
      description: "Descrição breve do projeto 3. Tecnologias usadas: Figma, Adobe XD.",
      image: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", // Substitua pela URL da sua imagem
      link: "https://github.com", // Certifique-se de que o link é válido
    },
    {
      title: "Projeto 4",
      description: "Descrição breve do projeto 4. Tecnologias usadas: Python, Django, PostgreSQL.",
      image: "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg", // Substitua pela URL da sua imagem
      link: "https://github.com", // Certifique-se de que o link é válido
    },
  ];

  return (
    <section className="bg-[#1E293B] py-20">
      {/* Container */}
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-12">
          Meus Projetos
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
      </div>
    </section>
  );
};