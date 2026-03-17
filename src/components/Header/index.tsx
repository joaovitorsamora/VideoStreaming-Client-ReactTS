import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { HeaderProps } from '../../types'

export const Header: React.FC<HeaderProps> = ({ title, onChange, value, placeholder }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] backdrop-blur-md sticky top-0 z-20">
      <div className="w-24 flex items-center">
        {!isHome && (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors duration-150"
          >
            <ArrowLeft size={15} />
            Voltar
          </Link>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-violet-500" />
        <span className="text-[15px] font-semibold tracking-tight text-white">{title ?? 'ClipStream'}</span>
      </div>

      <div className="w-24 flex justify-end">
        {isHome && (
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-2 w-44 transition-all duration-150 hover:bg-white/[0.07] hover:border-white/[0.14] focus-within:border-violet-500/50">
            <Search size={13} className="text-white/30 shrink-0" />
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder ?? 'Buscar vídeos...'}
              className="bg-transparent border-none outline-none text-[13px] text-white placeholder:text-white/25 w-full font-sans"
            />
          </div>
        )}
      </div>
    </header>
  )
}
