import React from "react";

export const Skills: React.FC = () => {
  // Lista de habilidades com seus respectivos níveis de progresso
  const skills = [
    { name: "Python", level: 80 },
    { name: "ReactJS", level: 60 },
    { name: "TypeScript", level: 40 },
    { name: "UI/UX Design", level: 85 },
    { name: "Segurança da Informação", level: 50 },
  ];

  // Lista de idiomas com seus níveis
  const languages = [
    { name: "Portuguese", level: "Nativo" },
    { name: "English", level: "B2" },
    { name: "Spanish", level: "B2" },
    { name: "French", level: "A2" },
    { name: "Italian", level: "A2" },
    { name: "Thai", level: "A1" },
  ];

  return (
    <section id='skills' className="bg-[#1E293B] px-20 py-20">
      {/* Container */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-12 uppercase">
          My Skills
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo: Barras de Progresso */}
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                {/* Nome da Habilidade */}
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>{skill.name}</span>
                </div>
                {/* Barra de Progresso */}
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full flex items-center space-x-2"
                  >
                    <span>{language.name}</span>
                    <span className="text-xs text-gray-400">({language.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          

          {/* Lado Direito: GIF Animado */}
          <div className="flex justify-center">
            {/* Idiomas */}
            
            <img
              src="https://media.tenor.com/f5T0gcox9LoAAAAj/cat-pixel.gif"
              alt="Gato animado"
              className="w-60 h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};