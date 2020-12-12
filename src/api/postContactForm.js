const postContactForm = async (formData) => {
  try {
    const response = await fetch(
      `https://submit-form.com/${process.env.GATSBY_FORMSPARK_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )

    return {
      success: response.status === 200,
    }
  } catch (error) {
    return {
      success: false,
    }
  }
}

export default postContactForm
