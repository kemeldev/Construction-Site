import './Contact.css'
import { useState } from 'react';
import { useForm } from '@formspree/react';
import { useLanguageStore } from '../../../store/store';
import { contactAndFormTranslation } from '../../../constants/translations/translations';

export function ContactTest () {
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

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = () => {
    try {
      // Make your API call to submit form data here
      console.log('Form data:', formData);
      console.log("Hi there ");
      
      setShowButton(false);
      
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowButton(true);
      }, 5000);
      
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const [formspreeState, handleSubmit] = useForm("xgegynga", handleFormSubmit);
  if (formspreeState.succeeded) {
    return (
      <div>
        <div>{translations.submitted}</div>
        <div>Desea enviar otro mensaje</div>
        <button onClick={!formspreeState}>SI</button>
      </div>
    );
  }
  
  return (
    <>
      <section className='contact_mainContainer'>

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
                required
              />
            </div>
            
            {showButton && (
                <button type="submit" disabled={formspreeState.submitting}>
                  {translations.submit}
                </button>
              )}
          </form>
        </fieldset>
        </div>
      </section>
    </>
  )

}

export default ContactTest