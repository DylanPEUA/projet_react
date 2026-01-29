import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Colonne 1 : Informations personnelles et réseaux sociaux */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">John Doe</h2>
          <p>Ave du Prince Hinoi<br />98714 Papeete, French Polynesia</p>
          <p>Tél : +689 87 00 00 00</p>
          {/* Liens vers les réseaux sociaux */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gray-300 hover:text-white text-2xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gray-300 hover:text-white text-2xl transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gray-300 hover:text-white text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Liens de navigation internes */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Liens utiles</h2>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="hover:font-bold transition-all">Accueil</Link></li>
            <li><Link to="/services" className="hover:font-bold transition-all">Services</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:font-bold transition-all">Contact</Link></li>
            <li><Link to="/mentions" className="hover:font-bold transition-all">Mentions légales</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Liste des dernières réalisations du portfolio */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Mes dernières réalisations</h2>
          <ul className="flex flex-col gap-2">
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Fresh Food</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Restaurant Akira</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Espace Bien-être</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">SEO</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Création d'une API</Link></li>
            <li><Link to="/portfolio" className="hover:font-bold transition-all">Maquette d'un site</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;