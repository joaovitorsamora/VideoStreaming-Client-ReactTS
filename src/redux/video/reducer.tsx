import { SET_SEARCH_TERMS, SET_VIDEOS } from './actions-types'
import { VideoProps } from '../../types'

export interface VideoState {
  videos: VideoProps[]
  searchTerms: string
}

const initialState: VideoState = {
  videos: [],
  searchTerms: '',
}

export interface VideoAction {
  type: string
  payload: VideoProps[] | string
}

const videoReducer = (state: VideoState = initialState, action: VideoAction): VideoState => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload as VideoProps[],
      }
    case SET_SEARCH_TERMS:
      return {
        ...state,
        searchTerms: action.payload as string,
      }
    default:
      return state
  }
}

export default videoReducer
