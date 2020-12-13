import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import styles from './hero.module.scss'

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <img
        className={styles.image}
        alt="Girl riding a bike down a country road while dressed as a fairy tale knight"
        src="./images/hero/my-hero.jpg"
      />
      <Container maxWidth="lg" className={styles.headingWrapper}>
        <Typography variant="h1" component="h1" className={styles.heading}>
          <span>Animation.</span>
          <span>Video.</span>
          <span>Art.</span>
        </Typography>
      </Container>
    </Container>
  )
}

export default Hero
