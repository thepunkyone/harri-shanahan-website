import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from './index'

describe('Header', () => {
  it('should render with Harris name', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Harri Shanahan')).toBeVisible()
  })
})
