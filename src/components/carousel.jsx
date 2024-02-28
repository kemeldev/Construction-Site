import { useState } from "react"
import { arrowLeft, arrowRight, bluedot, whitedot } from "../assets/icons"
import './carousel.css'
import PropTypes from 'prop-types'
import { useLanguageStore } from "../store/store"
import { projectsTranslations } from "../constants/translations/translations"


export function Carousel ({images}) {
  const [imageIndex, setImageIndex] = useState(3)
  const { currentLanguage} = useLanguageStore();
  const projects = currentLanguage === 'english' ? projectsTranslations.english : projectsTranslations.spanish;

  const showNextImage = () => {
    setImageIndex(index => {
      if(index === images.length -1 )return 0
      return index + 1
    })
  }

  const showPreviousImage = () => {
    setImageIndex(index => {
      if(index ===0)return images.length - 1
      return index - 1
    })
  }

  return (
    <>
      <div className="carousel_mainContainer">

        <div className="carousel_mainSlider">
          {images.map((image,index) => (
            <img  
              key={index}
              src={image} 
              className="carousel_image_slider"
              style={{translate: `${-100 * imageIndex}%`}}
              alt="carousel of project images" 
            />
          ))}
          <div className="carousel_textContent">
            <h2>{projects[imageIndex].title}</h2>
            <h4>{projects[imageIndex].description}</h4>
            <h4>{projects[imageIndex].location}</h4>
          </div>
        </div>

        {/* <img src={images[imageIndex]} 
              className="carousel_image_slider"
              alt="carousel of project images" /> */}
        <button 
          onClick={showPreviousImage}
          className="carousel_btn" 
          style={{left:0}}>
          <img src={arrowLeft} 
              alt="left arrow to move slider" />
              
        </button>
        <button
          onClick={showNextImage}
          className="carousel_btn" 
          style={{right:0}}>
          <img src={arrowRight} 
              alt="right arrow to move slider" />
        </button>

        <div className="carousel_bottomBtns">
          {images.map((_, index) =>(
              <button 
                className="carousel_bottomsBtns_dot"
                key={index}
                onClick={() => setImageIndex(index)}>
              {index === imageIndex ? <img src={bluedot} 
               /> :  <img src={whitedot} 
               /> }
              </button>
          ))}
        </div>


      </div>
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default Carousel