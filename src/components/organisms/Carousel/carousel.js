import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  CarouselContext,
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

import canUseDOM from '../../../utils/canUseDom'

import LazyImage from '../../atoms/LazyImage'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './carousel.module.scss'

const Carousel = ({ slides }) => {
  const carouselContext = useContext(CarouselContext)

  const [translateXValue, setTranslateXValue] = useState(0)

  const scrollSelectedThumbnailIntoView = () => {
    if (canUseDOM) {
      const thumbnailContainerElement = window.document.getElementById(
        'thumbnail-container'
      )
      const thumbnailContainerWidth = thumbnailContainerElement.offsetWidth
      const thumbnails = window.document.getElementById('thumbnails')
      const thumbnailsWidth = thumbnails.offsetWidth

      if (thumbnailsWidth > thumbnailContainerWidth) {
        setTranslateXValue(carouselContext.state.currentSlide * 56)
      }
    }
  }

  const onSlideChange = () => {
    scrollSelectedThumbnailIntoView()
  }

  useEffect(() => {
    onSlideChange()
    carouselContext.subscribe(onSlideChange)
    return () => carouselContext.unsubscribe(onSlideChange)
  }, [carouselContext])

  return (
    <>
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
      <div id="thumbnail-container" className={styles.thumbnailWrapper}>
        <DotGroup
          id="thumbnails"
          className={styles.thumbnails}
          style={{ transform: `translateX(-${translateXValue}px)` }}
          renderDots={({ currentSlide }) => {
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
    </>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
}

export default Carousel
