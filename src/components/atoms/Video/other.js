import React from 'react'

const OtherVideo = ({ url }) => {
  return (
    <video loop muted autoPlay playsInline>
      <source src={url} type="video/mp4" />
    </video>
  )
}

export default OtherVideo
