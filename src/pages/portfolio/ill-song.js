import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'

const IllSongPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="ILL - ILL Song | Portfolio | Harri Shanahan"
      metaDescription="Lots of (dark and twisted) fun. £1 shop costumes and horrifying makeup are all
            part of the service."
      metaImage="https://i3.ytimg.com/vi/xmml7MBikXk/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      artist="ILL"
      title="ILL Song"
      year="2015"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/xmml7MBikXk?rel=0&modestbranding=1"
          videoTitle="ILL - ILL Song"
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
            Relentlessly noisy, impolite Manchester feminist band ILL gained
            notice and notoriety for their scary-but-saucy vids, shot before I
            had access to my full studio lighting and while I was still finding
            my feet with chroma keying they are a bit rough - but lots of (dark
            and twisted) fun. £1 shop costumes and horrifying makeup are all
            part of the service.
          </Typography>
          <Typography component="p" variant="body2" color="textPrimary">
            ILL/Box Records/Harri Shanahan (producer, videographer, editor).
          </Typography>
        </>
      }
    />
  )
}

IllSongPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IllSongPage
