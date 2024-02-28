import './Hero.css'
import { heroOptions, ourServices } from "../../../constants/translations/translations"
import { heroImg } from '../../../assets/images'
import { useLanguageStore } from '../../../store/store'

export function Hero () {
  
  const { currentLanguage} = useLanguageStore();
  const hero = currentLanguage === 'english' ? heroOptions.english : heroOptions.spanish;
  const services = currentLanguage === 'english' ? ourServices.english : ourServices.spanish;

  const scrollToSection= (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <main className="hero_mainContainer">

      <section className="hero_presentation" style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${heroImg})`}}>

        <div className='hero_presentation_firstSection'>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_verticalLine'/>
            <h1>{hero.title}</h1>
          </div>
          <p>{hero.subtitle}</p>
          <button onClick={() => scrollToSection('contact')}>
            <a>{hero.button}</a>
          </button>

        </div>

        <div className='hero_presentation_description'>
          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>          
            <h2>{hero.listElement1}</h2>
          </div>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>          
            <h2>{hero.listElement2}</h2>
          </div>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>           
            <h2>{hero.listElement3}</h2>
          </div>
        </div>
      </section>

      <aside className="hero_services" id="services">
        <h2>{hero.services}</h2>

          {services.map((service, index) => (
            <div className="hero_services_all" key={index}>
              <div className="hero_services_each" >
                <img src={service.image} 
                    width={50}
                    height={50}
                    alt="logo of a service" />
                <small>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </small>
              </div>
            </div>
          ))}          
      </aside>
    </main>
  )
}

export default Hero