import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from './index'

jest.mock('../../../hooks/use-site-metadata', () => () => ({
  siteUrl: 'harrishanahan.com',
}))

describe('Header', () => {
  it('should render with Harris name', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Harri Shanahan')).toBeVisible()
  })

  it('should link to index page', () => {
    const { getByRole } = render(<Header />)

    expect(getByRole('link')).toHaveAttribute('href', '/')
  })
})
