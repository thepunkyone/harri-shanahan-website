import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { PlayCircleFilledRounded } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'

import Link from '../../atoms/Link'
import Gif from '../../atoms/Gif'

import styles from './galleryThumbnailGif.module.scss'

const GalleryThumbnailGif = ({
  title,
  url,
  video,
  fallbackGif,
  linkToVideo,
}) => {
  return (
    <Link className={styles.thumbnail} href={url}>
      <article>
        <span className={styles.spinner}>
          <CircularProgress color="secondary" />
        </span>
        <Gif videoUrl={video} fallbackGifUrl={fallbackGif} alt={title} />
        <div className={styles.overlay}>
          <Typography component="h5" variant="h5" className={styles.title}>
            {title}
          </Typography>
        </div>
        {linkToVideo && <PlayCircleFilledRounded className={styles.icon} />}
      </article>
    </Link>
  )
}

GalleryThumbnailGif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  fallbackGif: PropTypes.string.isRequired,
  linkToVideo: PropTypes.bool,
}

export default GalleryThumbnailGif
