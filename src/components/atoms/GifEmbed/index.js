import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import LazyImage from '../LazyImage'

import styles from './gifEmbed.module.scss'

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

export default function GifEmbed({ className, videoUrl, fallbackGifUrl, alt }) {
  const [shouldUseImage, setShouldUseImage] = useState(false)

  useEffect(() => {
    if (isSafari()) {
      setShouldUseImage(true)
    }
  })

  return (
    <div className={classNames(styles.gifEmbed, className)}>
      {shouldUseImage ? (
        <LazyImage src={fallbackGifUrl} dataSrc={fallbackGifUrl} alt={alt} />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${videoUrl}" type="video/mp4" />
        </video>`,
          }}
        />
      )}
    </div>
  )
}

GifEmbed.propTypes = {
  className: PropTypes.string,
  videoUrl: PropTypes.string.isRequired,
  fallbackGifUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
