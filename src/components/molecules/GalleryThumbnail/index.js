import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import {
  VideocamRounded,
  PhotoLibraryRounded,
  GifRounded,
} from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'

import sourceImageType from '../../../utils/sourceImageType'

import Picture from '../../atoms/Picture'
import Link from '../../atoms/Link'

import styles from './galleryThumbnail.module.scss'

const GalleryThumbnail = ({ superTitle, title, url, image, icon }) => {
  const fallbackImageSource = `${image}?nf_resize=fit&h=433`

  const sources = [
    {
      id: 'desktop',
      srcSet: `${image}?nf_resize=fit&h=290 1x, ${image}?nf_resize=fit&h=580 2x`,
      media: '(min-width: 481px)',
      type: sourceImageType(image),
    },
    {
      id: 'mobile',
      srcSet: `${image}?nf_resize=fit&h=433 1x, ${image}?nf_resize=fit&h=866 2x`,
      media: '(max-width: 480px)',
      type: sourceImageType(image),
    },
  ]

  return (
    <Link className={styles.thumbnail} href={url}>
      <article>
        <span className={styles.spinner}>
          <CircularProgress color="secondary" />
        </span>
        <Picture
          alt={title}
          src={fallbackImageSource}
          sources={sources}
          lazyload
        />
        <div className={styles.overlay}>
          {icon === 'video' && <VideocamRounded className={styles.videoIcon} />}
          {icon === 'gallery' && (
            <PhotoLibraryRounded className={styles.galleryIcon} />
          )}
          {icon === 'gif' && <GifRounded className={styles.gifIcon} />}
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

GalleryThumbnail.propTypes = {
  superTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default GalleryThumbnail
