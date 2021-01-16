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

  const titleWithArtist = (
    <>
      {artist} <span className={styles.divider}>•</span> {title}
    </>
  )

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
              {artist ? titleWithArtist : title}
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
  media: PropTypes.node.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
}

export default PortfolioPageTemplate
