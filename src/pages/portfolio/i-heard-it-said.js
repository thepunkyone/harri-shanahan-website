import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const IHeardItSaidPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="The Happy Soul - I Heard it Said | Portfolio | Harri Shanahan"
      metaDescription="Written by Mark Simpson, Directed & produced by Mark Simpson and Harri Shanahan, camera and edit, Harri Shanahan."
      metaImage={`${siteUrl}/images/portfolio-pages/i-am-contagious/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="The Happy Soul"
      title="I Heard it Said"
      year="2018"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/zVYnp54LvTA?rel=0&modestbranding=1"
          videoTitle="The Happy Soul - I Heard it Said"
          aspectRatio="56.25%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Written by Mark Simpson, Directed & produced by Mark Simpson and Harri
          Shanahan, camera and edit, Harri Shanahan.
        </Typography>
      }
    />
  )
}

IHeardItSaidPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IHeardItSaidPage
