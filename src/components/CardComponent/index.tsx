import React from 'react'
import { Link } from 'react-router-dom'
import { VideoProps } from '../../types'

export const CardComponent: React.FC<VideoProps> = ({ id, title }) => {
  const handleAccess = () => {
    sessionStorage.setItem('canAccessVideo', 'true')
  }

  return (
    <Link
      to={`/pages/VideoDetail/${id}`}
      onClick={handleAccess}
      className="group bg-[#0a0a0f] hover:bg-[#111118] transition-colors duration-150 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden bg-[#1a1a25]">
        <img
          src={`/thumbnails/${id}.jpeg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            <svg className="w-4 h-4 text-[#0a0a0f] ml-0.5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 3.5l8 4.5-8 4.5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-[13.5px] font-medium leading-snug text-white/80">{title}</p>
      </div>
    </Link>
  )
}
