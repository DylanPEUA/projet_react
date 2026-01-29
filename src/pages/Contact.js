
// Page Contact : affiche le formulaire de contact et un texte d'intro
import React from 'react';
import Formulaire from '../components/formulaire';

function Contact() {
  return (
    <>
      {/* En-tête de la page contact */}
      <div className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="mt-2 mb-8 px-2 text-xs">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
        <div className="w-1/4 mx-auto h-1 bg-blue-500 mt-2 mb-12" />

        {/* Formulaire de contact */}
        <div className="bg-white py-16 px-4">
          <Formulaire />
        </div>
      </div>
    </> 
  );   
}

export default Contact;