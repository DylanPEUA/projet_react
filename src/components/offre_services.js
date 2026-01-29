
// Composant qui présente les différents services proposés
import React from 'react';
import { PaintBrushIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


function Offreservices() {
  return (
    <>
        {/* Bloc UX Design : Expérience utilisateur */}
        <div className="shadow-md border border-gray-300 px-1 py-5">
            <div className="flex justify-center p-8">
                <PaintBrushIcon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">UX Design</h3>
            <p className="text-black text-sm leading-relaxed">
                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.)
                en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
            </p>
        </div>
        {/* Bloc Développement web : création de sites et applis */}
        <div className="shadow-md border border-gray-300 px-1 py-5">
            <div className="flex justify-center p-8">
                <CodeBracketIcon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Développement web</h3>
            <p className="text-black text-sm leading-relaxed">
                Le développement de sites web consiste à créer des sites internets en utilisant des langages de programmation 
                (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
        </div>
        {/* Bloc Référencement : SEO */}
        <div className="shadow-md border border-gray-300 px-1 py-5">
            <div className="flex justify-center p-8">
                <MagnifyingGlassIcon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Référencement</h3>
            <p className="text-black text-sm leading-relaxed">
                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats
                des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
        </div>
    </>
  );
}

export default Offreservices;