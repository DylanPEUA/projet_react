import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-5 relative">
      {/* Logo */}
      <div className="text-2xl font-bold">John Doe</div>

      {/* Navigation */}
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
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-2 py-1 ${isActive ? 'bg-gray-700 rounded' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-2 py-1 ${isActive ? 'bg-gray-700 rounded' : ''}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `px-2 py-1 ${isActive ? 'bg-gray-700 rounded' : ''}`
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-2 py-1 ${isActive ? 'bg-gray-700 rounded' : ''}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/mentions"
          className={({ isActive }) =>
            `px-2 py-1 ${isActive ? 'bg-gray-700 rounded' : ''}`
          }
        >
          Mentions légales
        </NavLink>
      </nav>

      {/* Hamburger menu */}
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
