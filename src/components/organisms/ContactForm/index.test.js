import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ContactForm from './index'

describe('Contact form', () => {
  const setup = (postContactForm = () => {}) => {
    const utils = render(<ContactForm postContactForm={postContactForm} />)

    return {
      ...utils,
    }
  }

  it('should render with name, email, phone number, message and honeypot fields', () => {})

  it('should not submit the form if name field has been left blank', () => {})

  it('should not submit the form if email field has been left blank', () => {})

  it('should not submit the form if email is not a valid email address', () => {})

  it('should submit the form if phone number field has been left blank', () => {})

  it('should not submit the form if message field has been left blank', () => {})

  it('should not submit the form if honeypot field has been checked', () => {})

  it('should submit the form if name, email and message fields have been filled in and honeypot field has not been checked', () => {
    // calls the api with the correct values
  })

  it('should disable the submit button while post contact form api has not returned a response', () => {})

  it('should hide the contact form and display a success notification when post contact form api has returned a success response', () => {})

  it('should preserve the filled-in contact form and display an error notification when post contact form api has returned a failure response', () => {})
})
