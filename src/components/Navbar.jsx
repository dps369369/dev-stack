// Import list
import { useState } from 'react'
import './Navbar.css'
import logoText from '../assets/logo-text.png'
import hamburgerIcon from '../assets/hamburger.png'

// Function of NAvbar
function Navbar() {

  //  is mobile navigation menu open ?
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Hamburger button */}
      <button
        className="hamburger-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={hamburgerIcon}
          alt="Open menu"
        />
      </button>

      {/* Logo */}
      <a href="#home" className="navbar-brand">
        <img
          src={logoText}
          alt="DevStack"
          className="brand-logo"
        />
      </a>

   
      <div className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}>
        <a href="#root" className="active">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-actions">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>

    </nav>
  )
}

export default Navbar