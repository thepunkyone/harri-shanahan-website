import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ sources, ...props }) => {
  return (
    <video autoPlay loop muted playsInline {...props}>
      {sources.map((source) => {
        return <source key={source.src} src={source.src} type={source.type} />
      })}
    </video>
  )
}

Video.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Video
