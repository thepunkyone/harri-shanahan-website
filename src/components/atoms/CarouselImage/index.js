import React from 'react'
import PropTypes from 'prop-types'

import sourceImageType from '../../../utils/sourceImageType'
import Picture from '../Picture'

import styles from './carouselImage.module.scss'

const CarouselImage = ({ image, alt }) => {
  const fallbackImageSource = `${image}?nf_resize=fit&h=800`
  const sources = [
    {
      id: 'desktop',
      srcSet: `${image}?nf_resize=fit&h=800 1x, ${image}?nf_resize=fit&h=1600 2x`,
      media: '(min-width: 481px)',
      type: sourceImageType(image),
    },
    {
      id: 'mobile',
      srcSet: `${image}?nf_resize=fit&h=600 1x, ${image}?nf_resize=fit&h=1200 2x`,
      media: '(max-width: 480px)',
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
