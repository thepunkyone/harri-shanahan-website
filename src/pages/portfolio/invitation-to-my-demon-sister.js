import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'

const InvitationToMyDemonSisterPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Invitation to My Demon Sister | Portfolio | Harri Shanahan"
      metaDescription="Harri Shanahan (script, producer,
          videographer, editor)."
      metaImage="https://i3.ytimg.com/vi/nmna_Lmn2JA/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Invitation to My Demon Sister"
      year="2014"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/nmna_Lmn2JA?rel=0&modestbranding=1"
          videoTitle="Invitation to My Demon Sister"
          aspectRatio="75%"
        />
      }
      description={
        <>
          <Typography
            className={styles.paragraphMargin}
            component="p"
            variant="body2"
            color="textPrimary"
          >
            Short art video on the theme of the female gaze with cheap as chips
            special effects and a naughty sun.
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            Harri Shanahan (script, producer, videographer, editor).
          </Typography>
        </>
      }
    />
  )
}

InvitationToMyDemonSisterPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default InvitationToMyDemonSisterPage
