import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import VideoEmbed from '../../components/atoms/VideoEmbed'

import styles from './portfolio-page.module.scss'
import MuiLink from '@material-ui/core/Link'

const RebelDykesPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Rebel Dykes | Portfolio | Harri Shanahan"
      metaDescription="The story of how a lesbian fetish club became a beacon of freedom and community for a gang of outsider dykes struggling as punks, sex workers, activists, musicians and artists in 1980s London."
      metaImage="https://i3.ytimg.com/vi/iC3es6Rup0s/hqdefault.jpg"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Rebel Dykes"
      year="2021"
      media={
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/iC3es6Rup0s?rel=0&modestbranding=1"
          videoTitle="Rebel Dykes"
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
            REBEL DYKES (82 minutes, Riot Productions/Bohemia, release 2021).
          </Typography>
          <Typography
            className={styles.paragraphMargin}
            component="p"
            variant="body2"
            color="textPrimary"
          >
            The story of how a lesbian fetish club became a beacon of freedom
            and community for a gang of outsider dykes struggling as punks, sex
            workers, activists, musicians and artists in 1980s London.
          </Typography>
          <Typography
            className={styles.paragraphMargin}
            component="p"
            variant="body2"
            color="textPrimary"
          >
            I had the privilege of co-directing this documentary feature (with
            Siân A. Williams) and creating the animation.
          </Typography>
          <Typography
            className={styles.list}
            component="ul"
            variant="body2"
            color="textPrimary"
          >
            <li>
              Twitter:{' '}
              <MuiLink
                href="https://twitter.com/RebelDykes"
                target="_blank"
                rel="noopener nofollow"
              >
                @RebelDykes
              </MuiLink>
            </li>
            <li>
              Insta:{' '}
              <MuiLink
                href="https://www.instagram.com/rebeldykes"
                target="_blank"
                rel="noopener nofollow"
              >
                @rebeldykes
              </MuiLink>
            </li>
            <li>
              <MuiLink
                href="https://www.rebeldykes1980s.com/"
                target="_blank"
                rel="noopener nofollow"
              >
                rebeldykes1980s.com
              </MuiLink>
            </li>
          </Typography>
        </>
      }
    />
  )
}

RebelDykesPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default RebelDykesPage
