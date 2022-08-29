import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'

const AlrightLadsPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Nervous Twitch - Alright Lads? | Portfolio | Harri Shanahan"
      metaDescription="For this garage/pop-punk trio from Leeds, we built on the band’s
            existing branding and went for a fun collage feel referencing
            classic Garage album covers."
      metaImage={`${siteUrl}/images/portfolio-pages/alright-lads/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="Nervous Twitch"
      title="Alright Lads?"
      year="2021"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/cxDn60JqxWo?rel=0&modestbranding=1"
          videoTitle="Nervous Twitch - Alright Lads?"
          aspectRatio="56%"
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
            For this garage/pop-punk trio from Leeds, we built on the band’s
            existing branding and went for a fun collage feel referencing
            classic Garage album covers. Shot under Covid-19 social distancing
            restrictions. Thank goodness for green screen!
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            Written by: Nervous Twitch, produced by Armadillo Media & Nervous
            Twitch, Director - Harri Shanahan, Camera - Mirko Lazzarin, Editor &
            Compositor - Harri Shanahan.
          </Typography>
        </>
      }
    />
  )
}

AlrightLadsPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default AlrightLadsPage
