const sourceImageType = (image) => {
  const lowerCasedImageUrl = image.toLowerCase()

  const jpeg =
    lowerCasedImageUrl.includes('jpg') || lowerCasedImageUrl.includes('jpeg')
  const svg = lowerCasedImageUrl.includes('svg')
  const png = lowerCasedImageUrl.includes('png')
  const webp = lowerCasedImageUrl.includes('webp')
  const gif = lowerCasedImageUrl.includes('gif')

  if (jpeg) return 'image/jpeg'
  if (svg) return 'image/svg+xml'
  if (png) return 'image/png'
  if (webp) return 'image/webp'
  if (gif) return 'image/gif'

  return ''
}

export default sourceImageType
