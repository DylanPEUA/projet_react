import React from 'react';
import './header'; // Pour le style

function Header() {
  return (
    <header className="header">
      <div className="logo">John Doe</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <a href="/mentions-legales">Mentions légales</a>
      </nav>
    </header>
  );
}

export default Header;