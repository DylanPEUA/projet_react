
// Composant Section : bloc extensible/contractable avec titre et contenu
import React from 'react';
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Section({ title, isOpen, onClick, children, className }) {
  return (
    <div className={`border bg-white overflow-hidden ${className}`}>
      {/* En-tête de la section : bouton avec titre et flèche */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold hover:bg-gray-100 transition"
      >
        {title}
        <ChevronRightIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Contenu de la section, affiché si isOpen */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 p-4" : "max-h-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;