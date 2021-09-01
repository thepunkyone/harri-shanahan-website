import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'

const iHeardItSaidPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Bobbie Peru - I am Contagious | Portfolio | Harri Shanahan"
      metaDescription="Produced, directed and edited by Harri Shanahan. Lots of green screen compositing and horror vfx in this one."
      metaImage="https://i3.ytimg.com/vi/mvDQ0du3cic/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="Bobbie Peru"
      title="I am Contagious"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/mvDQ0du3cic?rel=0&modestbranding=1"
          videoTitle="Bobbie Peru - I am Contagious"
          aspectRatio="56.25%"
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
            Track from the album “Nurse Corkscrew”.
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            Written by: Bobbie Peru/Harri Shanahan. Produced, directed and
            edited by Harri Shanahan. Lots of green screen compositing and
            horror vfx in this one.
          </Typography>
        </>
      }
    />
  )
}

iHeardItSaidPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default iHeardItSaidPage
