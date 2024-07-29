import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../styles/NavbarComponent.css'; 

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <NavLink className="navbar-brand" to="/">
        <img src={logo} height={40} width={40} alt="Springdale Public School" />
        Springdale Public School
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/academics">Academics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admissions">Admissions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/faculty">Faculty</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/students">Students</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
