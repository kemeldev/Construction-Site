import './Projects.css'
import { polideportivo,cimohu,condominio984,poderJudicial, liceoRural, cocacola } from "../../../assets/images"
import Carousel from "../../../components/carousel"


const IMAGES = [polideportivo,cimohu,condominio984,poderJudicial, liceoRural, cocacola]

export function Projects () {
  return (
    <>
    <div className="projects_mainContainer">
      <Carousel
        images={IMAGES}
      >
        
      </Carousel>
    </div>
    </>
  )
}

export default Projects