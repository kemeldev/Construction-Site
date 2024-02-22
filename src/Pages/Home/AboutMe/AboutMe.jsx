import { kevinImage } from '../../../assets/images'
import './AboutMe.css'

export function AboutMe () {
  return (
    <>
      <section className='about_mainContainer'>
        <div className='about_image'>
          <img src={kevinImage} 
                width={350}
                height={530}
          alt="Site owner picture" />

          <div className='about_aboutme'>
            <h2>Sobre mí</h2>
            <h4>Apasionado por la ingeniería y arquitectura, he pasado los últimos 8 años laborando en proyectos para el sector público y privado. </h4>
            <h4>Considero que todo proyecto es importante porque hay una historia detrás, por lo que me esfuerzo al máximo sin importar el tamaño </h4>
          </div>

        </div>

      </section>
    </>
  )
}

export default AboutMe