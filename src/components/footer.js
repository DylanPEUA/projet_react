import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-red-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Colonne 1 : Infos & Réseaux */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">John Doe</h2>
          <p>123 Rue du Dev<br />98700 Papeete, Tahiti</p>
          <p>Tél : +689 87 00 00 00</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white hover:text-gray-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white hover:text-gray-400 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-white hover:text-gray-400 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul className="flex flex-col gap-2">
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mentions">Mentions légales</Link>
          </ul>
        </div>

        {/* Colonne 3 : Réalisations */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Dernières réalisations</h2>
          <ul className="flex flex-col gap-2">
            <Link to="/portfolio">Projet Alpha</Link>
            <Link to="/portfolio">Projet Beta</Link>
            <Link to="/portfolio">Projet Gamma</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;