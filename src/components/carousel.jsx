import { useState } from "react"
import { arrowLeft, arrowRight } from "../assets/icons"
import './carousel.css'
import PropTypes from 'prop-types'


export function Carousel ({images}) {
  const [imageIndex, setImageIndex] = useState(0)

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
        <img src={images[imageIndex]} 
              className="carousel_image_slider"
              alt="carousel of project images" />
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
      </div>
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
};

export default Carousel