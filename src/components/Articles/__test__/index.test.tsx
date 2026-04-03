import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { Carousel } from '../../Carousel'

describe('Carousel component', () => {
  test('should render article data and handle click', () => {
    const onClickMock = vi.fn()

    const item = {
      id: 1,
      title: 'title',
      description: 'description',
      image: 'image',
      onClickLink: onClickMock,
      site: 'site.com',
      url: 'https://google.com',
      views: 100,
    }

    render(<Carousel {...item} />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
    expect(screen.getByText(/site\.com/i)).toBeInTheDocument()

    expect(screen.getByText(/100/i)).toBeInTheDocument()

    expect(screen.getByAltText(item.title)).toHaveAttribute('src', item.image)

    fireEvent.click(screen.getByText(/title/i))

    expect(onClickMock).toHaveBeenCalledWith(item.url, item.id)
  })
})
