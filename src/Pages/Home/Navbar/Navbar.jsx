import './Navbar.css'
import {Logo, language, hamburgerMenu} from '../../../assets/icons'
import { useEffect, useRef, useState } from 'react';
import { useLanguageStore } from '../../../store/store'
import { navbarOptions } from '../../../constants/translations/translations';

export function Navbar () {
  const [menuOpen , setMenuOpen] = useState(false)
  let menuRef = useRef(null);
  const {currentLanguage, setLanguage} = useLanguageStore()
  const menuOptions = currentLanguage === 'english' ? navbarOptions.english : navbarOptions.spanish

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'english' ? 'spanish' : 'english';
    setLanguage(newLanguage);
  };

  useEffect(()=> {
    let handler = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    } 
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  },[])

  const scrollToSection= (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }
  return (
    <>
      <nav className="navbar_mainContainer">
        <div className='navbar_logo'>
          <div>
            <img 
              src={Logo} 
              alt="Brand Logo"
              width={50}
              height={50}
            />
          </div>
          <h2>{menuOptions.title}</h2>
        </div>
        <div className='navbar_menuOptions'>
          <h4><a onClick={() => scrollToSection('about')}>{menuOptions.about}</a></h4>
          <h4><a onClick={() => scrollToSection('projects')}>{menuOptions.projects}</a></h4>
          <h4><a onClick={() => scrollToSection('contact')}>{menuOptions.contact}</a></h4>

          <div className='svgLanguage' onClick={handleLanguageChange}>
          <img src={language} alt="language icon" />
          <span>{menuOptions.language}</span>
          </div>
        </div>

        {!menuOpen && (
        <div className='svgMenu' onClick={() => setMenuOpen(true)}>
          <img src={hamburgerMenu} alt="language icon" />
        </div> )}

        {menuOpen && (
        <div className='navbar_modal' ref={menuRef}>
          <h4><a onClick={() => { scrollToSection('home')}}>Home</a></h4>
          <h4><a onClick={() => { scrollToSection('services') }}>Servicios</a></h4>
          <h4><a onClick={() => { scrollToSection('about');  }}>Sobre mí</a></h4>
          <h4><a onClick={() => { scrollToSection('projects');  }}>Proyectos</a></h4>
          <h4><a onClick={() => { scrollToSection('contact');  }}>Contacto</a></h4>
          <div className='svgLanguage' onClick={handleLanguageChange}>
          <img src={language} alt="language icon" />
          <span>{menuOptions.language}</span>
          </div>
        </div>
      )}

      </nav>
    </>
  )
}

export default Navbar