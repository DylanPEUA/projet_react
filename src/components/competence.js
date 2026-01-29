
// Composant d'affichage des compétences avec barres de progression
import React from 'react';

function Competences() {
  // Liste des compétences et leur niveau (en %)
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS3', level: 80 },
    { name: 'JAVASCRIPT', level: 70 },
    { name: 'PHP', level: 60 },
    { name: 'REACT', level: 50 },
  ];

  // Couleurs associées à chaque barre de progression
  const colors = [
    'bg-red-600',   // HTML
    'bg-cyan-400',  // CSS3
    'bg-yellow-400',// JS
    'bg-green-700', // PHP
    'bg-blue-500'   // React
  ];

  return (
    <div className="space-y-4">
      {/* Titre principal */}
      <h2 className="text-2xl font-bold mb-6 text-center">Mes compétences</h2>
      <div className="w-full h-1 bg-blue-500 mt-2" />
      
      {/* Affichage de chaque compétence avec sa barre de progression */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          {/* Nom de la compétence et pourcentage */}
          <div className="mb-1">
            <span className="text-sm font-medium text-black">
              {skill.name} {skill.level}%
            </span>
          </div>
          {/* Barre de progression colorée */}
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`${colors[index]} h-4 rounded-full transition-all duration-700`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Competences;