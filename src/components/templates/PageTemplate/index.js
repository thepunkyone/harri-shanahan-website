import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

import './pageTemplate.scss'

const PageTemplate = ({
  className,
  title,
  description,
  image,
  absoluteUrl,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="rating" content="general" />
        <meta name="robots" content="all" />
        <link rel="canonical" href={absoluteUrl} />

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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}

PageTemplate.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  absoluteUrl: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default PageTemplate
