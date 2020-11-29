import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import CardComponent from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import PageTemplate from '../components/templates/PageTemplate'

import styles from './index.module.scss'

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
    </PageTemplate>
  )
}
