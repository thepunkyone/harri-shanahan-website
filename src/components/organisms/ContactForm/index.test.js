import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ContactForm from './index'

const contactName = 'Mr Contact'
const contactEmailAddress = 'email@email.com'
const contactPhoneNumber = '123456789'
const message = 'Hi there!'

describe('Contact form', () => {
  const setup = (postContactForm = () => {}) => {
    const utils = render(<ContactForm postContactForm={postContactForm} />)

    const inputs = screen.getAllByRole('textbox')
    const nameField = inputs[0]
    const emailField = inputs[1]
    const phoneNumberField = inputs[2]
    const messageField = inputs[3]

    const honeypotField = screen.getByRole('checkbox')

    const submitButton = screen.getByRole('button', { text: 'Send message' })

    return {
      nameField,
      emailField,
      phoneNumberField,
      messageField,
      honeypotField,
      submitButton,
      ...utils,
    }
  }

  it('should render with name, email, phone number, message and honeypot fields', () => {
    const {
      nameField,
      emailField,
      phoneNumberField,
      messageField,
      honeypotField,
    } = setup()

    expect(nameField.name).toBe('name')
    expect(emailField.name).toBe('email')
    expect(phoneNumberField.name).toBe('phoneNumber')
    expect(messageField.name).toBe('message')
    expect(honeypotField.name).toBe('_honeypot')
  })

  it('should not submit the form if name field has been left blank', () => {
    const mockPostContactForm = jest.fn()
    const { emailField, phoneNumberField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(phoneNumberField, {
      target: { value: contactPhoneNumber },
    })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    expect(mockPostContactForm).not.toHaveBeenCalled()
  })

  it('should not submit the form if email field has been left blank', () => {
    const mockPostContactForm = jest.fn()
    const { nameField, phoneNumberField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(phoneNumberField, {
      target: { value: contactPhoneNumber },
    })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    expect(mockPostContactForm).not.toHaveBeenCalled()
  })

  it('should submit the form if phone number field has been left blank', async () => {
    const mockPostContactForm = jest.fn().mockResolvedValue({ success: true })
    const { nameField, emailField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(messageField, { target: { value: message } })

    await fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockPostContactForm).toHaveBeenCalled()
    })
  })

  it('should not submit the form if message field has been left blank', () => {
    const mockPostContactForm = jest.fn()
    const { nameField, emailField, phoneNumberField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(phoneNumberField, {
      target: { value: contactPhoneNumber },
    })

    fireEvent.click(submitButton)

    expect(mockPostContactForm).not.toHaveBeenCalled()
  })

  it('should not submit the form if honeypot field has been checked', () => {
    const mockPostContactForm = jest.fn()
    const {
      nameField,
      emailField,
      messageField,
      honeypotField,
      submitButton,
    } = setup(mockPostContactForm)

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(messageField, { target: { value: message } })
    fireEvent.click(honeypotField)

    fireEvent.click(submitButton)

    expect(mockPostContactForm).not.toHaveBeenCalled()
  })

  it('should submit the form and call the api with the correct values if name, email and message fields have been filled in and honeypot field has not been checked', async () => {
    const mockPostContactForm = jest.fn().mockResolvedValue({ success: true })
    const { nameField, emailField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockPostContactForm).toHaveBeenCalledWith({
        name: contactName,
        email: contactEmailAddress,
        phoneNumber: '',
        message,
        _honeypot: false,
      })
    })
  })

  it('should disable the submit button while post contact form api has not returned a response', async () => {
    const mockPostContactForm = jest.fn().mockReturnValue(new Promise(() => {}))
    const { nameField, emailField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('button').disabled).toBeTruthy()
    })
  })

  it('should hide the contact form and display a success notification when post contact form api has returned a success response', async () => {
    const mockPostContactForm = jest.fn().mockResolvedValue({ success: true })
    const { nameField, emailField, messageField, submitButton } = setup(
      mockPostContactForm
    )

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
      expect(
        screen.getByText(
          'Your message has been successfully posted and I will get back to you soon.'
        )
      ).toBeVisible()
    })
  })

  it('should preserve the filled-in contact form and display an error notification when post contact form api has returned a failure response', async () => {
    const mockPostContactForm = jest.fn().mockResolvedValue({ success: false })
    const {
      nameField,
      emailField,
      phoneNumberField,
      messageField,
      submitButton,
    } = setup(mockPostContactForm)

    fireEvent.change(nameField, { target: { value: contactName } })
    fireEvent.change(emailField, { target: { value: contactEmailAddress } })
    fireEvent.change(phoneNumberField, {
      target: { value: contactPhoneNumber },
    })
    fireEvent.change(messageField, { target: { value: message } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      const inputs = screen.queryAllByRole('textbox')

      expect(inputs).toHaveLength(4)
      expect(inputs[0].value).toBe(contactName)
      expect(inputs[1].value).toBe(contactEmailAddress)
      expect(inputs[2].value).toBe(contactPhoneNumber)
      expect(inputs[3].value).toBe(message)

      expect(
        screen.getByText(
          'Something went wrong and your message could not be sent. Please try again.'
        )
      ).toBeVisible()
    })
  })
})
