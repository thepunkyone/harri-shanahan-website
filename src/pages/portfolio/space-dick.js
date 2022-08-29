import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const SpaceDickPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="ILL - Space Dick | Portfolio | Harri Shanahan"
      metaDescription="Written & produced by ILL, directed, shot edited and animated by Harri Shanahan."
      metaImage={`${siteUrl}/images/portfolio-pages/space-dick/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="ILL"
      title="Space Dick"
      year="2016"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/FRRQcGM6f6A?rel=0&modestbranding=1"
          videoTitle="ILL - Space Dick"
          aspectRatio="56.25%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Written & produced by ILL, directed, shot edited and animated by Harri
          Shanahan.
        </Typography>
      }
    />
  )
}

SpaceDickPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default SpaceDickPage
