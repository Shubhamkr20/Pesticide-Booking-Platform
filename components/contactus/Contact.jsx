import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      await axios.post('http://localhost:3001/submitForm', formData);

      
      setMessageSent(true);
      setError('');

      
      setSuccessMessage('Message sent successfully! Our team will get back to you within 12 hours.');

      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      
      setTimeout(() => {
        setMessageSent(false);
        setSuccessMessage('');
      }, 15000);
    } catch (error) {
      console.error('Error submitting form:', error);

      
      setError('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div id="ContactUsPage">
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Get in touch with us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
          
          {/* Display temporary success message */}
          {messageSent && (
            <p className="temporary-success-message">{successMessage}</p>
          )}
        </form>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
