import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const IllSongPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="ILL - ILL Song | Portfolio | Harri Shanahan"
      metaDescription="ILL/Box Records/Harri Shanahan (producer, videographer, editor)."
      metaImage="../../images/portfolio-pages/ill-song/ill-song-still.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="ILL"
      title="ILL Song"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/xmml7MBikXk"
          videoTitle="ILL - ILL Song"
          aspectRatio="56%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          ILL/Box Records/Harri Shanahan (producer, videographer, editor).
        </Typography>
      }
    />
  )
}

IllSongPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IllSongPage
