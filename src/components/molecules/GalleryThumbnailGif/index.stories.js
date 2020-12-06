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
  />
)

export const videoGalleryThumbnailGif = () => (
  <GalleryThumbnailGif
    title="Lego"
    url="/"
    video="http://techslides.com/demos/sample-videos/small.mp4"
    linkToVideo
  />
)
