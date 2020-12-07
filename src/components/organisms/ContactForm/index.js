import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import styles from './contactForm.module.scss'

const ContactForm = ({ className }) => {
  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitting')
      }}
    >
      <TextField
        className={styles.field}
        required
        label="Name"
        type="text"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.field}
        required
        label="Email address"
        type="email"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.field}
        label="Phone number"
        type="tel"
        variant="outlined"
        fullWidth
      />
      <TextField
        className={styles.textArea}
        required
        label="Message"
        variant="outlined"
        multiline
        fullWidth
      />
      <Button
        className={styles.submitButton}
        size="large"
        variant="contained"
        color="primary"
      >
        Send message
      </Button>
    </form>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
}

export default ContactForm
