import React from 'react'
import Typography from '@material-ui/core/Typography'
import {
  TheatersRounded,
  MovieFilterRounded,
  EmojiEmotionsRounded,
  CameraRounded,
} from '@material-ui/icons'

import styles from './services.module.scss'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.service}>
        <TheatersRounded className={styles.icon} />
        <Typography variant="h4" component="h4" className={styles.heading}>
          Video editing
        </Typography>
        <Typography variant="body2" component="ul" className={styles.list}>
          <li>Organise your raw footage</li>
          <li>Assemble your footage into a great story</li>
          <li>
            Use advanced post production techniques to make your video look
            beautiful and professional
          </li>
          <li>Fix many kinds of common filming mistakes</li>
        </Typography>
      </div>
      <div className={styles.service}>
        <MovieFilterRounded className={styles.icon} />
        <Typography variant="h4" component="h4" className={styles.heading}>
          VFX
        </Typography>
        <Typography variant="body2" component="ul" className={styles.list}>
          <li>
            Professional and accurate chroma keying (taking out green screen
            backgrounds)
          </li>
          <li>
            Removing unwanted markers and other elements from your video
            (clean-up)
          </li>
          <li>Adding extra elements and layers to your video (compositing)</li>
        </Typography>
      </div>
      <div className={styles.service}>
        <EmojiEmotionsRounded className={styles.icon} />
        <Typography variant="h4" component="h4" className={styles.heading}>
          Animation
        </Typography>
        <Typography variant="body2" component="ul" className={styles.list}>
          <li>Make your character design into an animated character (2D)</li>
          <li>
            Create short engaging animations to your brief Animate your company
            logo
          </li>
          <li>Make an appealing loading screen for your app or site</li>
          <li>…and more! Ask me.</li>
        </Typography>
      </div>
      <div className={styles.service}>
        <CameraRounded className={styles.icon} />
        <Typography variant="h4" component="h4" className={styles.heading}>
          Production
        </Typography>
        <Typography variant="body2" component="ul" className={styles.list}>
          <li>Filming (can provide a 2 person team)</li>
          <li>Sound recording</li>
          <li>Lighting for camera</li>
          <li>Lighting for green screen shoots</li>
          <li>
            I have all my own basic equipment (good quality camera, sound
            recorder, rifle mic, redhead lighting kit, additional lighting,
            large green screen and frame) and am also able to use yours/your
            company’s if preferred
          </li>
          <li>
            I am happy to refer you to trusted audio specialists for
            professional mixing, mastering and composition
          </li>
        </Typography>
      </div>
    </section>
  )
}

export default Services
