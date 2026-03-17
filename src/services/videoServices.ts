import { api } from './api'

export const videoService = {
  getAll: () => api.get('/videos/'),
  getById: (id: string) => api.get(`/videos/${id}`),
  like: (id: number) => api.post(`/videos/${id}/like`),
  dislike: (id: number) => api.post(`/videos/${id}/dislike`),
  addComment: (id: number, body: object) => api.post(`/videos/${id}/comment`, body),
}
