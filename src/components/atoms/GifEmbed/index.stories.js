import React from 'react'

import GifEmbed from './index'

export default {
  title: 'Atoms/GifEmbed',
}

export const defaultGifEmbed = () => (
  <GifEmbed
    videoUrl="http://techslides.com/demos/sample-videos/small.mp4"
    fallbackGifUrl="https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif"
    alt="Lego"
  />
)
