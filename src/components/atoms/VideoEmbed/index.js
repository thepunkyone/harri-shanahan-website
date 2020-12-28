import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './videoEmbed.module.scss'

const VideoEmbed = ({ className, videoTitle, videoUrl, aspectRatio }) => {
  const defaultAspectRatio = '56.25%'

  return (
    <div
      style={{ paddingTop: aspectRatio || defaultAspectRatio }}
      className={classNames(styles.videoEmbed, className)}
    >
      <iframe
        title={videoTitle}
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

VideoEmbed.propTypes = {
  className: PropTypes.string,
  videoTitle: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string,
}

export default VideoEmbed
