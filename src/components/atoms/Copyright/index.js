import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

import styles from './copyright.module.scss'

export default function Copyright() {
  return (
    <Typography variant="body2" align="center" className={styles.copyright}>
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
        Harri Shanahan
      </MuiLink>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}
