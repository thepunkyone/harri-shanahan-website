import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import GifEmbed from '../../components/atoms/GifEmbed'

const WalkingWomanPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Walking Woman | Portfolio | Harri Shanahan"
      metaDescription="Harri Shanahan (animation)."
      metaImage={`${siteUrl}images/portfolio-pages/walking-woman/walking-woman-meta-image.png`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Walking Woman"
      media={
        <GifEmbed
          videoUrl="../../images/portfolio-pages/walking-woman/walking-woman.mp4"
          fallbackGifUrl="../../images/portfolio-pages/walking-woman/walking-woman-fallback.gif"
          alt="A nude woman wearing only a pair of Dr Marten's is walking across the frame"
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

WalkingWomanPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default WalkingWomanPage
