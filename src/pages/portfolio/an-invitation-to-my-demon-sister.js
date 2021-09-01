import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

const AnInvitationToMyDemonSisterPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="An Invitation to My Demon Sister | Portfolio | Harri Shanahan"
      metaDescription="Harri Shanahan (script, producer,
          videographer, editor)."
      metaImage="https://i3.ytimg.com/vi/nmna_Lmn2JA/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="An Invitation to My Demon Sister"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/nmna_Lmn2JA?rel=0&modestbranding=1"
          videoTitle="An Invitation to My Demon Sister"
          aspectRatio="56%"
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Harri Shanahan (script, producer, videographer, editor).
        </Typography>
      }
    />
  )
}

AnInvitationToMyDemonSisterPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default AnInvitationToMyDemonSisterPage
