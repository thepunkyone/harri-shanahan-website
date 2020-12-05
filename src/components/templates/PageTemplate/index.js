import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const PageTemplate = ({ title, description, image, absoluteUrl, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="rating" content="general" />
        <meta name="robots" content="all" />

        <meta property="og:site_name" content="Harri Shanahan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@hshanahanart" />
        <meta property="twitter:url" content={absoluteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  absoluteUrl: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default PageTemplate
