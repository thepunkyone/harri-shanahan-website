import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import GifEmbed from '../../components/atoms/GifEmbed'

const IggyPopPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Iggy Pop Howling at the Moon | Portfolio | Harri Shanahan"
      metaDescription="Harri Shanahan (animation)."
      metaImage={`${siteUrl}/images/portfolio-pages/iggy-pop/iggy-pop-meta-image.png`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Iggy Pop Howling at the Moon"
      media={
        <GifEmbed
          videoUrl="../../images/portfolio-pages/iggy-pop/iggy-pop.mp4"
          fallbackGifUrl="../../images/portfolio-pages/iggy-pop/iggy-pop-fallback.gif"
          alt="Iggy Pop Howling at the Moon"
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

IggyPopPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IggyPopPage
