import React from 'react'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import sourceImageType from '../../../utils/sourceImageType'

import Picture from '../../atoms/Picture'

import styles from './hero.module.scss'

const Hero = () => {
  const image = './images/hero/my-hero.jpg'

  const fallbackImageSource = `${image}?nf_resize=fit&h=700`

  const sources = [
    {
      id: 'desktop',
      srcSet: image,
      media: '(min-width: 1301px)',
      type: sourceImageType(image),
    },
    {
      id: 'tablet',
      srcSet: `${image}?nf_resize=fit&h=842`,
      media: '(min-width: 661px) and (max-width: 1300px)',
      type: sourceImageType(image),
    },
    {
      id: 'mobile',
      srcSet: `${image}?nf_resize=fit&h=700`,
      media: '(max-width: 660px)',
      type: sourceImageType(image),
    },
  ]

  return (
    <Container maxWidth={false} disableGutters className={styles.hero}>
      <Picture
        className={styles.image}
        alt="Girl riding a bike down a country road while dressed as a fairy tale knight"
        src={fallbackImageSource}
        sources={sources}
        lazyload
      />
      <Container maxWidth="lg" className={styles.headingWrapper}>
        <Typography variant="h1" component="h1" className={styles.heading}>
          <span className={classNames(styles.fadeInSide, styles.animated)}>
            Animation.
          </span>
          <span className={classNames(styles.fadeInSide, styles.animated)}>
            Video.
          </span>
          <span className={classNames(styles.fadeInSide, styles.animated)}>
            Art.
          </span>
        </Typography>
      </Container>
    </Container>
  )
}

export default Hero
