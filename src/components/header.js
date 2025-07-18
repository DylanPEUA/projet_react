import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../header.css'; // Style personnalisé

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">John Doe</div>

      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        <NavLink to="/mentions" className={({ isActive }) => isActive ? 'active' : ''}>Mentions légales</NavLink>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </header>
  );
}

export default Header;