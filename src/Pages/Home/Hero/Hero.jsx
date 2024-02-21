import './Hero.css'
import { ourServices } from "../../../constants/translations/translations"

export function Hero () {

  
  return (
    <main className="hero_mainContainer">

      <section className="hero_presentation">
        <div>
          <div>Esta es la linea amarilla</div>
          <h1>Servicios de arquitectura e ingenieria</h1>
        </div>
      </section>

      <section className="hero_services">
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

        {/* <div className="hero_services_all">
          <div className="hero_services_each">
            <img src={index.image} 
                 width={50}
                 height={50}
                alt="logo of a Crane" />
            <small>
              <h3>{index.title}</h3>
              <p>{index.description}</p>
            </small>
          </div>
        </div> */}


      </section>


    </main>
  )
}

export default Hero