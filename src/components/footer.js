import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Colonne 1 : Infos & Réseaux */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">John Doe</h2>
          <p>Ave du Prince Hinoi<br />98714 Papeete, French Polynesia</p>
          <p>Tél : +689 87 00 00 00</p>
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

        {/* Colonne 2 : Navigation */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Liens utiles</h2>
          <ul className="flex flex-col gap-2">
            <Link to="/" className="hover:font-bold transition-all">Accueil</Link>
            <Link to="/services" className="hover:font-bold transition-all">Services</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">Portfolio</Link>
            <Link to="/contact" className="hover:font-bold transition-all">Contact</Link>
            <Link to="/mentions" className="hover:font-bold transition-all">Mentions légales</Link>
          </ul>
        </div>

        {/* Colonne 3 : Réalisations */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Mes dernières réalisations</h2>
          <ul className="flex flex-col gap-2">
            <Link to="/portfolio" className="hover:font-bold transition-all">Fresh Food</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">Restaurant Akira</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">Espace Bien-être</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">SEO</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">Création d'une API</Link>
            <Link to="/portfolio" className="hover:font-bold transition-all">Maquette d'un site</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;