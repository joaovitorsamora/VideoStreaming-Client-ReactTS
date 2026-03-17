import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { ArticleProps } from '../types'
import { ArticleAction } from '../redux/article/reducer'
import { setArticles } from '../redux/article/actions'
import { articleService } from '../services/articleServices'

export const useArticles = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, ArticleAction>>()
  const [loadingArticles, setLoadingArticles] = useState(true)

  useEffect(() => {
    setLoadingArticles(true)
    articleService
      .getAll()
      .then((articleRes) => {
        console.log('total articles:', articleRes.data.length, articleRes.data)
        dispatch(setArticles(articleRes.data))
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
      .finally(() => {
        setLoadingArticles(false)
      })
  }, [dispatch])

  return {
    loadingArticles,
  }
}
