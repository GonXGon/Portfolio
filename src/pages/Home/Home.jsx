import React from 'react';
import './Home.css';
import img from '../../assets/profilepic.jpg';
import { Card } from 'react-bootstrap';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="homePage-container">
      <motion.div className="homePage-detail-container"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="profile-img-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={img} alt="profile" className="profile-img" />
        </motion.div>
        <div className='homedetails-container'>
          <h2>Graduated in Computer Science & Software Engineering with a 2.1</h2>
          <Card body className="Card" style={{ width: '100%' }}>
            Hello! I'm Shubham Banyal, a passionate and driven software developer. My journey in computer science has been enriched by immersive personal projects,
            where I thrive on crafting dynamic web and mobile applications employing cutting-edge technologies like React, TypeScript, and Java. Beyond a rigorous 6-month internship,
            my fervor for programming has blossomed through a diverse array of personal endeavors.
            These experiences not only honed my technical prowess but also deepened my passion for the boundless possibilities within the realm of software development.
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

export default Home;
