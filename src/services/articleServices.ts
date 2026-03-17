import { api } from './api'

export const articleService = {
  getAll: () => api.get('/api/articles/'),
  incrementViews: (id: number) => api.patch(`/api/articles/${id}`, { views: true }),
}
