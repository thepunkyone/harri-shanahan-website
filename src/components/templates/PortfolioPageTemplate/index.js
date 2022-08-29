import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { ChevronLeftRounded } from '@material-ui/icons'

import canUseDOM from '../../../utils/canUseDom'
import useSiteMetadata from '../../../hooks/use-site-metadata'

import PageTemplate from '../PageTemplate'
import Link from '../../atoms/Link'

import styles from './portfolioPageTemplate.module.scss'

const PortfolioPageTemplate = ({
  absoluteUrl,
  metaImage,
  metaTitle,
  metaDescription,
  artist,
  title,
  year,
  media,
  description,
}) => {
  const { siteUrl } = useSiteMetadata()

  const onBackLinkClick = async () => {
    if (!canUseDOM) return

    const ref = document.referrer
    const referredFromAnotherPageOnWebsite = ref.includes(siteUrl)

    if (referredFromAnotherPageOnWebsite) {
      await navigate(-1)
    } else {
      await navigate('/')
    }
  }

  const renderTitle = () => {
    if (artist && year) {
      return (
        <>
          {artist} <span className={styles.divider}>•</span> {title}{' '}
          <span className={styles.divider}>•</span>{' '}
          <span className={styles.year}>{year}</span>
        </>
      )
    }

    if (artist) {
      return (
        <>
          {artist} <span className={styles.divider}>•</span> {title}
        </>
      )
    }

    if (year) {
      return (
        <>
          {title} <span className={styles.divider}>•</span>{' '}
          <span className={styles.year}>{year}</span>
        </>
      )
    }

    return <>{title}</>
  }

  return (
    <PageTemplate
      className={styles.page}
      absoluteUrl={absoluteUrl}
      image={metaImage}
      title={metaTitle}
      description={metaDescription}
    >
      <Container className={styles.backLinkBar} maxWidth={false} disableGutters>
        <Container maxWidth="lg">
          <Link className={styles.backLink} to="/" onClick={onBackLinkClick}>
            <ChevronLeftRounded className={styles.arrowIcon} />
            Back to Home
          </Link>
        </Container>
      </Container>
      <Container
        className={styles.mediaWrapper}
        maxWidth={false}
        disableGutters
      >
        <Container className={styles.mediaInner} maxWidth="lg">
          {media}
          <div className={styles.description}>
            <Typography className={styles.title} component="h1" variant="h3">
              {renderTitle()}
            </Typography>
            {description}
          </div>
        </Container>
      </Container>
    </PageTemplate>
  )
}

PortfolioPageTemplate.propTypes = {
  absoluteUrl: PropTypes.string.isRequired,
  metaImage: PropTypes.string.isRequired,
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  artist: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  media: PropTypes.node.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
}

export default PortfolioPageTemplate
