import React from 'react'
import PropTypes from 'prop-types'

import styles from './gallery.module.scss'

const Gallery = ({ thumbnails }) => {
  return (
    <section className={styles.gallery}>
      {thumbnails.map((thumbnail, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i}>{thumbnail}</span>
      ))}
    </section>
  )
}

Gallery.propTypes = {
  thumbnails: PropTypes.array.isRequired,
}

export default Gallery
