import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerItems = useSelector((state) => state.footer.items);
  return (
    <footer>
      <Container fluid>
        <Row className="footer-row bg-black text-white py-4">
          <Col className="">
            <h2>Shubham Banyal</h2>
          </Col>
          <Col>
            <Nav className="flex-column">
              {footerItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={e => {}}
                  onHoverEnd={e => {}}
                  className="motion-link-container"
                >
                  <Link to={item.link} className="nav-link text-white">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </Nav>
          </Col>
          <Col>
            <h4>Contact Me</h4>
            <p>shubhambanyal64@gmail.com</p>
            <p>Phone: +353 899730143</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
