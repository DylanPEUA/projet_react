import React from 'react';

function Competences() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS3', level: 80 },
    { name: 'JAVASCRIPT', level: 70 },
    { name: 'PHP', level: 60 },
    { name: 'REACT', level: 50 },
  ];

  // Tableau de classes de couleur pour chaque compétence 
  const colors = [
    'bg-red-600',   
    'bg-cyan-400',  
    'bg-yellow-400',
    'bg-green-700', 
    'bg-blue-500'   
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Mes compétences</h2>
      <div className="w-full h-1 bg-blue-500 mt-2" />
      
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          {/* Titre de la compétence avec le pourcentage à côté */}
          <div className="mb-1">
            <span className="text-sm font-medium text-black">
              {skill.name} {skill.level}%
            </span>
          </div>
          
          {/* Barre de progression */}
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