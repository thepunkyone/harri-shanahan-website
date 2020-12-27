import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { VideocamRounded, PhotoLibraryRounded } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'

import Link from '../../atoms/Link'
import Gif from '../../atoms/Gif'

import styles from './galleryThumbnailGif.module.scss'

const GalleryThumbnailGif = ({
  superTitle,
  title,
  url,
  video,
  fallbackGif,
  icon,
}) => {
  return (
    <Link className={styles.thumbnail} href={url}>
      <article>
        <span className={styles.spinner}>
          <CircularProgress color="secondary" />
        </span>
        <Gif videoUrl={video} fallbackGifUrl={fallbackGif} alt={title} />
        <div className={styles.overlay}>
          {icon === 'video' && <VideocamRounded className={styles.videoIcon} />}
          {icon === 'gallery' && (
            <PhotoLibraryRounded className={styles.galleryIcon} />
          )}
          {superTitle && (
            <Typography
              component="p"
              variant="h6"
              className={styles.superTitle}
            >
              {superTitle}
            </Typography>
          )}
          <Typography component="h5" variant="h5" className={styles.title}>
            {title}
          </Typography>
        </div>
      </article>
    </Link>
  )
}

GalleryThumbnailGif.propTypes = {
  superTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  fallbackGif: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default GalleryThumbnailGif
