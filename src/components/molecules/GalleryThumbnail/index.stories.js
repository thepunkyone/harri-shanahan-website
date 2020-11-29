import React from 'react'

import GalleryThumbnail from './index'

export default {
  title: 'Molecules/GalleryThumbnail',
}

export const defaultGalleryThumbnail = () => (
  <GalleryThumbnail
    title="Mountain 2020"
    url="/"
    image="https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
  />
)

export const videoGalleryThumbnail = () => (
  <GalleryThumbnail
    title="Mountain 2020"
    url="/"
    image="https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
    video
  />
)
