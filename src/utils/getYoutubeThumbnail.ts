import { getYoutubeId } from './getYoutubeId'

export const getYoutubeThumbnail = (embedUrl: string) => {
  const id = getYoutubeId(embedUrl)

  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}
