import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import styles from './contactForm.module.scss'

const ContactForm = ({ className, postContactForm }) => {
  const [submittingForm, setSubmittingForm] = useState(false)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    setShowErrorNotification(false)
    setSubmittingForm(true)

    const { name, email, phoneNumber, message, _honeypot } = e.target.elements
    const response = await postContactForm({
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      message: message.value,
      _honeypot: _honeypot.checked,
    })

    if (response.success) {
      setShowSuccessNotification(true)
    } else {
      setShowErrorNotification(true)
    }

    setSubmittingForm(false)
  }

  if (showSuccessNotification) {
    return (
      <div
        className={classNames(
          styles.successNotification,
          styles.fadeInDown,
          styles.animated
        )}
      >
        <Typography
          className={styles.successNotificationHeading}
          component="h4"
          variant="h4"
          gutterBottom
        >
          Thanks for reaching out!
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          Your message has been successfully posted and I will get back to you
          soon.
        </Typography>
        <Typography component="p" variant="body2" color="textSecondary">
          Kind regards,
        </Typography>
        <Typography component="p" variant="body2" color="textSecondary">
          Harri
        </Typography>
      </div>
    )
  }

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={onFormSubmit}
    >
      <TextField
        className={styles.field}
        required
        label="Name"
        name="name"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.field}
        required
        label="Email address"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.field}
        label="Phone number"
        name="phoneNumber"
        type="tel"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.textArea}
        required
        label="Message"
        name="message"
        variant="outlined"
        multiline
        fullWidth
      />
      <div className={styles.fieldHoneypot}>
        <input
          id="_honeypot"
          type="checkbox"
          name="_honeypot"
          tabIndex="-1"
          autoComplete="off"
        />
        <label htmlFor="_honeypot">
          Only for spam bots, please leave unticked
        </label>
      </div>
      {showErrorNotification && (
        <div
          className={classNames(
            styles.errorNotification,
            styles.fadeInDown,
            styles.animated
          )}
        >
          <Typography component="h4" variant="h4" gutterBottom>
            Oops!
          </Typography>
          <Typography
            component="p"
            variant="body1"
            color="textSecondary"
            gutterBottom
          >
            Something went wrong and your message could not be sent. Please try
            again.
          </Typography>
        </div>
      )}
      <Button
        className={styles.submitButton}
        size="large"
        variant="contained"
        color="primary"
        type="submit"
        disabled={submittingForm}
      >
        Send message
      </Button>
    </form>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
  postContactForm: PropTypes.func.isRequired,
}

export default ContactForm
