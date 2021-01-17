import React from 'react'
import PropTypes from 'prop-types'

import sourceImageType from '../../../utils/sourceImageType'
import Picture from '../Picture'

import styles from './carouselImage.module.scss'

const CarouselImage = ({ image, alt }) => {
  const fallbackImageSource = `${image}?nf_resize=fit&h=1232`
  const sources = [
    {
      id: 'desktop',
      srcSet: `${image}?nf_resize=fit&h=1232`,
      media: '(min-width: 769px)',
      type: sourceImageType(image),
    },
    {
      id: 'mobile',
      srcSet: `${image}?nf_resize=fit&h=718`,
      media: '(max-width: 768px)',
      type: sourceImageType(image),
    },
  ]

  return (
    <Picture
      className={styles.carouselImage}
      src={fallbackImageSource}
      sources={sources}
      alt={alt}
      lazyload
    />
  )
}

CarouselImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default CarouselImage
