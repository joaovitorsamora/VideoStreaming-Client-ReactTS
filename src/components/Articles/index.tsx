import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Carousel } from '../Carousel'
import { articleService } from '../../services/articleServices'
import { RootState } from '@/src/redux/store'
import { useSelector } from 'react-redux'
import { ArticleProps } from '@/src/types'

export const Articles = () => {
  const { articles } = useSelector((state: RootState) => state.articleReducer)

  const [countViews, setCountViews] = useState<Record<number, number>>({})

  const handleClickLink = async (url: string, id: number) => {
    try {
      const response = await articleService.incrementViews(id)
      setCountViews((prev) => ({ ...prev, [id]: response.data.views }))
      window.open(url, '_blank')
    } catch (error) {
      console.error('Erro ao atualizar views:', error)
    }
  }

  return (
    <section className="w-full border-t border-white/[0.05]">
      <div className="px-7 pt-6 pb-3">
        <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-white/30">Artigos em destaque</span>
      </div>

      <div className="border-t border-white/[0.05]">
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 1 },
            768: { slidesPerView: 2, spaceBetween: 1 },
            1024: { slidesPerView: 3, spaceBetween: 1 },
            2560: { slidesPerView: 4, spaceBetween: 1 },
          }}
          className="w-full"
        >
          {articles.map((item: ArticleProps) => (
            <SwiperSlide key={item.id} className="!h-auto border-r border-white/[0.05] last:border-r-0">
              <Carousel
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                onClickLink={handleClickLink}
                site={item.site}
                url={item.url}
                views={countViews[item.id] ?? item.views}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
