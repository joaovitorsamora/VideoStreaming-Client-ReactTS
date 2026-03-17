interface VideoProps {
  id: number
  url: string
  title: string
  description?: string
}

interface Comment {
  id: string
  content: string
  user: string
}

interface VideoDetailState {
  videos: VideoProps[]
  likes: number
  dislikes: number
  comments: Comment[]
}

interface ArticleProps {
  id: number
  title: string
  url: string
  description: string
  site: string
  image: string
  views: number
}

interface HeaderProps {
  title?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
}

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

interface CarouselProps {
  id: number
  title: string
  url: string
  description: string
  site: string
  image: string
  views: number
  onClickLink: (url: string, id: number) => void
}

interface useFetchDataProps {
  urls: string[]
}

export type {
  VideoProps,
  VideoDetailState,
  TitleProps,
  ArticleProps,
  InputProps,
  HeaderProps,
  CarouselProps,
  useFetchDataProps,
  Comment,
}
