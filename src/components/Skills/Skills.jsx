import { useState } from 'react';
import './Skills.css';
import { Card, Collapse } from 'react-bootstrap';

const Skills = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="skills-container">
            <button class="btn-77" onClick={() => setOpen(!open)}>Skills</button>
            <div className="skills-content-container">
                <Collapse in={open} dimension="width">
                    <div>
                        <Card className="skills-card" body style={{ width: '50rem' }}>
                            This passion for problem-solving fuels my constant quest to explore new technologies and methodologies.
                            What drives me most in the field of computer science is the opportunity it offers to continually learn and grow.
                            I thrive on pushing the boundaries of my knowledge, diving into unfamiliar territories, and emerging with a deeper understanding.
                            My motivation and self-discipline serve as the backbone of my learning journey, enabling me to adapt to new concepts and technologies with ease.
                        </Card>
                    </div>
                </Collapse>
                
                <div className={`skills-icons-container ${open ? 'open' : ''}`}>
                    <div className="skill">
                        <i className="fab fa-html5 skill-icon"></i>
                        <span>HTML</span>
                    </div>

                    <div className="skill">
                        <i className="fab fa-css3-alt skill-icon"></i>
                        <span>CSS</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-js skill-icon"></i>
                        <span>JavaScript</span>
                    </div>

                    <div className="skill">
                        <i className="fab fa-python skill-icon"></i>
                        <span>Python</span>
                    </div>

                    <div className="skill">
                        <i className="fab fa-java skill-icon"></i>
                        <span>Java</span>
                    </div>

                    <div className="skill">
                        <i className="fab fa-node-js skill-icon"></i>
                        <span>Node.js</span>
                    </div>

                    <div className="skill">
                        <i className="fab fa-react skill-icon"></i>
                        <span>React</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-git-alt skill-icon"></i>
                        <span>Git</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
