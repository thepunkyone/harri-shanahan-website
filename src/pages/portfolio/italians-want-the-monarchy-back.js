import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const ItaliansWantTheMonarchyBackPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Italians Want the Monarchy Back! | Portfolio | Harri Shanahan"
      metaDescription="Simone Tripodi/Bric-hu-Brac.tv. Edited by Harri Shanahan."
      metaImage="https://i3.ytimg.com/vi/JUpMK_V2XII/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Italians Want the Monarchy Back!"
      year="2015"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/JUpMK_V2XII?rel=0&modestbranding=1"
          videoTitle="Italians Want the Monarchy Back!"
          aspectRatio="56.25%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Simone Tripodi/Bric-hu-Brac.tv. Edited by Harri Shanahan.
        </Typography>
      }
    />
  )
}

ItaliansWantTheMonarchyBackPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ItaliansWantTheMonarchyBackPage
