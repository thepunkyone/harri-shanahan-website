import React from 'react'

import Gallery from './index'
import LazyImage from '../../atoms/LazyImage'

const items = [
  <LazyImage
    alt="Picture 1"
    src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    dataSrc="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  />,
  <LazyImage
    alt="Picture 2"
    src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    dataSrc="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  />,
  <LazyImage
    alt="Picture 3"
    src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=719&q=80"
    dataSrc="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=719&q=80"
  />,
  <LazyImage
    alt="Picture 4"
    src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
    dataSrc="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
  />,
  <LazyImage
    alt="Picture 5"
    src="https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
    dataSrc="https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
  />,
  <LazyImage
    alt="Picture 6"
    src="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    dataSrc="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  />,
  <LazyImage
    alt="Picture 7"
    src="https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    dataSrc="https://images.unsplash.com/photo-1474401915596-3c5adf84ef01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  />,
  <LazyImage
    alt="Picture 8"
    src="https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
    dataSrc="https://images.unsplash.com/photo-1504870712357-65ea720d6078?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
  />,
  <LazyImage
    alt="Picture 9"
    src="https://images.unsplash.com/photo-1462480803487-a2edfd796460?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    dataSrc="https://images.unsplash.com/photo-1462480803487-a2edfd796460?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
  />,
  <LazyImage
    alt="Picture 10"
    src="https://images.unsplash.com/photo-1462486387766-dcf408d34ece?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80"
    dataSrc="https://images.unsplash.com/photo-1462486387766-dcf408d34ece?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=564&q=80"
  />,
  <LazyImage
    alt="Picture 11"
    src="https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"
    dataSrc="https://images.unsplash.com/photo-1452621946466-c0f2ff2ff100?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"
  />,
  <LazyImage
    alt="Picture 12"
    src="https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
    dataSrc="https://images.unsplash.com/photo-1518021964703-4b2030f03085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
  />,
]

export default {
  title: 'Organisms/Gallery',
}

export const defaultGallery = () => <Gallery items={items} />
