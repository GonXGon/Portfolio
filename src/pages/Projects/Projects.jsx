import React, { useState, useEffect } from 'react';
import './Projects.css';
import { Button, Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMusic, faCloud, faMobileAlt,faTasks } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const collection = [
        {
            title: "Fitness Website",
            description: "The website, my Final Year Project, was developed using React JS and APIs to provide data on gym workouts and meal recipes.",
            icon: <FontAwesomeIcon icon={faLaptopCode} className="project-icon" />,
            githubLink: 'https://github.com/GonXGon/FinalYearProject.git',
        },
        {
            title: "Spotify Web Application",
            description: "This project, developed with React JS and the Spotify API, retrieves and displays song data. It also allows users with a premium Spotify account to create playlists.",
            icon: <FontAwesomeIcon icon={faMusic} className="project-icon" />,
            githubLink: 'https://github.com/GonXGon/Jamming.git',
        },
        {
            title: "Weather WebApp",
            description: "A web application that provides weather forecasts using external APIs.",
            icon: <FontAwesomeIcon icon={faCloud} className="project-icon" />,
            githubLink: 'https://github.com/GonXGon/Weather_APP.git',
        },
        {
            title: "Android App",
            description: "This mobile app, developed in Android Studio using Java and XML, enables users to record incomes and expenses, displaying the total net income for the logged-in user.",
            icon: <FontAwesomeIcon icon={faMobileAlt} className="project-icon" />,
            githubLink: 'https://github.com/GonXGon/FinalYearProject.git',
        },
        {
            title: "Task Done",
            description: "This is a React based Web application which allows user to Add, Update, Delete tasks the user have added.",
            icon: <FontAwesomeIcon icon={faTasks} className="project-icon" />,
            githubLink: 'https://github.com/GonXGon/React_ToDo.git',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % collection.length);
    };

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + collection.length) % collection.length);
    };

    const currentProjects = isMobile
        ? [collection[currentIndex]]
        : collection.slice(currentIndex, currentIndex + 3).concat(
              collection.slice(0, Math.max(0, (currentIndex + 3) - collection.length))
          );

    return (
        <div className="projects-container">
            <div className="projects">
                <h2>My Projects</h2>
                <motion.div
                    className="carousel"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <button onClick={showPrev} className="arrow-button left">
                        {"<"}
                    </button>
                    <motion.div
                        className="project-detail-containers"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {currentProjects.map((project, index) => (
                            <Col key={index} className="proj-details">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    onHoverStart={(e) => {}}
                                    onHoverEnd={(e) => {}}
                                    className="card-container"
                                >
                                    <Card style={{ width: '18rem' }}>
                                        <div className="icon-container">{project.icon}</div>
                                        <div className="cardbody-container">
                                            <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                                <Card.Text>{project.description}</Card.Text>
                                            </Card.Body>
                                        </div>
                                        <div className="button-container">
                                            <Button href={project.githubLink} variant="dark">
                                                Git Hub Link
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </motion.div>
                    <button onClick={showNext} className="arrow-button right">
                        {">"}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
