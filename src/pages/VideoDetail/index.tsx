import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { addComment, setDislikes, setLikes, setVideoDetail } from '../../redux/video-detail/actions'
import { videoService } from '../../services/videoServices'
import { RootState } from '@/src/redux/store'
import { Comment } from '../../types'
import ExpandableText from '../../components/ExpandableText'

const generateUsername = () => `user${Math.floor(Math.random() * 1_000_000_000)}`

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [commentText, setCommentText] = useState('')
  const [likeEnabled, setLikeEnabled] = useState(true)
  const [dislikeEnabled, setDislikeEnabled] = useState(true)

  const { videos, likes, dislikes, comments } = useSelector((state: RootState) => state.videoDetailReducer)

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate('/')
      return
    }

    if (id) {
      videoService
        .getById(id)
        .then((response) => {
          dispatch(setVideoDetail(response.data))
          dispatch(setLikes(response.data.likes))
          dispatch(setDislikes(response.data.dislikes))
          dispatch(addComment(response.data.comments))
        })
        .catch((error) => {
          console.error(error.response ? error.response.data : error.message)
        })
    }
  }, [id, dispatch, navigate])

  const handleLike = () => {
    videoService
      .like(Number(id))
      .then((response) => {
        dispatch(setLikes(response.data.likes))
        setLikeEnabled(false)
      })
      .catch(console.error)
  }

  const handleDislike = () => {
    videoService
      .dislike(Number(id))
      .then((response) => {
        dispatch(setDislikes(response.data.dislikes))
        setDislikeEnabled(false)
      })
      .catch(console.error)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!commentText.trim()) return

    const payload = { content: commentText, user: generateUsername() }

    videoService
      .addComment(Number(id), payload)
      .then((response) => {
        dispatch(addComment(response.data.data.comment))
        setCommentText('')
      })
      .catch(console.error)
  }

  if (!videos) return null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-white">
      {videos.map((video) => (
        <>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/[0.07] bg-[#111118]">
            <iframe
              src={video.url}
              title={video.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug">{video.title}</h1>

            <ExpandableText
              text={video.description ?? ''}
              maxLength={120}
              className="text-sm text-white/45 leading-relaxed bg-white/[0.03] rounded-lg px-4 py-3 border border-white/[0.05]"
            />
          </div>
          <div className="flex items-center gap-2 mt-5 pb-6 border-b border-white/[0.06]">
            <button
              onClick={handleLike}
              disabled={!likeEnabled}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed
                ${
                  !likeEnabled
                    ? 'bg-violet-500/15 border-violet-500/40 text-violet-300'
                    : 'bg-white/[0.04] border-white/[0.09] text-white/65 hover:bg-white/[0.08] hover:text-white'
                }`}
            >
              <ThumbsUp size={14} />
              {likes}
            </button>

            <button
              onClick={handleDislike}
              disabled={!dislikeEnabled}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed
                ${
                  !dislikeEnabled
                    ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                    : 'bg-white/[0.04] border-white/[0.09] text-white/65 hover:bg-white/[0.08] hover:text-white'
                }`}
            >
              <ThumbsDown size={14} />
              {dislikes}
            </button>
          </div>

          <div className="mt-6">
            <p className="text-[13px] text-white/35 mb-4 tracking-wide">
              {comments.length} {comments.length === 1 ? 'comentário' : 'comentários'}
            </p>

            <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-8">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Escreva um comentário..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-[13px] text-white placeholder:text-white/20 outline-none focus:border-violet-500/50 transition-colors duration-150"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-medium rounded-lg transition-colors duration-150"
              >
                Enviar
              </button>
            </form>

            <ul className="flex flex-col gap-5">
              {comments.map((comment: Comment, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/25 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-medium text-violet-300">
                      {comment.user.slice(-2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-white/45 mb-0.5">{comment.user}</p>
                    <p className="text-[13.5px] text-white/70 leading-relaxed">{comment.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  )
}

export default VideoDetail
