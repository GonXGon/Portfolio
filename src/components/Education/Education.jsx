import { useState } from 'react';
import './Education.css';
import { Card, Collapse, Row, Col } from 'react-bootstrap';
import maynooth from "../../assets/maynooth.png"
import hfcs from "../../assets/hfcs.jpg";
import valeo from "../../assets/valeo.png";

const Education = () => {
    const [open, setOpen] = useState(false);
    const [expopen, setExpopen] = useState(false);

    return (
        <div className="education-container">
            <button className="btn-77" onClick={() => setOpen(!open)}>Education</button>
            <div className="education-card-container">
                <Collapse in={open} >
                    <div className="education-card">
                        <Row>
                            <Col>
                                <Card className="card">
                                    <Card.Img variant="top" src={maynooth} />
                                    <Card.Body className="card-body">
                                        <Card.Title>Maynooth University</Card.Title>
                                        <Card.Text>
                                            BACHELOR OF COMPUTER SCIENCE & SOFTWARE ENGINEERING
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="card">
                                    <Card.Img variant="top" src={hfcs} />
                                    <Card.Body className="card-body">
                                        <Card.Title>Holy Family Community School</Card.Title>
                                        <Card.Text>
                                            September 2014 - May 2019
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
            <button className="btn-77" onClick={() => setExpopen(!expopen)}>Experience</button>
            <div className="expierence-card-container">
                <Collapse in={expopen} >
                    <div className="experience-card">
                        <Row>
                            <Col>
                                <Card className="card">
                                    <Card.Img variant="top" src={maynooth} />
                                    <Card.Body className="card-body">
                                        <Card.Title>Maynooth University</Card.Title>
                                        <Card.Text>
                                            DEMONSTRATOR
                                            September 2022 - January 2023
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="card">
                                    <Card.Img variant="top" src={valeo} />
                                    <Card.Body className="card-body">
                                        <Card.Title>Valeo</Card.Title>
                                        <Card.Text>
                                            Support Engineer
                                            January 2022 - April 2022
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}

export default Education;
