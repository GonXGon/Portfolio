import React from 'react';
import './Skills.css';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptopCode, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'; 

const Skills = () => {
    const collectionIcon = [
        {
            title: "HTML",
            icon: <i className="fab fa-html5 skill-icon"></i>,
        },
        {
            title: "CSS",
            icon: <i className="fab fa-css3-alt skill-icon"></i>,
        },
        {
            title: "JavaScript",
            icon: <i className="fab fa-js skill-icon"></i>,
        },
        {
            title: "Python",
            icon: <i className="fab fa-python skill-icon"></i>,
        },
        {
            title: "Java",
            icon: <i className="fab fa-java skill-icon"></i>,
        },
        {
            title: "Node.js",
            icon: <i className="fab fa-node-js skill-icon"></i>,
        },
        {
            title: "React",
            icon: <i className="fab fa-react skill-icon"></i>,
        },
        {
            title: "Git",
            icon: <i className="fab fa-git-alt skill-icon"></i>,
        },
    ];

    const collectionInternships = [
        {
            name: 'Valeo',
            title: 'Support Engineer',
            date: 'January 2022 - April 2022',
            icon: <FontAwesomeIcon icon={faBuilding} className="internship-icon" />,
        },
        {
            name: 'Smart Red',
            title: 'SOFTWARE DEVELOPER',
            date: 'April 2022 - August 2022',
            icon: <FontAwesomeIcon icon={faLaptopCode} className="internship-icon" />,
        },
        {
            name: 'Maynooth University',
            title: 'DEMONSTRATOR',
            date: 'September 2022 - January 2023',
            icon: <FontAwesomeIcon icon={faUserTie} className="internship-icon" />,
        },
        {
            name: 'THE BAKEWELL',
            title: 'General Assistant',
            date: 'February 2023 - June 2023',
            icon: <FontAwesomeIcon icon={faUtensils} className="internship-icon" />,
        },
        {
            name: 'Spar',
            title: 'General Assistant',
            date: 'August 2023 - March 2024',
            icon: <FontAwesomeIcon icon={faUtensils} className="internship-icon" />,
        },
    ];

    return (
        <div className="skills-container">
            <h2>Technologies</h2>
            <motion.div className="skills-content-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {collectionIcon.map((skill, index) => (
                    <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                        <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
                            <Card style={{ width: '15rem', textAlign: 'center' }}>
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title>{skill.icon}</Card.Title>
                                    <Card.Title>{skill.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </motion.div>

            <h2>Internships</h2>
            <motion.div className="experience-content-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {collectionInternships.map((internship, index) => (
                    <Col key={index} xs={6} md={4} lg={3} className="mb-4">
                        <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {}} onHoverEnd={e => {}} >
                            <Card style={{ width: '15rem', textAlign: 'center' }}>
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Title>{internship.icon}</Card.Title>
                                    <Card.Title>{internship.name}</Card.Title>
                                    <Card.Text>{internship.title}</Card.Text>
                                    <Card.Text>{internship.date}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
