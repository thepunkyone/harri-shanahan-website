import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './carousel.module.scss'

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
    >
      <Slider classNameAnimation={styles.sliderAnimation}>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <DotGroup
        renderDots={({ totalSlides }) => {
          const dots = []
          for (let i = 0; i < totalSlides; i++) {
            dots.push(
              <Dot key={i} slide={i}>
                haha great {i}
              </Dot>
            )
          }

          return dots
        }}
      />
    </CarouselProvider>
  )
}

export default Carousel
