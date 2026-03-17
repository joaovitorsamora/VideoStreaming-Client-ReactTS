import { SET_ARTICLES } from './actions-types'
import { ArticleProps } from '@/src/types'

export const setArticles = (articles: ArticleProps[]) => ({
  type: SET_ARTICLES,
  payload: articles,
})
