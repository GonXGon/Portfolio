import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ title }) => {
  const navItems = useSelector((state) => state.nav.items);
  
  return (
    <header>
      <div className='nav-header'>
        <h1>{title}</h1>
        <nav>
          {navItems.map((item) => (
            <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}} >
              <Link key={item.id} to={item.link}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
