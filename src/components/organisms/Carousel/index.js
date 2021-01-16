import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from 'pure-react-carousel'
import {
  ArrowBackIosRounded as ArrowBack,
  ArrowForwardIosRounded as ArrowForward,
} from '@material-ui/icons'

import LazyImage from '../../atoms/LazyImage'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './carousel.module.scss'

const Carousel = ({
  className,
  slides,
  naturalSlideWidth,
  naturalSlideHeight,
}) => {
  const [selectedSlide, setSelectedSlide] = useState(0)
  return (
    <CarouselProvider
      className={className}
      naturalSlideWidth={naturalSlideWidth}
      naturalSlideHeight={naturalSlideHeight}
      totalSlides={slides.length}
      infinite
    >
      <div className={styles.sliderWrapper}>
        <Slider
          className={styles.slider}
          classNameAnimation={styles.sliderAnimation}
        >
          {slides.map((slide, i) => {
            return (
              <Slide index={i} key={slide.thumbnailImage}>
                {slide.component}
              </Slide>
            )
          })}
        </Slider>
        <ButtonBack className={styles.buttonBack}>
          <ArrowBack className={styles.arrow} />
        </ButtonBack>
        <ButtonNext className={styles.buttonNext}>
          <ArrowForward className={styles.arrow} />
        </ButtonNext>
      </div>
      <div className={styles.thumbnailWrapper}>
        <DotGroup
          className={styles.thumbnails}
          style={{ transform: `translateX(-${selectedSlide * 56}px)` }}
          renderDots={({ currentSlide }) => {
            setSelectedSlide(currentSlide)
            const dots = slides.map((slide, i) => {
              return (
                <Dot
                  className={classNames(styles.thumbnail, {
                    [styles.thumbnailSelected]: currentSlide === i,
                  })}
                  key={slide.thumbnailImage}
                  slide={i}
                >
                  <LazyImage
                    className={styles.thumbnailImage}
                    dataSrc={slide.thumbnailImage}
                    src={slide.thumbnailImage}
                    alt={`Slide ${i}`}
                  />
                </Dot>
              )
            })

            return dots
          }}
        />
        <span className={styles.gradient} />
      </div>
    </CarouselProvider>
  )
}

Carousel.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.array.isRequired,
  naturalSlideWidth: PropTypes.number.isRequired,
  naturalSlideHeight: PropTypes.number.isRequired,
}

export default Carousel
