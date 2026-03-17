import { VideoAction } from '../video/reducer'
import { VideoDetailState, VideoProps } from '../../types'
import { ADD_COMMENT, SET_COMMENTS, SET_DISLIKES, SET_LIKES, SET_VIDEO_DETAIL } from './actions-types'
import { ArticleAction } from '../article/reducer'

type SetVideoDetailAction = { type: typeof SET_VIDEO_DETAIL; payload: VideoProps[] }
type SetLikesAction = { type: typeof SET_LIKES; payload: number }
type SetDislikesAction = { type: typeof SET_DISLIKES; payload: number }
type SetCommentsAction = { type: typeof SET_COMMENTS; payload: Comment[] }
type AddCommentAction = { type: typeof ADD_COMMENT; payload: Comment }

const initialState: VideoDetailState = {
  videos: [],
  likes: 0,
  dislikes: 0,
  comments: [],
}

export type VideoDetailAction =
  | SetVideoDetailAction
  | SetLikesAction
  | SetDislikesAction
  | SetCommentsAction
  | AddCommentAction

const videoDetailReducer = (state = initialState, action: VideoDetailAction) => {
  switch (action.type) {
    case SET_VIDEO_DETAIL:
      return {
        ...state,
        videos: Array.isArray(action.payload) ? action.payload : [action.payload],
      }

    case SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      }

    case SET_DISLIKES:
      return {
        ...state,
        dislikes: action.payload,
      }

    case SET_COMMENTS:
      return {
        ...state,
        comments: Array.isArray(action.payload) ? action.payload : [],
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: Array.isArray(action.payload) ? [...action.payload] : [...state.comments, action.payload],
      }
    default:
      return state
  }
}

export default videoDetailReducer
