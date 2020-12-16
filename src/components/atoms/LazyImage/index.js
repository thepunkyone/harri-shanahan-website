import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './styles.scss'

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

if (canUseDOM) {
  require('lazysizes')
}

const LazyImage = ({
  src,
  alt,
  dataSizes,
  dataSrc,
  dataSrcSet,
  className,
  ...props
}) => {
  const imageClasses = classnames('lazyload', className).trim()

  return (
    <img
      src={src}
      alt={alt}
      data-src={dataSrc}
      data-sizes={dataSizes}
      data-srcset={dataSrcSet || undefined}
      className={imageClasses}
      {...props}
    />
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSizes: PropTypes.string,
  dataSrc: PropTypes.string.isRequired,
  dataSrcSet: PropTypes.string,
  className: PropTypes.string,
}

LazyImage.defaultProps = {
  dataSizes: 'auto',
}

export default LazyImage
