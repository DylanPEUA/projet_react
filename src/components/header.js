import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-5 relative">
      {/* Logo cliquable : ramène à l'accueil */}
      <NavLink to="/" className="text-2xl font-bold" style={{ textDecoration: 'none', color: 'inherit' }}>
        John Doe
      </NavLink>

      {/* Menu de navigation principal (responsive) */}
      <nav
        className={`
          flex gap-5
          md:flex-row
          flex-col
          absolute md:static top-[70px] right-0 w-[200px]
          md:w-auto bg-black md:bg-transparent
          ${isOpen ? 'flex' : 'hidden'} md:flex
        `}
      >
        {/* Lien Accueil, se ferme sur mobile au clic */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-200 ${isActive ? 'font-bold underline' : ''} hover:underline`
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        {/* Lien Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-200 ${isActive ? 'font-bold underline' : ''} hover:underline`
          }
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>
        {/* Lien Portfolio */}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-200 ${isActive ? 'font-bold underline' : ''} hover:underline`
          }
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </NavLink>
        {/* Lien Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-200 ${isActive ? 'font-bold underline' : ''} hover:underline`
          }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        {/* Lien Mentions légales */}
        <NavLink
          to="/mentions"
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-200 ${isActive ? 'font-bold underline' : ''} hover:underline`
          }
          onClick={() => setIsOpen(false)}
        >
          Mentions légales
        </NavLink>
      </nav>
      {/* Icône menu hamburger (affiché sur mobile) */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </header>
  );
}

export default Header;
