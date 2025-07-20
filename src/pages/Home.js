import React,{ useState, useEffect } from 'react';
import APropos from '../components/a_propos';
import Competences from '../components/competence';
import Modale from '../components/mondale';

function Home() {

  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [githubUser, setGithubUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then((res) => res.json())
      .then((data) => setGithubUser(data))
      .catch((err) => console.error('Erreur lors du fetch GitHub :', err));
  }, []); // Récupère les données une seule fois

  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
      >
        <h1 className="text-6xl font-bold mb-6">Bonjour, je suis John Doe</h1>
        <h2 className="text-5xl font-bold mb-6">Développeur web full stack</h2>

        <button
        onClick={() => setIsModaleOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
        En savoir plus
        </button>

        {/* Modale */}
        <Modale isOpen={isModaleOpen} onClose={() => setIsModaleOpen(false)} user={githubUser} />

        
      </div>

      
      {/* Section À propos + Compétences */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <APropos />
          <Competences />
        </div>
      </div>
    </>
  );
      
}

export default Home;