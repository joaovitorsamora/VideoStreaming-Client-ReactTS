import { useEffect, useState } from 'react'
import { setVideos } from '../redux/video/actions'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { VideoAction } from '../redux/video/reducer'
import { videoService } from '../services/videoServices'

export const useVideos = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, VideoAction>>()
  const [loadingVideos, setLoadingVideos] = useState(true)

  useEffect(() => {
    setLoadingVideos(true)
    videoService
      .getAll()
      .then((videoRes) => {
        console.log('total videos:', videoRes.data.length, videoRes.data)
        dispatch(setVideos(videoRes.data))
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
      .finally(() => {
        setLoadingVideos(false)
      })
  }, [dispatch])

  return {
    loadingVideos,
    setLoadingVideos,
  }
}
