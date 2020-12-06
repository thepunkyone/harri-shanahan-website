import React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './services.module.scss'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.service}>
        <Typography variant="h4" component="h4">
          Video editing
        </Typography>
        <Typography variant="body2" component="ul">
          <li>Organise your raw footage</li>
          <li>Assemble your footage into a great story</li>
          <li>
            Use advanced post production techniques to make your video look
            beautiful and professional
          </li>
          <li>Fix many kinds of common filming mistakes</li>
        </Typography>
      </div>
      <div className={styles.service}>
        <Typography variant="h4" component="h4">
          Video editing
        </Typography>
        <Typography variant="body2" component="ul">
          <li>Organise your raw footage</li>
          <li>Assemble your footage into a great story</li>
          <li>
            Use advanced post production techniques to make your video look
            beautiful and professional
          </li>
          <li>Fix many kinds of common filming mistakes</li>
        </Typography>
      </div>
      <div className={styles.service}>la</div>
      <div className={styles.service}>snoo</div>
    </section>
  )
}

export default Services
