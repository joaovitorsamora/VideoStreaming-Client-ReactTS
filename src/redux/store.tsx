import { thunk } from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { VideoDetailState } from '../types'
import videoReducer, { VideoState } from './video/reducer'
import videoDetailReducer from './video-detail/reducer'
import articleReducer, { ArticleState } from './article/reducer'

export interface RootState {
  videoReducer: VideoState
  videoDetailReducer: VideoDetailState
  articleReducer: ArticleState
}

const rootReducer = combineReducers({
  videoReducer,
  videoDetailReducer,
  articleReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk) as any)

export default store
