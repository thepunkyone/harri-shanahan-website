import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { PlayCircleFilledRounded } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'

import Link from '../../atoms/Link'
import Video from '../../atoms/Video'

import styles from './galleryThumbnailGif.module.scss'

const GalleryThumbnailGif = ({ title, url, video, linkToVideo }) => {
  const sources = [
    {
      src: video,
      type: 'video/mp4',
    },
  ]

  return (
    <Link className={styles.thumbnail} href={url}>
      <article>
        <span className={styles.spinner}>
          <CircularProgress color="secondary" />
        </span>
        <Video alt={title} sources={sources} />
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
  linkToVideo: PropTypes.bool,
}

export default GalleryThumbnailGif
