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
  superTitle,
  title,
  media,
  description,
}) => {
  const onBackLinkClick = () => {
    if (!canUseDOM) return

    const { siteUrl } = useSiteMetadata()
    const ref = document.referrer
    const referredFromAnotherPageOnWebsite = ref.includes(siteUrl)

    if (referredFromAnotherPageOnWebsite) {
      navigate(-1)
    } else {
      navigate('/')
    }
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
        className={styles.headingWrapper}
        maxWidth={false}
        disableGutters
      >
        <Container maxWidth="lg">
          {superTitle && (
            <Typography
              className={styles.superTitle}
              component="h3"
              variant="h3"
              align="center"
            >
              {superTitle}
            </Typography>
          )}
          <Typography
            className={styles.title}
            component="h1"
            variant="h2"
            align="center"
          >
            {title}
          </Typography>
        </Container>
      </Container>
      <Container
        className={styles.mediaWrapper}
        maxWidth={false}
        disableGutters
      >
        <Container className={styles.mediaInner} maxWidth="lg">
          {media}
          <div className={styles.description}>{description}</div>
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
  superTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  media: PropTypes.node.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
}

export default PortfolioPageTemplate
