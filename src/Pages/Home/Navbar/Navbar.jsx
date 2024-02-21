import './Navbar.css'
import {Logo} from '../../../assets/icons'

export function Navbar () {
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
          <h2>Ing Kevin Bolaños</h2>
        </div>
        <div className='navbar_menuOptions'>
          <h4>Home</h4>
          <h4>Sobre mí</h4>
          <h4>Proyectos</h4>
          <h4>Servicios</h4>
          <h4>Contacto</h4>
        </div>
      </nav>
    </>
  )
}

export default Navbar