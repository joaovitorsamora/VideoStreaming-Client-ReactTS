import React from 'react'
import { CardComponent } from '../CardComponent'
import { useFilteredVideos } from '../../hooks/useFilteredVideos'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const FilteredVideos = () => {
  const { videos, searchTerms } = useSelector((state: RootState) => state.videoReducer)
  const { filteredVideoList } = useFilteredVideos(videos, searchTerms)

  if (filteredVideoList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-white/25">
        <p className="text-sm">Nenhum vídeo encontrado para "{searchTerms}"</p>
      </div>
    )
  }

  return (
    <section>
      <div className="px-7 pt-6 pb-3">
        <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-white/30">Vídeos</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border-y border-white/[0.05]">
        {filteredVideoList.map((video) => (
          <CardComponent key={video.id} id={video.id} url={video.url} title={video.title} />
        ))}
      </div>
    </section>
  )
}

export default FilteredVideos
