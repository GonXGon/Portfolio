import React, {useState} from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ title }) => {
  const navItems = useSelector((state) => state.nav.items);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }
  
  return (
    <header>
      <div className={`nav-header ${isNavOpen ? 'open' : ''}`}>
        <h1>{title}</h1>
        <nav>
          {navItems.map((item) => (
            <motion.div whileHover={{ scale: 1.1 }} 
            onHoverStart={e => {}} 
            onHoverEnd={e => {}} 
            >
              <Link key={item.id} to={item.link}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Header;
