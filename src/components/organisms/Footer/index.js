import React from 'react'
import Container from '@material-ui/core/Container'

import Copyright from '../../atoms/Copyright'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <Container component="footer" maxWidth={false} className={styles.footer}>
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Container>
  )
}

export default Footer
