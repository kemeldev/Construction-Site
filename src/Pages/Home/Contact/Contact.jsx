import './Contact.css'
import {phone, location, email} from '../../../assets/icons'
import { useEffect, useState } from 'react';
import { useLanguageStore } from '../../../store/store';
import { useForm } from '@formspree/react';
import { contactAndFormTranslation } from '../../../constants/translations/translations';

export function Contact () {
  const { currentLanguage} = useLanguageStore();
  const translations = 
    currentLanguage === 'english'
    ? contactAndFormTranslation.english
    : contactAndFormTranslation.spanish;

  
  const [showButton, setShowButton] = useState(true);

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

  const [formSpreeState, handleSubmit] = useForm("xgegynga");
  useEffect(() => {
    if (formSpreeState.succeeded) {
      setShowButton(false);
    }
  }, [formSpreeState]);

  const validateName = () => {
    if (!/^[a-zA-Z]{3}.*$/.test(formData.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: translations.nameError
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
        phone: translations.phoneError
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
        email: translations.emailError
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const hasErrors = Object.values(errors).some((error) => error !== '');

  //   if (hasErrors) {
  //     console.log('Form has errors, cannot submit.');
  //     return;
  //   }
    
  //   console.log(formData);
  // }
  return (
    <>
      <section className='contact_mainContainer'>

        <div className='contact_information'>
          <h3>{translations.title}</h3>
          <h5>{translations.help}</h5>
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
              <label htmlFor="name">{translations.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={translations.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                onBlur={validateName}
                required
              />
              {errors.name && <span className="formError">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">{translations.phone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={translations.phonePlaceholder}
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
                placeholder={translations.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                onBlur={validateEmail}
                required
              />
              {errors.email && <span className="formError">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">{translations.message}</label>
              <textarea
                id="message"
                name="message"
                // placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {showButton 
              ? 
                <button type="submit" disabled={formSpreeState.submitting}>
                  {translations.submit}
                </button>
              : <h4 style={{color: "#0838B4"}}>{translations.submitted}</h4>
              }
          </form>
        </fieldset>
        </div>
      </section>
    </>
  )

}

export default Contact