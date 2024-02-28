import { kevinImage } from '../../../assets/images'
import { aboutMe } from '../../../constants/translations/translations';
import { useLanguageStore } from '../../../store/store';
import './AboutMe.css'

export function AboutMe () {
  const { currentLanguage} = useLanguageStore();
  const about = currentLanguage === 'english' ? aboutMe.english : aboutMe.spanish;
  

  return (
    <>
      <section className='about_mainContainer'>
        <div className='about_image'>
          <img src={kevinImage} 
                width={350}
                height={530}
          alt="Site owner picture" />

          <div className='about_aboutme'>
            <h2>{about.title}</h2>
            <h4>{about.description} </h4>
            <h4>{about.closing}</h4>
          </div>

        </div>

      </section>
    </>
  )
}

export default AboutMe