import { SET_ARTICLES } from './actions-types'
import { ArticleProps } from '@/src/types'

export interface ArticleState {
  articles: ArticleProps[]
}

const initialState: ArticleState = {
  articles: [],
}

export interface ArticleAction {
  type: string
  payload: ArticleProps[]
}

const articleReducer = (state = initialState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }
    default:
      return state
  }
}

export default articleReducer
