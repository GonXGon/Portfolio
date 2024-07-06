import { useState } from 'react';
import './Projects.css';
import { Card, Collapse, Row, Col } from 'react-bootstrap'; 
import androidImg from "../../assets/Androidimg.png";
import fyp from "../../assets/FYP.png";
import jamming from "../../assets/JAMMING.png";

const Projects = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="projects-container">
            <button className="btn-77" onClick={() => setOpen(!open)}>Projects</button>

            <div className="projects">
                <Collapse in={open} dimension="width">
                    <div>
                        <Card className="project-card" body style={{ width: '50rem' }}> 
                            In my portfolio, you'll find a showcase of my projects and endeavors, each one a testament to my dedication to the craft. Whether it's building web applications, 
                            crafting algorithms, or experimenting with emerging technologies, I approach each challenge with enthusiasm and a hunger for knowledge.
                            I'm excited to continue my journey in the world of computer science, tackling new challenges, and contributing to the ever-expanding landscape of technology.
                        </Card>
                    </div>
                </Collapse>
                
                <div className={`project-detail-containers ${open ? 'open' : ''}`}>
                    <Row>
                        <Col className="proj-details">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={fyp}/>
                                <Card.Body>
                                    <Card.Title>Fitness Website</Card.Title>
                                    <Card.Text>The website, my Final Year Project, was developed using React JS and APIs to provide data on gym workouts and meal recipes.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="https://github.com/GonXGon/FinalYearProject.git">Git Hub Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="proj-details">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={androidImg}/>
                                <Card.Body>
                                    <Card.Title>Mobile Application</Card.Title>
                                    <Card.Text>This mobile app, developed in Android Studio using Java and XML, enables users to record incomes and expenses, 
                                        displaying the total net income for the logged-in user.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="https://github.com/GonXGon/Budgeting.git">Git Hub Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="proj-details">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={jamming}/>
                                <Card.Body>
                                    <Card.Title>Spotify Web Application</Card.Title>
                                    <Card.Text>This project, developed with React JS and the Spotify API, retrieves and displays song data. It also allows users with a premium Spotify account to create playlists.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="https://github.com/GonXGon/Jamming.git">Git Hub Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Projects;
