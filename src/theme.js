import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

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
      default: '#fff',
      // default: '#f2f2f2',
    },
    text: {
      primary: '#000c26',
    }
  },
  typography: {
    fontFamily: `"Merriweather", "Helvetica", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: 19,
    },
    body2: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: 16,
    },
    button: {
      fontFamily: `"Open Sans", "Helvetica", "Arial", sans-serif`,
      fontWeight: 600,
    }
  }
});

export default theme;
