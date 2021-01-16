import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider } from 'pure-react-carousel'

import Carousel from './carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'

const CarouselState = ({
  className,
  slides,
  naturalSlideWidth,
  naturalSlideHeight,
}) => {
  return (
    <CarouselProvider
      className={className}
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={naturalSlideHeight}
      totalSlides={slides.length}
      infinite
    >
      <Carousel slides={slides} />
    </CarouselProvider>
  )
}

CarouselState.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.array.isRequired,
  naturalSlideWidth: PropTypes.number.isRequired,
  naturalSlideHeight: PropTypes.number.isRequired,
}

export default CarouselState
