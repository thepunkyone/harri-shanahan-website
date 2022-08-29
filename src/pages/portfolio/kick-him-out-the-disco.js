import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'

const KickHimOutTheDiscoPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="ILL - Kick Him Out the Disco | Portfolio | Harri Shanahan"
      metaDescription="An unashamedly cheesy tribute to 1970s music videos and the ‘Pan’s
            People’ era of Top of The Pops, shot at The Kings Arms Theatre in
            Salford."
      metaImage={`${siteUrl}/images/portfolio-pages/kick-him-out-the-disco/meta-image.jpg`}
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="ILL"
      title="Kick Him Out the Disco"
      year="2019"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/xY9tnICp01A?rel=0&modestbranding=1"
          videoTitle="ILL - Kick Him Out the Disco"
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
            An unashamedly cheesy tribute to 1970s music videos and the ‘Pan’s
            People’ era of Top of The Pops, shot at The Kings Arms Theatre in
            Salford.
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            Produced by: Armadillo Media, Asst. Producer John Tatlock, Directed
            by Harri Shanahan, Camera - Mirko Lazzarin, Lighting camera - Harri
            Shanahan, Edit - Harri Shanahan.
          </Typography>
        </>
      }
    />
  )
}

KickHimOutTheDiscoPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default KickHimOutTheDiscoPage
