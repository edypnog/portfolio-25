import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] py-6">
      {/* Container */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-300">
        {/* Ano Atual */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        {/* Link para o GitHub */}
        <p className="text-sm mt-2 md:mt-0">
          made by{" "}
          <a
            href="https://github.com/edypnog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            edy
          </a>
        </p>
      </div>
    </footer>
  );
};