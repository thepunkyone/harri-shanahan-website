import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import { FavoriteRounded } from '@material-ui/icons'

import styles from './copyright.module.scss'

export default function Copyright() {
  return (
    <>
      <Typography variant="body2" align="center" className={styles.copyright}>
        {'Copyright © '}
        <MuiLink color="inherit" href="/">
          Harri Shanahan
        </MuiLink>{' '}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" align="center" className={styles.madeBy}>
        {'Made with '}
        <FavoriteRounded className={styles.icon} />
        {' by '}
        <MuiLink color="inherit" href="https://github.com/thepunkyone">
          thepunkyone
        </MuiLink>
      </Typography>
    </>
  )
}
