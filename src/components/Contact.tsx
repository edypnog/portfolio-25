import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Contact: React.FC = () => {
  // Lista de redes sociais com links e ícones do Font Awesome
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/edypnog",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/edynogueira",
      icon: faLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/edypnog",
      icon: faInstagram,
    },
  ];

  return (
    <section id="contact" className="bg-[#1E293B] py-20">
      {/* Container Centralizado */}
      <div className="container mx-auto px-6 flex justify-center">
        {/* Box Branco */}
        <div className="bg-gray-100 rounded-lg shadow-md p-8 max-w-4xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

          {/* Apresentação */}
          <div className="text-center md:text-left">
            {/* Título em Degradê */}
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 uppercase">
              Where to find me?
            </h2>
            {/* Texto de Apresentação */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Contact me through my social media. I'm open to new opportunities and conversations!
            </p>
            {/* Botões de Redes Sociais */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md shadow-md hover:bg-cyan-600 transition"
                >
                  {/* Ícone do Font Awesome */}
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5 mr-2" />
                  {/* Nome da Rede Social */}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};