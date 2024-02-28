import { Logo } from '../../../assets/icons'
import { navbarOptions } from '../../../constants/translations/translations';
import { useLanguageStore } from '../../../store/store';
import './Footer.css'

export function Footer () {
  const { currentLanguage} = useLanguageStore();
  const footerTitle = currentLanguage === 'english' ? navbarOptions.english : navbarOptions.spanish;
  return (
    <>
    <footer className="footer_mainContainer">
        <div className='footer_logo'>
          <div>
            <img 
              src={Logo} 
              alt="Brand Logo"
              width={50}
              height={50}
            />
          </div>
          <h2>{footerTitle.title}</h2>
        </div>
        
      </footer>
      </>
  )
}

export default Footer