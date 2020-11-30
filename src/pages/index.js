import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import CardComponent from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Gallery from '../components/organisms/Gallery'

import PageTemplate from '../components/templates/PageTemplate'

import styles from './index.module.scss'
import GalleryThumbnail from '../components/molecules/GalleryThumbnail'

const fakeThumbnails = [
  <GalleryThumbnail
    title="Picture 1"
    image="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 2"
    image="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 3"
    image="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=719&q=80"
    url="/"
    video
  />,
  <GalleryThumbnail
    title="Picture 4"
    image="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 5"
    image="https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 6"
    image="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 7"
    image="https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 8"
    image="https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
    url="/"
    video
  />,
  <GalleryThumbnail
    title="Picture 9"
    image="https://images.unsplash.com/photo-1462480803487-a2edfd796460?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 10"
    image="https://images.unsplash.com/photo-1462486387766-dcf408d34ece?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 11"
    image="https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"
    url="/"
  />,
  <GalleryThumbnail
    title="Picture 12"
    image="https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
    url="/"
    video
  />,
]

export default function Index() {
  return (
    <PageTemplate title="Animation. Video. Art. | Harri Shanahan">
      <Container maxWidth={false} disableGutters className={styles.hero}>
        <img
          className={styles.heroImage}
          alt="Cycling girl dressed as a fairy tale knight"
          src="./images/tumblr.png"
        />
        <Typography variant="h1" component="h1" className={styles.heroHeading}>
          <span>Animation.</span>
          <span>Video.</span>
          <span>Art.</span>
        </Typography>
      </Container>
      <Container maxWidth={false} className={styles.welcomeSection}>
        <Container maxWidth="lg" className={styles.welcomeSectionInner}>
          <Box my={4} className={styles.welcomeSectionColumn}>
            <Typography variant="h2" component="h2" gutterBottom>
              Welcome
            </Typography>
            <Typography
              className={styles.welcomeDescription}
              variant="body1"
              component="p"
              gutterBottom
            >
              Thanks for visiting my site. I love a creative challenge and
              helping people achieve their vision. If you’ve got an idea for a
              great video or animation, I can help you make it a reality. If you
              need help creating a unique and imaginative concept I can help
              there, too. Get in touch for a chat and let’s make things happen.
            </Typography>
            <Button size="large" variant="contained" color="primary">
              Get in touch
            </Button>
          </Box>
          <Box my={4} className={styles.welcomeSectionColumn}>
            <CardComponent className={styles.welcomeSectionCard}>
              <CardContent>
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
      <Container maxWidth="lg" className={styles.gallerySection}>
        <Gallery thumbnails={fakeThumbnails} />
      </Container>
    </PageTemplate>
  )
}
