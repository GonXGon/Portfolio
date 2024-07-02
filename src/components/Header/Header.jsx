import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className='nav-header'>
            <h1>My Portfolio</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
            </nav>
        </div>
    </header>
  )
}

export default Header;
