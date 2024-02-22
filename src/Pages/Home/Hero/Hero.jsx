import './Hero.css'
import { ourServices } from "../../../constants/translations/translations"
import { heroImg } from '../../../assets/images'

export function Hero () {
  
  return (
    <main className="hero_mainContainer">

      <section className="hero_presentation" style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${heroImg})`, width: '70%'}}>

        <div className='hero_presentation_firstSection'>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_verticalLine'/>
            <h1>Servicios de arquitectura e ingenieria</h1>
          </div>
          <p>Transformamos ideas en realidad</p>
          <button>Contacto</button>

        </div>

        <div className='hero_presentation_description'>
          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>          
            <h2>Atencion personalizada</h2>
          </div>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>          
            <h2>Orientados en servicio al cliente</h2>
          </div>

          <div className='hero_presentation_title'>
            <div className='hero_presentation_horizontalLine'/>           
            <h2>Nos adaptamos a sus necesidades</h2>
          </div>
        </div>
      </section>

      <aside className="hero_services">
        <h2>Nuestros Servicios</h2>

          {ourServices.spanish.map((service, index) => (
            <div className="hero_services_all" key={index}>
              <div className="hero_services_each" >
                <img src={service.image} 
                    width={50}
                    height={50}
                    alt="logo of a Crane" />
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