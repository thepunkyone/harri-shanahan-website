import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './gallery.module.scss'

const Gallery = ({ className, thumbnails }) => {
  return (
    <section className={classNames(styles.gallery, className)}>
      {thumbnails.map((thumbnail, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i} className={styles.item}>
          {thumbnail}
        </span>
      ))}
    </section>
  )
}

Gallery.propTypes = {
  className: PropTypes.string,
  thumbnails: PropTypes.array.isRequired,
}

export default Gallery
