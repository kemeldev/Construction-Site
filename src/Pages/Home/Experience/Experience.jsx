import { experienceTranslation } from '../../../constants/translations/translations';
import { useLanguageStore } from '../../../store/store';
import './Experience.css'

export function Experience () {
  const { currentLanguage} = useLanguageStore();
  const experience = currentLanguage === 'english' ? experienceTranslation.english : experienceTranslation.spanish;

  return (
    <>
      <section className="experience_mainContainer">

      <div className='experience_firstSection'>
        <div className='experience_title'>
          <div className='experience_verticalLine'/>
          <h2>{experience.title}</h2>
        </div>
      </div>

      <aside>
        <div>
          <div className='experience_title'>
            <div className='experience_horizontalLine'/>          
            <span>{experience.line1}</span>
          </div>

          <div className='experience_title'>
            <div className='experience_horizontalLine'/>          
            <span>{experience.line2}</span>
          </div>

          <div className='experience_title'>
            <div className='experience_horizontalLine'/>           
            <span>{experience.line2}</span>
          </div>
        </div>

        <div>
          <div className='experience_title'>
            <div className='experience_horizontalLine'/>          
            <span>{experience.line4}</span>
          </div>

          <div className='experience_title'>
            <div className='experience_horizontalLine'/>          
            <span>{experience.line5}</span>
          </div>

          <div className='experience_title'>
            <div className='experience_horizontalLine'/>           
            <span>{experience.line6}</span>
          </div>
        </div>


        
      </aside>
        
      </section>
    </>
  )
}

export default Experience