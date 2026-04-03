export const getYoutubeId = (embedUrl: string) => {
  if (!embedUrl) return ''

  const match = embedUrl.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
}
