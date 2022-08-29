import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import useSiteMetadata from '../../hooks/use-site-metadata'

import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate'
import Carousel from '../../components/organisms/Carousel/index'
import CarouselImage from '../../components/atoms/CarouselImage'

const slides = [
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/my-hero/my-hero-1.png"
        alt="My Hero - Girl lying in bed thinking of her hero Princess Z"
      />
    ),
    thumbnailImage: '../../images/portfolio-pages/my-hero/my-hero-1.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/my-hero/my-hero-2.png"
        alt="My Hero - Girl cycling down a country lane in a fairy tale landscape, dressed as a knight"
      />
    ),
    thumbnailImage: '../../images/portfolio-pages/my-hero/my-hero-2.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/my-hero/my-hero-3.png"
        alt="My Hero - A view of a fairy tale castle on a hill in the distance"
      />
    ),
    thumbnailImage: '../../images/portfolio-pages/my-hero/my-hero-3.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/my-hero/my-hero-4.png"
        alt="My Hero - A close-up of the Girl's eyes with her hero Princess Z reflected in them"
      />
    ),
    thumbnailImage: '../../images/portfolio-pages/my-hero/my-hero-4.png',
  },
  {
    component: (
      <CarouselImage
        image="../../images/portfolio-pages/my-hero/my-hero-5.png"
        alt="My Hero - Princess Z getting ready at a dressing table mirror"
      />
    ),
    thumbnailImage: '../../images/portfolio-pages/my-hero/my-hero-5.png',
  },
]

const MyHeroPage = ({ location }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <PortfolioPageTemplate
      metaTitle="My Hero | Portfolio | Harri Shanahan"
      metaDescription="Stills from “My Hero” - an animated short by Harri Shanahan
          (animation, story)."
      metaImage="/images/portfolio-pages/my-hero/my-hero-4.png"
      absoluteUrl={`${siteUrl}${location.pathname}`}
      title="My Hero"
      year="2020"
      media={
        <Carousel
          slides={slides}
          naturalSlideWidth={100}
          naturalSlideHeight={56.25}
        />
      }
      description={
        <Typography component="p" variant="body2" color="textPrimary">
          Stills from “My Hero” - an animated short by Harri Shanahan
          (animation, story).
        </Typography>
      }
    />
  )
}

MyHeroPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default MyHeroPage
