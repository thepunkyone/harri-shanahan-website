import React from 'react'
import PropTypes from 'prop-types'

import LazyImage from '../LazyImage'

const Picture = ({ sources, src, alt, lazyload, ...props }) => {
  let Image = null

  if (lazyload) {
    Image = <LazyImage dataSrc={src} alt={alt} />
  } else {
    Image = <img src={src} alt={alt} />
  }

  return (
    <picture {...props}>
      {sources.map((source) => (
        <source key={source.id} {...source} />
      ))}
      {Image}
    </picture>
  )
}

Picture.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object).isRequired,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  lazyload: PropTypes.bool,
}

export default Picture
