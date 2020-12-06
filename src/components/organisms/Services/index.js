import React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './services.module.scss'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.service}>
        <Typography variant="h4" component="h4">
          Video editing
        </Typography>
        <Typography variant="body2" component="ul">
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
        <Typography variant="h4" component="h4">
          VFX
        </Typography>
        <Typography variant="body2" component="ul">
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
        <Typography variant="h4" component="h4">
          Animation
        </Typography>
        <Typography variant="body2" component="ul">
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
        <Typography variant="h4" component="h4">
          Production
        </Typography>
        <Typography variant="body2" component="ul">
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
