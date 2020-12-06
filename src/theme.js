import { red } from '@material-ui/core/colors'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// A custom theme for this app
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#a051bc',
      contrastText: '#f7f0ea',
    },
    secondary: {
      main: '#027b84',
      light: '#80cbc4',
      contrastText: '#f7f0ea',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f0ea',
    },
    text: {
      primary: '#000c26',
      secondary: '#3a3a3a',
    },
  },
  typography: {
    fontFamily: `"Merriweather", "Helvetica", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '6rem',
    },
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.3rem',
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 500,
      fontSize: '1.6rem',
    },
    body2: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: '1.4rem',
    },
    button: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 600,
    },
  },
})

const theme = responsiveFontSizes(customTheme)

export default theme
