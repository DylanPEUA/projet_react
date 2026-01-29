
// Composant de présentation "À propos" avec portrait et texte descriptif
import React from 'react';

function Apropos() {
  return (
    <div className="space-y-4">
      {/* Titre de la section */}
      <h2 className="text-2xl font-bold mb-6">À propos</h2>
      <div className="w-full h-1 bg-blue-500 mt-2" />

      {/* Portrait de l'auteur */}
      <img 
        src="/img/john-doe-about.jpg" 
        alt="Portrait de John Doe" 
        className="object-cover mx-auto"
      />

      {/* Texte descriptif (exemple) */}
      <p className="text-black text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="text-black text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p className="text-black text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
    </div>
  );
}

export default Apropos;