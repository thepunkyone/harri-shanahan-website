import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import LazyImage from '../LazyImage'

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

export default function Gif({ videoUrl, fallbackGifUrl, alt }) {
  const [shouldUseImage, setShouldUseImage] = useState(false)

  useEffect(() => {
    if (isSafari()) {
      setShouldUseImage(true)
    }
  })

  return shouldUseImage ? (
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
  )
}

Gif.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  fallbackGifUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
