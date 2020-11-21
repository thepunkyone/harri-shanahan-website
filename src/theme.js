import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a051bc',
    },
    secondary: {
      main: '#027b84',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f7f0ea',
      // default: '#f2f2f2',
      // color: #f4ebe2; -- yellow, colour tertiary
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
      // fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 700,
      fontSize: 80,
    },
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: 22,
    },
    body2: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: 19,
    },
    button: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 600,
    },
  },
})

export default theme
