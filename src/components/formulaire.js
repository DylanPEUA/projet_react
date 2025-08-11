import React from 'react';

function Formdecontact() {
  const inputClasses = "w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700 text-sm";

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 flex justify-start">Formulaire de contact</h2>
      <div className="w-full h-1 bg-blue-500 mt-2" />

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" id="name" name="name" required placeholder="Votre nom" className={`${inputClasses} mt-8`} />

        <input type="email" id="email" name="email" required placeholder="Votre adresse mail" className={inputClasses} />

        <input type="tel" id="phone" name="phone" required pattern="[0-9+\s-]{6,15}" placeholder="Votre numéro de téléphone" className={inputClasses} />

        <input type="text" id="subject" name="subject" required placeholder="Sujet" className={inputClasses} />

        <textarea id="message" name="message" required rows="15" placeholder="Votre message" className={`${inputClasses} mb-6 resize-y`}></textarea>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mb-4">
          Envoyer
        </button>
      </form>
    </div>
  );
}


function Mescoord() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6 flex justify-start">Mes coordonnées</h2>
      <div className="w-full h-1 bg-blue-500 mt-2" />

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


function Formulaire() {
  return (
    <>
        <div className="max-w-6xl mx-auto bg-white rounded-md shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Formdecontact />
          <Mescoord />
        </div>
    </>
  );
}

export default Formulaire;