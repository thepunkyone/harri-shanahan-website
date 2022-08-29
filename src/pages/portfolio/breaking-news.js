import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const BreakingNewsPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Radio Partizan - Breaking News | Portfolio | Harri Shanahan"
      metaDescription="Produced by Harri Shanahan and Mirko Lazzarin
          (Armadillo Media). Directed by Harri Shanahan. Camera: Mirko Lazzarin,
          Edit: Harri Shanahan."
      metaImage={`${siteUrl}/images/portfolio-pages/breaking-news/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="Radio Partizan"
      title="Breaking News"
      year="2018"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/Ux6cfNGtb2g?rel=0&modestbranding=1"
          videoTitle="Radio Partizan - Breaking News"
          aspectRatio="56.25%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Written by: Tim Dawtry. Produced by Harri Shanahan and Mirko Lazzarin
          (Armadillo Media). Directed by Harri Shanahan. Camera: Mirko Lazzarin,
          Edit: Harri Shanahan.
        </Typography>
      }
    />
  )
}

BreakingNewsPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default BreakingNewsPage
