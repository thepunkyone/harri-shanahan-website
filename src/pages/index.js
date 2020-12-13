import React, { useRef } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import CardComponent from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import useSiteMetadata from '../hooks/use-site-metadata'
import postContactForm from '../api/postContactForm'

import PageTemplate from '../components/templates/PageTemplate'
import Hero from '../components/molecules/Hero'
import Gallery from '../components/organisms/Gallery'
import GalleryThumbnail from '../components/molecules/GalleryThumbnail'
import GalleryThumbnailGif from '../components/molecules/GalleryThumbnailGif'
import VideoEmbed from '../components/atoms/VideoEmbed'
import Services from '../components/organisms/Services'
import ContactForm from '../components/organisms/ContactForm'

import styles from './index.module.scss'

const fakeThumbnails = [
  <GalleryThumbnailGif
    title="My Hero"
    video="./images/home-gallery/my-hero-2.mp4"
    url="/"
  />,
  <GalleryThumbnail
    title="Nervous Twitch - Alright Lads?"
    image="./images/home-gallery/alright-lads.jpg"
    url="/"
  />,
  <GalleryThumbnail
    title="ILL - Space Dick"
    image="./images/home-gallery/space-dick-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnailGif
    title="My Hero"
    video="./images/home-gallery/my-hero-1.mp4"
    url="/"
  />,
  <GalleryThumbnail
    title="An Invitation to My Demon Sister"
    image="./images/home-gallery/demon-sister-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnail
    title="Rebel Dykes"
    image="./images/home-gallery/rebel-dykes-still.jpg"
    url="/"
  />,
  <GalleryThumbnail
    title="ILL - ILL Song"
    image="./images/home-gallery/ill-song-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnailGif
    title="Iggy Pop Howling at the Moon"
    video="./images/home-gallery/iggy-pop.mp4"
    url="/"
  />,
  <GalleryThumbnailGif
    title="Gig!"
    video="./images/home-gallery/gig.mp4"
    url="/"
  />,
  <GalleryThumbnail
    title="The Happy Soul - I Heard it Said"
    image="./images/home-gallery/the-happy-soul-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnailGif
    title="Walking Woman"
    video="./images/home-gallery/walking-woman.mp4"
    url="/"
  />,
  <GalleryThumbnail
    title="Bobbie Peru - I am Contagious"
    image="./images/home-gallery/bobbie-peru-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnail
    title="Italians Want the Monarchy Back"
    image="./images/home-gallery/italians-want-the-monarchy-back-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnail
    title="Radio Partizan - Breaking News"
    image="./images/home-gallery/radio-partizan-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnail
    title="ILL - Kick Him out the Disco"
    image="./images/home-gallery/kick-him-out-the-disco-still.jpg"
    url="/"
    linkToVideo
  />,
  <GalleryThumbnail
    title="One One Three"
    image="./images/home-gallery/one-one-three-still.jpg"
    url="/"
    linkToVideo
  />,
]

export default function Index() {
  const { siteUrl } = useSiteMetadata()
  const contactSectionRef = useRef()

  return (
    <PageTemplate
      title="Animation. Video. Art. | Harri Shanahan"
      description="I love a creative challenge and helping people achieve their vision. If you’ve got an idea for a great video or animation, I can help you make it a reality. If you need help creating a unique and imaginative concept I can help there, too."
      image="./images/hero/my-hero.jpg?nf_resize=fit&w=1200"
      absoluteUrl={siteUrl}
    >
      <Hero />
      <Container maxWidth={false} className={styles.welcomeSection}>
        <Container
          maxWidth="lg"
          disableGutters
          className={styles.welcomeSectionInner}
        >
          <Box my={4} className={styles.welcomeSectionColumn}>
            <Typography variant="h2" component="h2" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Thanks for visiting my site. I love a creative challenge and
              helping people achieve their vision. If you’ve got an idea for a
              great video or animation, I can help you make it a reality. If you
              need help creating a unique and imaginative concept I can help
              there, too. Get in touch for a chat and let’s make things happen.
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                contactSectionRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in touch
            </Button>
          </Box>
          <Box my={4} className={styles.welcomeSectionColumn}>
            <CardComponent className={styles.welcomeSectionCard}>
              <CardContent className={styles.welcomeSectionCardContent}>
                <Avatar
                  className={styles.avatarLarge}
                  alt="Harri Shanahan"
                  src="https://harrishanahan.files.wordpress.com/2020/11/nice-profile-pic.jpg?w=139"
                />
                <Typography
                  variant="h4"
                  component="p"
                  color="secondary"
                  gutterBottom
                >
                  Harri Shanahan
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  Editor, Filmmaker, 2DAnimator, Artist
                </Typography>
              </CardContent>
            </CardComponent>
          </Box>
        </Container>
      </Container>
      <Container maxWidth={false} className={styles.showreelSection}>
        <Container maxWidth="lg" disableGutters>
          <Typography
            className={styles.sectionHeading}
            variant="h3"
            component="h2"
            color="secondary"
          >
            Animation Showreel
          </Typography>
          <VideoEmbed
            videoTitle="Animation Showreel"
            videoUrl="https://player.vimeo.com/video/229623427?autoplay=0&title=0&portrait=0&byline=0&color=7159b2"
          />
        </Container>
      </Container>
      <Container maxWidth={false} className={styles.portfolioSection}>
        <Container maxWidth="lg" disableGutters>
          <Typography
            className={styles.sectionHeading}
            variant="h3"
            component="h2"
            color="secondary"
          >
            Portfolio
          </Typography>
          <Gallery
            className={styles.portfolioGallery}
            thumbnails={fakeThumbnails}
          />
        </Container>
      </Container>
      <Container maxWidth={false} className={styles.servicesSection}>
        <Container maxWidth="lg" disableGutters>
          <Typography
            variant="h2"
            component="h2"
            className={styles.servicesHeading}
          >
            My Services
          </Typography>
          <Services className={styles.servicesGrid} />
        </Container>
      </Container>
      <Container
        maxWidth={false}
        className={styles.contactSection}
        ref={contactSectionRef}
      >
        <Container maxWidth="lg" disableGutters>
          <Typography
            variant="h2"
            component="h2"
            className={styles.contactSectionHeading}
          >
            Get in touch
          </Typography>
          <Typography
            className={styles.contactSectionSubheading}
            variant="body2"
            component="p"
            color="textSecondary"
          >
            Have an idea, a project, a job offer or a question?
          </Typography>
          <Typography
            className={styles.contactSectionSubheading}
            variant="body2"
            component="p"
            color="textSecondary"
          >
            I look forward to hearing from you.
          </Typography>
          <ContactForm
            className={styles.contactForm}
            postContactForm={postContactForm}
          />
        </Container>
      </Container>
    </PageTemplate>
  )
}
