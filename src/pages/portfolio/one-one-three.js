import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const OneOneThreePage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="One One Three | Portfolio | Harri Shanahan"
      metaDescription="One One Three fashion commercial. Edited by Harri Shanahan."
      metaImage={`${siteUrl}/images/portfolio-pages/one-one-three/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="One One Three"
      year="2015"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/fXHy_pQMGKI?rel=0&modestbranding=1"
          videoTitle="One One Three"
          aspectRatio="56.25%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          One One Three fashion commercial. Edited by Harri Shanahan.
        </Typography>
      }
    />
  )
}

OneOneThreePage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default OneOneThreePage
