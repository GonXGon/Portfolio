import React, { useState } from 'react';
import './Contact.css';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const templateParam = {
      _name: name,
      _message: message,
    };

    emailjs.send(
      'service_g0qzhaf',
      'contact_form',
      templateParam,
      'ScP6J75GbnhvM10L4',
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.log('Failed to send message. Error:', err);
      alert('Failed to send message.');
    });

    setName('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="icon-container">
        <FontAwesomeIcon icon={faEnvelope} className="message-icon" />
      </div>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="name-container">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="Enter Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="message-container" controlId="TextArea">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows="3" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button variant="dark" className="submit-button" type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;
