import { useMemo } from 'react'
import { VideoProps } from '../types'

export const useFilteredVideos = (videos: VideoProps[], searchTerms: string) => {
  const filteredVideoList = useMemo(() => {
    if (!searchTerms.trim()) return videos
    return videos.filter((video) => video.title.toLowerCase().includes(searchTerms.toLowerCase()))
  }, [videos, searchTerms])

  return { filteredVideoList }
}
