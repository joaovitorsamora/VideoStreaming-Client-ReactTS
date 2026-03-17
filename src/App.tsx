import React, { Suspense } from 'react'
import { Articles, SkeletonArticleCard, SkeletonVideoCard } from './components/index'
import './App.css'
import { useVideos } from './hooks/useVideos'
import { useArticles } from './hooks/useArticles'
import FilteredVideos from './components/FilteredVideos'

const App = () => {
  const { loadingVideos } = useVideos()
  const { loadingArticles } = useArticles()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow min-h-screen">
        <div className="relative z-10 px-4 pt-8">
          <Suspense fallback={<SkeletonVideoCard />}>
            {loadingVideos ? <SkeletonVideoCard /> : <FilteredVideos />}
          </Suspense>
        </div>
        <Suspense fallback={<SkeletonArticleCard />}>{loadingArticles ? <SkeletonVideoCard /> : <Articles />}</Suspense>
      </main>
    </div>
  )
}

export default App
