// src/components/Header/Header.js
import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ title }) => {
  const navItems = useSelector((state) => state.nav.items);
  
  return (
    <header>
      <div className='nav-header'>
        <h1>{title}</h1>
        <nav>
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.link.substring(1)} 
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} 
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
