import React from 'react'
import PropTypes from 'prop-types'

import styles from './gallery.module.scss'

const Gallery = ({ items }) => {
  return (
    <section className={styles.gallery}>
      {items.map((item) => {
        return <div className={styles.item}>{item}</div>
      })}
    </section>
  )
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Gallery
