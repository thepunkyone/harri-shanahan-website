import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import GifEmbed from '../../components/atoms/GifEmbed'

const GigPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Gig! | Portfolio | Harri Shanahan"
      metaDescription="Harri Shanahan (animation)."
      metaImage="/images/portfolio-pages/gig/gig-meta-image.png"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Gig!"
      media={
        <GifEmbed
          videoUrl="../../images/portfolio-pages/gig/gig.mp4"
          fallbackGifUrl="../../images/portfolio-pages/gig/gig-fallback.gif"
          alt="A rock band is playing on stage"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Harri Shanahan (animation).
        </Typography>
      }
    />
  )
}

GigPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default GigPage
