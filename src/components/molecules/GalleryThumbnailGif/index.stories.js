import React from 'react'

import GalleryThumbnailGif from './index'

export default {
  title: 'Molecules/GalleryThumbnailGif',
}

export const defaultGalleryThumbnailGif = () => (
  <GalleryThumbnailGif
    title="Lego"
    url="/"
    video="http://techslides.com/demos/sample-videos/small.mp4"
    fallbackGif="https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif"
  />
)

export const videoGalleryThumbnailGif = () => (
  <GalleryThumbnailGif
    superTitle="Our Kid"
    title="Lego"
    url="/"
    video="http://techslides.com/demos/sample-videos/small.mp4"
    fallbackGif="https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif"
    icon="video"
  />
)

export const imageGalleryThumbnailGif = () => (
  <GalleryThumbnailGif
    title="Lego"
    url="/"
    video="http://techslides.com/demos/sample-videos/small.mp4"
    fallbackGif="https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif"
    icon="gallery"
  />
)
