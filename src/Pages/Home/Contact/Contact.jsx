import './Contact.css'
import {phone, location, email} from '../../../assets/icons'
import { useState } from 'react';

export function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const validateName = () => {
    if (!/^[a-zA-Z]{3,}$/.test(formData.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name must contain at least 3 letters'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: ''
      }));
    }
  };

  const validatePhone = () => {
    if (formData.phone.replace(/\D/g, '').length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone number must contain at least 8 numbers'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: ''
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // TODO: send data to backend or handle it somehow
  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      console.log('Form has errors, cannot submit.');
      return;
    }
    
    console.log(formData);
  }
  return (
    <>
      <section className='contact_mainContainer'>

        <div className='contact_information'>
          <h3>Información de contacto</h3>
          <h5>Cuentanos algo</h5>
          <div className='contact_information_data'>
            <img src={phone} alt="phone icon" />
            <p>+(506) 88850715</p>
          </div>

          <div className='contact_information_data'>
            <img src={email} alt="email icon" />
            <p>kevin.bolanos1193@gmail.com</p>
          </div>

          <div className='contact_information_data'>
            <img src={location} alt="location icon" />
            <p>San José, Costa Rica</p>
          </div>
        </div>

        <div className='contact_form'>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={validateName}
                required
              />
              {errors.name && <span className="formError">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={validatePhone}
                required
              />
              {errors.phone && <span className="formError">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={validateEmail}
                required
              />
              {errors.email && <span className="formError">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                // placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </fieldset>
        </div>
      </section>
    </>
  )

}

export default Contact