import React from 'react'
import { CarouselProps } from '../../types'

export const Carousel: React.FC<CarouselProps> = ({ id, title, url, description, site, image, views, onClickLink }) => {
  return (
    <div
      onClick={() => onClickLink(url, id)}
      className="group bg-[#0d0d14] hover:bg-[#13131e] transition-colors duration-150 cursor-pointer flex flex-col gap-3 p-5 h-full"
    >
      <div className="aspect-video overflow-hidden rounded-md bg-[#1a1a2e]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <span className="text-[11px] font-medium tracking-widest uppercase text-violet-400">{site}</span>

      <p className="text-[13px] font-medium leading-[1.5] text-white/80 line-clamp-3">{title}</p>

      <p className="text-[12px] leading-relaxed text-white/40 line-clamp-2">{description}</p>

      <div className="mt-auto flex items-center gap-1.5 text-[11.5px] text-white/25">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>{views} visualizações</span>
      </div>
    </div>
  )
}
