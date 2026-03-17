import { fireEvent, render, screen } from '@testing-library/react'
import { Carousel } from '../../Carousel/index'

jest.mock('../../Carousel/index', () => ({
  Carousel: ({ id, title, description, image, onClickLink, site, url, views }: any) => (
    <div>
      <div data-testid={`carousel-${id}`} onClick={() => onClickLink(url, id)}>
        <div>
          <h3>
            {title} - {site}
            <span>{views}</span>
          </h3>
          <p>{description}</p>
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  ),
}))

describe('Should render Artcicles component', () => {
  const onClickMock = jest.fn()
  const meusItems = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      image: 'image',
      onClickLink: onClickMock,
      site: 'site.com',
      url: 'https://google.com',
      views: 100,
    },
  ]
  test('Should render Articles component', () => {
    render(<Carousel {...meusItems[0]} />)
    meusItems.forEach((element) => {
      expect(screen.getByText(/title/)).toBeInTheDocument()
      expect(screen.getByText(element.description)).toBeInTheDocument()
      expect(screen.getByText(/site\.com/)).toBeInTheDocument()
      expect(screen.getByText(/100/)).toBeInTheDocument()
      expect(screen.getByAltText(element.title)).toHaveAttribute('src', element.image)
    })

    fireEvent.click(screen.getByTestId(`carousel-${meusItems[0].id}`))
    expect(onClickMock).toHaveBeenCalledWith('https://google.com', 1)
  })
})
