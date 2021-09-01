import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import Carousel from '../../components/organisms/Carousel/index'
import CarouselImage from '../../components/atoms/CarouselImage'
import Link from '../../components/atoms/Link'

import styles from './portfolio-page.module.scss'

const slides = [
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-1.png"
        alt="Animated woman with short cropped hair and glasses is walking past neon signs"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-1.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-2.png"
        alt="Collage with a black and white photo of an SM 'Femme' Dyke, a drawing of a leather bra and a drawing of the anarchist sign"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-2.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-3.png"
        alt="An animated hand is drawing a complex diagram of lovers' names interconnected by lines"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-3.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-4.png"
        alt="An animated collage of lesbian and gay activists who came together to fight Section 28"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-4.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-5.png"
        alt="An animated still of Debbie Smith of Echobelly playing guitar live on TV"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-5.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-6.png"
        alt="Collage with a black and white photo of participants of the Lesbian Strength March 1988, a drawing of a boombox and a drawing of a Dr Marten's boot"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-6.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/rebel-dykes/rebel-dykes-7.png"
        alt="An animated still of a butch black rebel dyke who is walking past a TV shop and a sex shop, smoking and carrying a guitar on her back"
      />
    ),
    thumbnailImage:
      '../../images/portfolio-pages/rebel-dykes/rebel-dykes-7.png',
  },
]

const RebelDykesPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="Rebel Dykes | Portfolio | Harri Shanahan"
      metaDescription="The story of how a lesbian fetish club became a beacon of freedom and community for a gang of outsider dykes struggling as punks, sex workers, activists, musicians and artists in 1980s London."
      metaImage="../../images/portfolio-pages/rebel-dykes/rebel-dykes-1.png"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="Rebel Dykes"
      year="2021"
      media={
        <Carousel
          slides={slides}
          naturalSlideWidth={100}
          naturalSlideHeight={56.25}
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
              <Link
                to="https://twitter.com/RebelDykes"
                target="_blank"
                rel="noopener"
              >
                @RebelDykes
              </Link>
            </li>
            <li>
              Insta:{' '}
              <Link
                to="https://www.instagram.com/rebeldykes"
                target="_blank"
                rel="noopener"
              >
                @rebeldykes
              </Link>
            </li>
            <li>
              <Link
                to="https://www.rebeldykes1980s.com/"
                target="_blank"
                rel="noopener"
              >
                rebeldykes1980s.com
              </Link>
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
