import React from 'react';
import './Education.css';
import { Card, Col, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Education = () => {
    const collectionEducation = [
        {
            name: 'Maynooth University',
            programs: [
                { title: 'BACHELOR OF COMPUTER SCIENCE & SOFTWARE ENGINEERING' }
            ],
            icon: <FontAwesomeIcon icon={faUniversity} className="education-icon" />,
        },
        {
            name: 'Codecademy',
            programs: [
                { title: 'Web Development Foundations' },
                { title: 'Building Interactive Websites' },
                { title: 'Front-End Development' },
                { title: 'Back-End Development' },
                { title: 'Full-Stack Development' }
            ],
            icon: <FontAwesomeIcon icon={faLaptopCode} className="education-icon" />,
        },
        {
            name: 'Holy Family Community School',
            programs: [
                { title: 'Leaving Certificate' }
            ],
            icon: <FontAwesomeIcon icon={faSchool} className="education-icon" />,
        }
    ];

    return (
        <div className="education-container">
            <h2>Education</h2>
            <motion.div className="education-content-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {collectionEducation.map((institution, index) => (
                    <Col key={index}>
                        <motion.div whileHover={{ scale: 1.05 }} onHoverStart={e => {}} onHoverEnd={e => {}} className='education-card-container'>
                            <Card style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{institution.icon} {institution.name}</Card.Title>
                                    {institution.name === 'Codecademy' ? (
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>View Programs</Accordion.Header>
                                                <Accordion.Body>
                                                    {institution.programs.map((program, i) => (
                                                        <Card.Text key={i}>{program.title}</Card.Text>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    ) : (
                                        institution.programs.map((program, i) => (
                                            <Card.Text key={i}>{program.title}</Card.Text>
                                        ))
                                    )}
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
