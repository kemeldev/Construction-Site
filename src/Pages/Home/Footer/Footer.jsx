import { Logo } from '../../../assets/icons'
import './Footer.css'

export function Footer () {
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
          <h2>Ing Kevin Bolaños</h2>
        </div>
        
      </footer>
      </>
  )
}

export default Footer