import React from 'react'
import {Container, Row, Col, Stack, Nav, NavLink} from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-black text-white">
          <Col className="mx-5">
            <Stack>
              <h2>Shubham Banyal</h2>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <NavLink href="#" className="text-white">Home</NavLink>
              <NavLink href="#" className="text-white">Skills</NavLink>
              <NavLink href="#" className="text-white">Projects</NavLink>
            </Nav>
          </Col>
          <Col>
            <h4>Contact Me</h4>
            <p>shubhambanyal@gmail.com</p>
            <p>Phone: +353 899730143</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer